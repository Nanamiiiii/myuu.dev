import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Text,
  IconButton,
  Accordion,
  VStack,
  Card,
  Popover,
  List,
  Portal,
} from '@chakra-ui/react'
import type { Metadata, NextPage, ResolvingMetadata } from 'next'
import { IoMdMail } from 'react-icons/io'
import {
  SiX,
  SiGithub,
  SiInstagram,
  SiFacebook,
  SiVimeo,
  SiLinkedin,
  SiBluesky,
} from 'react-icons/si'
import { CustomHeading } from '../components/heading'
import { ItemizeName, ItemizeSection } from '../components/itemize'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { Publication } from './pubinfo'
import { reviewedPub, noreviewPub, journalPub, thesisPub } from './pubinfo'

import 'highlight.js/styles/tokyo-night-dark.css'

export const generateMetadata = async (
  props: any,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  return {
    title: 'Akihiro Saiki - Myuu.dev',
    description: "Myuu's Website",
    openGraph: {
      ...(await parent).openGraph,
      url: 'https://myuu.dev',
    },
  }
}

const AchievementsCard = ({
  title,
  booktitle,
  url,
  children,
}: {
  title: string
  booktitle: string
  url?: string
  children: any
}) => {
  return (
    <Card.Root
      variant="outline"
      size="sm"
      width="100%"
      backgroundColor="#00000000"
      fontFamily="Hack, monospace"
    >
      <Card.Header pb="0">
        <Heading fontSize="18px" fontFamily="Hack, monospace">
          {url ? (
            <Link href={url} target="_blank">
              {title}
            </Link>
          ) : (
            <>{title}</>
          )}
        </Heading>
        <Text fontSize="16px">{children}</Text>
      </Card.Header>
      <Card.Body>
        <Text color="gray" fontStyle="italic" fontSize="16px">
          {booktitle}
        </Text>
      </Card.Body>
    </Card.Root>
  )
}

const PubSection = ({
  reviewed,
  noreview,
  journal,
  thesis,
}: {
  reviewed: Publication[]
  noreview: Publication[]
  journal: Publication[]
  thesis: Publication[]
}) => {
  const PubItem = ({ items, name }: { items: Publication[]; name: string }) => {
    if (items.length == 0) return <></>
    return (
      <Accordion.Item value={name}>
        <Accordion.ItemTrigger>
          <Heading as="h4" fontSize="18px" fontWeight="300">
            <Box as="span" flex="1" textAlign="left">
              {name}
            </Box>
          </Heading>
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>
            <VStack>
              {items.map((pub, idx) => {
                return (
                  <AchievementsCard
                    title={pub.title}
                    booktitle={`${pub.publishedTo}, ${pub.publishedOn}`}
                    key={`${name}-${idx}`}
                    url={pub.url}
                  >
                    {pub.author.map((author, idx) => {
                      if (author.myname) {
                        if (idx == 0) {
                          return <u key={idx}>{author.name}</u>
                        } else {
                          return (
                            <span key={idx}>
                              , <u>{author.name}</u>
                            </span>
                          )
                        }
                      } else {
                        if (idx == 0) {
                          return <span key={idx}>{author.name}</span>
                        } else {
                          return <span key={idx}>, {author.name}</span>
                        }
                      }
                    })}
                  </AchievementsCard>
                )
              })}
            </VStack>
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    )
  }
  return (
    <>
      <CustomHeading variant="section-title" fontSize={20} fontWeight="300">
        Publications
      </CustomHeading>
      <Accordion.Root multiple>
        <PubItem items={journal} name="Journal" />
        <PubItem items={reviewed} name="Peer Reviewed" />
        <PubItem items={noreview} name="No Review" />
        <PubItem items={thesis} name="Thesis" />
      </Accordion.Root>
    </>
  )
}

const Home: NextPage = async () => {
  return (
    <>
      <Layout>
        <Container maxWidth="100%" fontSize="18px">
          <Box
            display={{ md: 'flex' }}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              flexShrink={0}
              mt={{ base: 3, md: 3 }}
              mb={{ base: 5, md: 5 }}
              ml={{ md: 6 }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                borderColor="gray"
                borderWidth={4}
                borderStyle="solid"
                maxWidth="200px"
                display="inline-block"
                borderRadius="full"
                src="/images/face_icon_web.webp"
                alt="Profile"
              />
            </Box>
          </Box>

          <Box display={{ md: 'flex' }} mb={10}>
            <Box flexGrow={1}>
              <Heading as="h2" fontWeight="200" fontSize="4xl">
                Akihiro Saiki
              </Heading>
              <Text fontSize="18px" pt={3}>
                Department of Computer Science and Engineering, Waseda
                University
              </Text>
              <Text fontSize="18px">Research Associate / Ph.D Student</Text>
              <Box mt={2} alignItems="center" display="flex">
                <Link href="https://twitter.com/Nanamii_i" target="_blank">
                  <IconButton
                    aria-label="twitter"
                    variant="ghost"
                    colorPalette="cyan"
                    mx={2}
                    fontSize="18px"
                  >
                    <SiX />
                  </IconButton>
                </Link>
                <Link href="https://bsky.app/profile/myuu.dev" target="_blank">
                  <IconButton
                    aria-label="bluesky"
                    variant="ghost"
                    colorPalette="cyan"
                    mx={2}
                    fontSize="18px"
                  >
                    <SiBluesky />
                  </IconButton>
                </Link>
                <Link href="https://github.com/Nanamiiiii" target="_blank">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    colorPalette="cyan"
                    mx={2}
                    fontSize="18px"
                  >
                    <SiGithub />
                  </IconButton>
                </Link>
                <Link href="https://vimeo.com/user108826812" target="_blank">
                  <IconButton
                    aria-label="vimeo"
                    variant="ghost"
                    colorPalette="cyan"
                    mx={2}
                    fontSize="18px"
                  >
                    <SiVimeo />
                  </IconButton>
                </Link>
                <Link href="https://www.instagram.com/773skiz/" target="_blank">
                  <IconButton
                    aria-label="instagram"
                    variant="ghost"
                    colorPalette="cyan"
                    mx={2}
                    fontSize="18px"
                  >
                    <SiInstagram />
                  </IconButton>
                </Link>
                <Link
                  href="https://www.facebook.com/akihiro.lx00"
                  target="_blank"
                >
                  <IconButton
                    aria-label="facebook"
                    variant="ghost"
                    colorPalette="cyan"
                    mx={2}
                    fontSize="18px"
                  >
                    <SiFacebook />
                  </IconButton>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/akihiro-saiki-88b846232/"
                  target="_blank"
                >
                  <IconButton
                    aria-label="Linkedin"
                    variant="ghost"
                    colorPalette="cyan"
                    mx={2}
                    fontSize="18px"
                  >
                    <SiLinkedin />
                  </IconButton>
                </Link>
                <Popover.Root>
                  <Popover.Trigger asChild>
                    <IconButton
                      aria-label="Mail"
                      variant="ghost"
                      colorPalette="cyan"
                      mx={2}
                      fontSize="18px"
                    >
                      <IoMdMail />
                    </IconButton>
                  </Popover.Trigger>
                  <Portal>
                    <Popover.Positioner>
                      <Popover.Content>
                        <Popover.Arrow>
                          <Popover.ArrowTip />
                        </Popover.Arrow>
                        <Popover.Body textAlign="center" fontSize="16px">
                          sk [at] myuu.dev
                          <br />
                          saiki [at] kasahara.cs.waseda.ac.jp
                        </Popover.Body>
                        <Popover.Footer
                          ms="unset"
                          display="flex"
                          justifyContent="center"
                        >
                          Please replace [at] to @
                        </Popover.Footer>
                      </Popover.Content>
                    </Popover.Positioner>
                  </Portal>
                </Popover.Root>
              </Box>
            </Box>
          </Box>

          <Section delay={0.1}>
            <CustomHeading
              variant="section-title"
              fontSize={20}
              fontWeight="300"
            >
              Bio
            </CustomHeading>
            <ItemizeSection>
              <ItemizeName>Handle</ItemizeName>
              Nanamiiiii (as Dev.) / Myuu (as Creator)
            </ItemizeSection>
            <ItemizeSection>
              <ItemizeName>Origin</ItemizeName>
              Niigata, Niigata, Japan (Very good place to live!)
            </ItemizeSection>
          </Section>

          <Section delay={0.15}>
            <CustomHeading
              as="h3"
              variant="section-title"
              fontSize={20}
              fontWeight="300"
            >
              Academic Background
            </CustomHeading>
            <ItemizeSection>
              <ItemizeName>2013.04 - 2019.03</ItemizeName>
              <Link
                href="https://www.niigata-meikun.ed.jp/"
                color="gray.800"
                target="_blank"
              >
                Niigata Meikun J.H.S. / H.S., Japan
              </Link>
              <ItemizeSection style={{ textIndent: '3em' }}>
                <ItemizeName>2013.04 - 2016.03</ItemizeName>
                Niigata Meikun J.H.S.
              </ItemizeSection>
              <ItemizeSection style={{ textIndent: '3em' }}>
                <ItemizeName>2016.04 - 2019.03</ItemizeName>
                Niigata Meikun H.S.
              </ItemizeSection>
            </ItemizeSection>
            <ItemizeSection>
              <ItemizeName>2019.04 - Now</ItemizeName>
              <Link
                href="https://www.fse.sci.waseda.ac.jp/"
                color="gray.800"
                target="_blank"
              >
                Waseda University, Japan
              </Link>
              <ItemizeSection style={{ textIndent: '3em' }}>
                <ItemizeName>2019.04 - 2023.03</ItemizeName>
                School of Fundamental Science and Engineering.
              </ItemizeSection>
              <ItemizeSection style={{ textIndent: '3em' }}>
                <ItemizeName>2023.04 - 2024.03</ItemizeName>
                Graduate School of Fundamental Science and Engineering (Master).
              </ItemizeSection>
              <ItemizeSection style={{ textIndent: '3em' }}>
                <ItemizeName>2024.04 - Now</ItemizeName>
                Graduate School of Fundamental Science and Engineering (Ph.D).
              </ItemizeSection>
            </ItemizeSection>
          </Section>

          <Section delay={0.2}>
            <CustomHeading
              as="h3"
              variant="section-title"
              fontSize={20}
              fontWeight="300"
            >
              Career
            </CustomHeading>
            <ItemizeSection>
              <ItemizeName>2021.08 - 2024.03</ItemizeName>
              Security Engineer at Pentio Co., Ltd. (internship)
            </ItemizeSection>
            <ItemizeSection>
              <ItemizeName>2024.04 - Now</ItemizeName>
              Research Associate at Waseda University.
            </ItemizeSection>
          </Section>

          <Section delay={0.25}>
            <CustomHeading
              as="h3"
              variant="section-title"
              fontSize={20}
              fontWeight="300"
            >
              Research
            </CustomHeading>
            Kimura Laboratory, Waseda Univ. <br />
            Advanced Processor Architecture
            <ItemizeSection>
              <ItemizeName>
                <b>Keywords</b>
              </ItemizeName>
              RISC-V / Secure Computing / Secure Boot / TEE
            </ItemizeSection>
          </Section>

          <Section delay={0.3}>
            <PubSection
              reviewed={reviewedPub}
              noreview={noreviewPub}
              journal={journalPub}
              thesis={thesisPub}
            />
          </Section>

          <Section delay={0.35}>
            <CustomHeading
              as="h3"
              variant="section-title"
              fontSize={20}
              fontWeight="300"
            >
              Awards
            </CustomHeading>
            <ItemizeSection>
              <ItemizeName>2024.03</ItemizeName>
              <Link
                href="https://www.ieice.org/~cpsy/award.shtml"
                target="_blank"
              >
                IEICE CPSY Presentation Award for Excellent Young Researcher
              </Link>
            </ItemizeSection>
          </Section>

          <Section delay={0.4}>
            <CustomHeading
              as="h3"
              variant="section-title"
              fontSize={20}
              fontWeight="300"
            >
              Interest
            </CustomHeading>
            <Paragraph>Basically Low-layer Technologies</Paragraph>
            <Paragraph>Computer Architecture / Operating System </Paragraph>
            <Paragraph>
              Virtualization / Infrastructure / Cyber Security
            </Paragraph>
          </Section>

          <Section delay={0.45}>
            <CustomHeading
              as="h3"
              variant="section-title"
              fontSize={20}
              fontWeight="300"
            >
              Hobbies
            </CustomHeading>
            <List.Root ps={4}>
              <List.Item>
                Games
                <List.Root ps={8}>
                  <List.Item>
                    Call of Duty, VALORANT, ... (FPS makes people crazy...)
                  </List.Item>
                  <List.Item>
                    Resident Evil (Played almost all titles.)
                  </List.Item>
                </List.Root>
              </List.Item>
              <List.Item>
                Movie Creation
                <List.Root ps={8}>
                  <List.Item>MotionGraphics</List.Item>
                  <List.Item>Gameplay Montage (past)</List.Item>
                </List.Root>
              </List.Item>
              <List.Item>
                PC / Gadget
                <List.Root ps={8}>
                  <List.Item>DIY PC is awsome! (Prefer NZXT)</List.Item>
                  <List.Item>
                    Xperia (Sorry, I&apos;m using Pixel 8 Pro now...)
                  </List.Item>
                </List.Root>
              </List.Item>
              <List.Item>
                Sports
                <List.Root ps={8}>
                  <List.Item>
                    Watch soccer match (Love Albirex Niigata in J.League)
                  </List.Item>
                </List.Root>
              </List.Item>
              <List.Item>
                Music
                <List.Root ps={8}>
                  <List.Item>
                    Coldrain, MY FIRST STORY, SECONDWALL and{' '}
                    <span style={{ fontStyle: 'italic' }}>Dojin</span> Music
                  </List.Item>
                </List.Root>
              </List.Item>
              <List.Item>
                Anime
                <List.Root ps={8}>
                  <List.Item>Especially like works around 2010.</List.Item>
                </List.Root>
              </List.Item>
            </List.Root>
          </Section>

          <Section delay={0.5}>
            <CustomHeading
              as="h3"
              variant="section-title"
              fontSize={20}
              fontWeight="300"
            >
              PGP Public Key
            </CustomHeading>
            Created a new PGP key on 2024-10-03.
            <br />
            <pre>
              <Box
                as="code"
                className="hljs"
                borderRadius={10}
                overflowX="scroll"
                fontSize={16}
              >
                pub ed25519 2024-10-03 [SC]
                <br />
                EF868D07BBE906673ECCF715E79A0A2575F66DA2
              </Box>
            </pre>
            <br />
            <pre>
              <Box
                as="code"
                className="hljs"
                borderRadius={10}
                overflowX="scroll"
                fontSize={16}
              >
                -----BEGIN PGP PUBLIC KEY BLOCK-----
                <br />
                <br />
                mDMEZv5KGhYJKwYBBAHaRw8BAQdANqyDUJXUHiAbqdxXkgrAk6AxOeJJrSAeTZ9v
                <br />
                cFQceA60G0FraWhpcm8gU2Fpa2kgPHNrQG15dXUuZGV2PoiTBBMWCgA7FiEE74aN
                <br />
                B7vpBmc+zPcV55oKJXX2baIFAmb+ShoCGwMFCwkIBwICIgIGFQoJCAsCBBYCAwEC
                <br />
                HgcCF4AACgkQ55oKJXX2baKtYwEAoQ8Uf+3gK8Nu+qiStcEjg9PL2mhLQ3yG9jgY
                <br />
                rcK3fY4A+QHd20MZlaNTFPKAwbkdLCVS9WsMiYZf9AcfapO1aUgBuDgEZv5KGhIK
                <br />
                KwYBBAGXVQEFAQEHQPOZVouTc1WtZRiMNrucFPumvkZMC0S4UYygMLpLiUleAwEI
                <br />
                B4h4BBgWCgAgFiEE74aNB7vpBmc+zPcV55oKJXX2baIFAmb+ShoCGwwACgkQ55oK
                <br />
                JXX2baJ/AQEAoxU20tot+T1OE37dFmRXF2+wTLhg5TlHqingLNduN38A/1JZ8gIS
                <br />
                zdnT/jzk5ATqeKsz59h8u5mJPNd2Thzt7EsF
                <br />
                =dDaC
                <br />
                -----END PGP PUBLIC KEY BLOCK-----
              </Box>
            </pre>
          </Section>
        </Container>
      </Layout>
    </>
  )
}

export default Home
