'use client'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Logo from './logo'

const LinkItem = ({
  href,
  path,
  children,
}: {
  href: string
  path: string
  children: any
}) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      p={2}
      bg={active ? '#c4e8f2' : undefined}
      color={active ? '#202023' : inactiveColor}
      passHref
    >
      {children}
    </Link>
  )
}

export const Navbar = (props: any) => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#f0f8fc40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
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
          mt={{ base: 4, nmd: 0 }}
          fontWeight="300"
        >
          <LinkItem href="/skill" path={path}>
            Skill
          </LinkItem>
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/env" path={path}>
            My Env
          </LinkItem>
          <LinkItem href="/blogs" path={path}>
            Blogs
          </LinkItem>
        </Stack>

        <Box display="flex" flex={1} alignItems="center" justifyContent="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={NextLink} href="/" passHref>
                  Home
                </MenuItem>
                <MenuItem as={NextLink} href="/skill" passHref>
                  Skill
                </MenuItem>
                <MenuItem as={NextLink} href="/works" passHref>
                  Works
                </MenuItem>
                <MenuItem as={NextLink} href="/env" passHref>
                  My Env
                </MenuItem>
                <MenuItem as={NextLink} href="/blogs" passHref>
                  Blogs
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
