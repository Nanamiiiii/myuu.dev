import 'server-only'

import publicationData from './publications.yaml'

type Author = {
  name: string
  myname: boolean
}

export type Publication = {
  title: string
  author: Author[]
  publishedTo: string
  publishedOn: string
  url?: string
}

type PublicationData = {
  reviewed: YamlPublication[]
  technicalReports: YamlPublication[]
  journals: YamlPublication[]
  theses: YamlPublication[]
  peerReviewedPosters: YamlPublication[]
}

type YamlPublication = Omit<Publication, 'author'> & {
  author: string[]
}

const publications = publicationData as PublicationData

const myNames = new Set(['Akihiro Saiki', '齊木昭大'])
const withAuthorMetadata = (publication: YamlPublication): Publication => ({
  ...publication,
  author: publication.author.map(name => ({
    name,
    myname: myNames.has(name),
  })),
})

export const reviewedPub = publications.reviewed.map(withAuthorMetadata)
export const tecrepPub = publications.technicalReports.map(withAuthorMetadata)
export const journalPub = publications.journals.map(withAuthorMetadata)
export const thesisPub = publications.theses.map(withAuthorMetadata)
export const peerposterPub =
  publications.peerReviewedPosters.map(withAuthorMetadata)
