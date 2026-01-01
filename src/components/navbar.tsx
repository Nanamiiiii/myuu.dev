'use client'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  IconButton,
  ClientOnly,
  Skeleton,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { MdGradient } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'
import Logo from './logo'
import { useColorMode } from './ui/color-mode'

const LinkItem = ({ href, children }: { href: string; children: any }) => {
  return (
    <Link p={2} color={{ base: '#202023', _dark: '#f6f6f6' }} asChild>
      <NextLink href={href} passHref>
        {children}
      </NextLink>
    </Link>
  )
}

const LinkItemExt = ({ href, children }: { href: string; children: any }) => {
  return (
    <Link
      href={href}
      p={2}
      color={{ base: '#202023', _dark: '#f6f6f6' }}
      target="_blank"
    >
      {children}
    </Link>
  )
}

export const Navbar = (props: any) => {
  const { toggleColorMode } = useColorMode()
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={{ base: '#f0f8fc40', _dark: '#1a1e2840' }}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="5xl"
        flex-wrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          fontWeight="300"
        >
          <LinkItem href="/">Home</LinkItem>
          <LinkItem href="/skill">Skill</LinkItem>
          <LinkItem href="/works">Works</LinkItem>
          <LinkItemExt href="https://notes.myuu.dev/index">Blogs</LinkItemExt>
        </Stack>

        <Box display="flex" flex={1} alignItems="center" justifyContent="right">
          <ClientOnly fallback={<Skeleton boxSize="8" />}>
            <IconButton
              onClick={toggleColorMode}
              variant="ghost"
              aria-label="Toggle color mode"
              size="sm"
              css={{
                _icon: {
                  width: '5',
                  height: '5',
                },
              }}
            >
              <MdGradient />
            </IconButton>
          </ClientOnly>
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu.Root>
              <Menu.Trigger asChild>
                <IconButton variant="outline" aria-label="Options">
                  <RxHamburgerMenu />
                </IconButton>
              </Menu.Trigger>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="home" asChild>
                    <NextLink href="/" passHref>
                      Home
                    </NextLink>
                  </Menu.Item>
                  <Menu.Item value="skill" asChild>
                    <NextLink href="/skill" passHref>
                      Skill
                    </NextLink>
                  </Menu.Item>
                  <Menu.Item value="works" asChild>
                    <NextLink href="/works" passHref>
                      Works
                    </NextLink>
                  </Menu.Item>
                  <Menu.Item value="blogs" asChild>
                    <a
                      href="https://notes.myuu.dev/index"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Blogs
                    </a>
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Menu.Root>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
