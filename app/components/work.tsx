import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }: { children: any }) => (
  <Box>
    <NextLink href="/works" passHref>
      <Link>Works</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display='inline-block' as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }: { src: string, alt: string }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const WorkImagePad = ({ src, alt, pad }: { src: string, alt: string, pad: number }) => (
  <Image boxShadow="sm" borderRadius="lg" w="full" src={src} alt={alt} mb={4} p={pad} />
)

export const Meta = ({ children }: { children: any }) => (
  <Badge colorScheme="blue" mr={2}>
    {children}
  </Badge>
)
