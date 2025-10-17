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
  Button,
} from '@chakra-ui/react'
import type { Metadata, NextPage, ResolvingMetadata } from 'next'
import { FaKey } from 'react-icons/fa'
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
import { peerposterPub, Publication, tecrepPub } from './pubinfo'
import { reviewedPub, journalPub, thesisPub } from './pubinfo'

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
  tecrep,
  journal,
  thesis,
  peerposter,
}: {
  reviewed: Publication[]
  tecrep: Publication[]
  journal: Publication[]
  thesis: Publication[]
  peerposter: Publication[]
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
        <PubItem items={journal} name="Journals" />
        <PubItem items={reviewed} name="Peer Reviewed Conferences" />
        <PubItem items={peerposter} name="Peer Reviewed Posters" />
        <PubItem items={tecrep} name="Technichal Reports" />
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
              <Box mt={2} alignItems="center" display="flex" overflow="auto">
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
              <ItemizeName>Name w/ Handle</ItemizeName>
              Akihiro{' '}
              <span style={{ fontStyle: 'italic' }}>&quot;Myuu&quot;</span>{' '}
              &nbsp;Saiki
            </ItemizeSection>
            <ItemizeSection>
              <ItemizeName>Origin</ItemizeName>
              Niigata-City, Niigata, Japan (Very good place to live!)
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
              <ItemizeName>2024.04 - Now</ItemizeName>
              <br />
              <Text textIndent={{ base: '0', md: '1em' }}>
                Waseda University, Graduate School of Fundamental Science and
                Engineering, Ph.D.
              </Text>
              <Text fontStyle="italic" textIndent={{ base: '0', md: '1em' }}>
                Tokyo, Japan
              </Text>
            </ItemizeSection>
            <ItemizeSection pt={2}>
              <ItemizeName>2023.04 - 2024.03</ItemizeName>
              <br />
              <Text textIndent={{ base: '0', md: '1em' }}>
                Waseda University, Graduate School of Fundamental Science and
                Engineering, Master.
              </Text>
              <Text fontStyle="italic" textIndent={{ base: '0', md: '1em' }}>
                Tokyo, Japan
              </Text>
            </ItemizeSection>
            <ItemizeSection pt={2}>
              <ItemizeName>2019.04 - 2023.03</ItemizeName>
              <br />
              <Text textIndent={{ base: '0', md: '1em' }}>
                Waseda University, School of Fundamental Science and
                Engineering.
              </Text>
              <Text fontStyle="italic" textIndent={{ base: '0', md: '1em' }}>
                Tokyo, Japan
              </Text>
            </ItemizeSection>
            <ItemizeSection pt={2}>
              <ItemizeName>2016.04 - 2019.03</ItemizeName>
              <br />
              <Text textIndent={{ base: '0', md: '1em' }}>
                Niigata Meikun H.S.
              </Text>
              <Text fontStyle="italic" textIndent={{ base: '0', md: '1em' }}>
                Niigata, Japan
              </Text>
            </ItemizeSection>
            <ItemizeSection pt={2}>
              <ItemizeName>2013.04 - 2016.03</ItemizeName>
              <br />
              <Text textIndent={{ base: '0', md: '1em' }}>
                Niigata Meikun J.H.S.
              </Text>
              <Text fontStyle="italic" textIndent={{ base: '0', md: '1em' }}>
                Niigata, Japan
              </Text>
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
              <ItemizeName>2024.04 - Now</ItemizeName>
              <br />
              <Text fontStyle="italic" textIndent={{ base: '0', md: '1em' }}>
                Research Associate at Waseda University.
              </Text>
            </ItemizeSection>
            <ItemizeSection>
              <ItemizeName>2021.08 - 2024.03</ItemizeName>
              <br />
              <Text fontStyle="italic" textIndent={{ base: '0', md: '1em' }}>
                Security Engineer at Pentio Co., Ltd. (internship)
              </Text>
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
              Computer Architecture / Security / TEE
            </ItemizeSection>
          </Section>

          <Section delay={0.3}>
            <PubSection
              reviewed={reviewedPub}
              tecrep={tecrepPub}
              journal={journalPub}
              thesis={thesisPub}
              peerposter={peerposterPub}
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
                IEICE CPSY Outstanding Young Researcher Presentation Award
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
                    Call of Duty, Battlefield, VALORANT, ... (FPS makes people
                    crazy...)
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
            <Link
              href="https://keys.openpgp.org/search?q=EF868D07BBE906673ECCF715E79A0A2575F66DA2"
              target="_blank"
            >
              <Button
                aria-label="twitter"
                variant="surface"
                colorPalette="cyan"
                mb={4}
                fontSize="18px"
              >
                <FaKey /> keys.openpgp.org
              </Button>
            </Link>
            <br />
            <pre>
              <Box
                as="code"
                className="hljs"
                borderRadius={10}
                overflowX="scroll"
                fontSize={16}
              >
                pub ed25519 2024-10-03 [C]
                <br />
                EF86 8D07 BBE9 0667 3ECC F715 E79A 0A25 75F6 6DA2
              </Box>
            </pre>
          </Section>
        </Container>
      </Layout>
    </>
  )
}

export default Home
