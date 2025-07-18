import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import type { Metadata, NextPage, ResolvingMetadata } from 'next'
import { ContentsGrid } from '../../components/contents-grid'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

import amberThumb from '../../public/images/works/amberscash.png'
import babyThumb from '../../public/images/works/baby.png'
import helloThumb from '../../public/images/works/hello.png'
import mirageThumb from '../../public/images/works/mirage.png'
import teatimeThumb from '../../public/images/works/teatime.png'
import voidThumb from '../../public/images/works/void.png'
import wfesThumb from '../../public/images/works/wasefes_cm_2021.png'

export const generateMetadata = async (
  props: any,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  return {
    title: 'Works',
    description: "Myuu's Works",
    openGraph: {
      ...(await parent).openGraph,
      url: 'https://myuu.dev/works',
    },
  }
}

const Works: NextPage = () => {
  return (
    <Layout>
      <Container maxWidth="100%" fontSize="18px" fontWeight="300">
        <Heading as="h4" fontSize={20} mb={4} mt={4} fontWeight="400">
          Movies
        </Heading>

        <SimpleGrid columns={[1, 2, 2]} gap={6} mb={6}>
          <Section delay={0.2}>
            <ContentsGrid
              href="https://vimeo.com/657539057"
              title="mirage"
              thumbnail={mirageThumb}
            >
              2021.11 / Vocaloid MV
            </ContentsGrid>
          </Section>
          <Section delay={0.2}>
            <ContentsGrid
              href="https://vimeo.com/643014253"
              title="void"
              thumbnail={voidThumb}
            >
              2021.11 / Vocaloid MV
            </ContentsGrid>
          </Section>
          <Section delay={0.2}>
            <ContentsGrid
              href="https://vimeo.com/657528799"
              title="MISW Waseda-Sai 2021"
              thumbnail={wfesThumb}
            >
              2021.10 / MotionGraphics
            </ContentsGrid>
          </Section>
          <Section delay={0.2}>
            <ContentsGrid
              href="https://vimeo.com/573561720"
              title="Hello"
              thumbnail={helloThumb}
            >
              2021.7 / MotionGraphics
            </ContentsGrid>
          </Section>
          <Section delay={0.2}>
            <ContentsGrid
              href="https://nico.ms/sm37790855"
              title="AmberScash"
              thumbnail={amberThumb}
            >
              2020.11 / Vocaloid MV
            </ContentsGrid>
          </Section>
          <Section delay={0.2}>
            <ContentsGrid
              href="https://youtu.be/iL3Px_BIiEc"
              title="Teatime"
              thumbnail={teatimeThumb}
            >
              2019.12 / AMV
            </ContentsGrid>
          </Section>
          <Section delay={0.2}>
            <ContentsGrid
              href="https://nico.ms/sm35900824"
              title="baby"
              thumbnail={babyThumb}
            >
              2019.11 / Vocaloid MV
            </ContentsGrid>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
