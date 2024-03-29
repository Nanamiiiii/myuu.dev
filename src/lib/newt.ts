import 'server-only'
import { createClient } from 'newt-client-js'
import { cache } from 'react'
import { Publication, type Article, type ArticleTag } from '../types/blog'

const cdnClient = createClient({
  spaceUid: process.env.NEWT_SPACE_UID || '',
  token: process.env.NEWT_CDN_API_TOKEN || '',
  apiType: 'cdn',
})

const apiClient = createClient({
  spaceUid: process.env.NEWT_SPACE_UID || '',
  token: process.env.NEWT_API_TOKEN || '',
  apiType: 'api',
})

export const getArticles = cache(async () => {
  const { items } = await cdnClient.getContents<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      select: [
        '_id',
        '_sys',
        'title',
        'slug',
        'meta',
        'body',
        'tags',
        'visibility',
      ],
    },
  })
  return items
})

export const getVisibleArticles = cache(async () => {
  const { items } = await cdnClient.getContents<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      visibility: true,
      select: [
        '_id',
        '_sys',
        'title',
        'slug',
        'meta',
        'body',
        'tags',
        'visibility',
      ],
    },
  })
  return items
})

export const getTags = cache(async () => {
  const { items } = await cdnClient.getContents<ArticleTag>({
    appUid: 'blog',
    modelUid: 'tag',
    query: {
      select: ['_id', '_sys', 'name', 'slug'],
    },
  })
  return items
})

export const getTag = cache(async (slug: string) => {
  const tagInfo = await cdnClient.getFirstContent<ArticleTag>({
    appUid: 'blog',
    modelUid: 'tag',
    query: {
      slug: slug,
      select: ['_id', '_sys', 'name', 'slug'],
    },
  })
  return tagInfo
})

export const getVisibleArticlesByTagId = cache(async (tagId: string) => {
  const { items } = await cdnClient.getContents<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      tags: tagId,
      visibility: true,
      select: [
        '_id',
        '_sys',
        'title',
        'slug',
        'meta',
        'body',
        'tags',
        'visibility',
      ],
    },
  })
  return items
})

export const getVisibleArticlesByTag = cache(async (tag: string) => {
  const tagInfo = await cdnClient.getFirstContent<{ _id: string }>({
    appUid: 'blog',
    modelUid: 'tag',
    query: {
      slug: tag,
      select: ['_id'],
    },
  })
  if (!tagInfo) {
    return [] as Article[]
  }
  const { items } = await cdnClient.getContents<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      tags: tagInfo._id,
      visibility: true,
      select: [
        '_id',
        '_sys',
        'title',
        'slug',
        'meta',
        'body',
        'tags',
        'visibility',
      ],
    },
  })
  return items
})

export const getArticleBySlug = cache(
  async (slug: string, isDraft?: boolean) => {
    const client = isDraft ? apiClient : cdnClient
    const article = await client.getFirstContent<Article>({
      appUid: 'blog',
      modelUid: 'article',
      query: {
        slug,
        select: [
          '_id',
          '_sys',
          'title',
          'slug',
          'meta',
          'body',
          'tags',
          'visibility',
        ],
      },
    })
    return article
  },
)

export const getPublications = cache(async () => {
  const { items } = await cdnClient.getContents<Publication>({
    appUid: 'profile',
    modelUid: 'publication',
    query: {
      select: [
        '_id',
        '_sys',
        'title',
        'author',
        'publishedTo',
        'publishedOn',
        'publishedType',
      ],
    },
  })
  return items
})
