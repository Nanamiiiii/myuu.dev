import {
  Container,
  Divider,
  HStack,
  Heading,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Tr,
} from '@chakra-ui/react'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { JSDOM } from 'jsdom'
import { Metadata, ResolvingMetadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { BlogTitle } from '../../../components/blog'
import Layout from '../../../components/layouts/article'
import { MarkdownTemplate } from '../../../components/markdown'
import { MarkdownToc } from '../../../components/toc'
import { getArticleBySlug, getArticles } from '../../../lib/newt'
import { Article } from '../../../types/blog'

export const generateStaticParams = async () => {
  const articles = await getArticles()
  return articles.map((article: Article) => ({ slug: `${article.slug}` }))
}

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const { isEnabled } = draftMode()
  const article = await getArticleBySlug(params.slug, isEnabled)
  if (article == null) {
    throw new Error('reference to non-existent entry')
  }
  return {
    title: article.title || '',
    description: article.meta.description || '',
    openGraph: {
      ...(await parent).openGraph,
      url: 'https://myuu.dev/blogs/' + article.slug,
    },
  }
}

type OgpMeta = {
  url: string
  title: string
  description: string
  image: string
}

type Props = {
  params: {
    slug: string
  }
}

const BlogArticle = async ({ params }: Props) => {
  const slug = params.slug
  const { isEnabled } = draftMode()

  const article = await getArticleBySlug(slug, isEnabled)
  if (article == null) {
    notFound()
  }

  // Generate ToC
  // Fetch OGP
  const linkPara = /<p>(https?:\/\/.+?)<\/p>/gu
  const links = Array.from(article.body.matchAll(linkPara)) || []
  let cardDatas: OgpMeta[] = []
  const temps = await Promise.all(
    links.map(async link => {
      const metas = await fetch(link[1])
        .then(res => res.text())
        .then(text => {
          const metaData: OgpMeta = {
            url: link[1],
            title: '',
            description: '',
            image: '',
          }
          const doms = new JSDOM(text)
          const metas = Array.from(
            doms.window.document.getElementsByTagName('meta'),
          )
          for (const meta of metas) {
            const np =
              meta.getAttribute('name') || meta.getAttribute('property')
            if (typeof np !== 'string') continue
            if (np === 'og:title') {
              metaData.title = meta.getAttribute('content') || ''
            }
            if (np === 'og:description') {
              metaData.description = (meta.getAttribute('content') || '').slice(
                0,
                100,
              )
            }
            if (np === 'og:image') {
              metaData.image = meta.getAttribute('content') || ''
            }
          }
          return metaData
        })
        .catch(e => {
          console.log(e)
        })
      return metas
    }),
  )
  cardDatas = temps.filter(temp => temp !== undefined) as OgpMeta[]

  // Replace potential linkcard node
  article.body = article.body.replaceAll(linkPara, (match, p1) => {
    for (let i = 0; i < cardDatas.length; i++) {
      if (cardDatas[i].url === p1) {
        const ogpTitle = cardDatas[i].title
        const ogpDesc = cardDatas[i].description
        const ogpImage = cardDatas[i].image
        return `<linkcard href="${p1}" title="${ogpTitle}" desc="${ogpDesc}" img="${ogpImage}"></linkcard>`
      }
    }
    return `<a href="${p1}">${p1}</a>`
  })

  // Replace Codeblock
  const codeBlkPattern =
    /<pre><code( class="language-(.+?)")?.*?>(.*?)<\/code><\/pre>/gsu
  article.body = article.body.replaceAll(
    codeBlkPattern,
    (match, p1, p2, p3) => {
      if (!p1 || !p2) {
        return `<codeblk>${p3}</codeblk>`
      } else {
        return `<codeblk lang="${p2}">${p3}</codeblk>`
      }
    },
  )

  dayjs.extend(utc)
  dayjs.extend(timezone)
  dayjs.tz.setDefault('Asia/Tokyo')

  const formatDate = (datestr: string) => {
    const jstdate = dayjs(datestr).tz()
    return jstdate.format('YYYY-MM-DD HH:mm:ss')
  }

  return (
    <Layout>
      <Container maxWidth="100%">
        <BlogTitle>{params.slug}</BlogTitle>
        <Heading as="h3" fontSize={30} mt={2} mb={2} fontWeight="300">
          {article.title}
        </Heading>
        <HStack spacing={2} pb={3}>
          {article.tags.map((tag, idx) => (
            <Tag key={idx} variant="subtle" colorScheme="cyan">
              {tag.name}
            </Tag>
          ))}
        </HStack>
        <Divider />
        <TableContainer fontWeight="400" fontSize="14px" pb={2} pt={2}>
          <Table variant="unstyled" size="sm">
            <Tbody>
              <Tr>
                <Td>Create</Td>
                <Td>{formatDate(article._sys.createdAt)}</Td>
              </Tr>
              <Tr>
                <Td>Last Update</Td>
                <Td>{formatDate(article._sys.updatedAt)}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Divider />
        <MarkdownToc source={article.body} />
        <Divider />
        <MarkdownTemplate source={article.body} pt={5} />
      </Container>
    </Layout>
  )
}

export default BlogArticle
