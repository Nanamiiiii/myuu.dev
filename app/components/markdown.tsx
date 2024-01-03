'use client'
import {
  BoxProps,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Link,
  Code as ChakraCode,
  OrderedList,
  Card,
  Image,
  CardBody,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react'
import { css } from '@emotion/react'
import highlight from 'highlight.js'
import parse, {
  DOMNode,
  domToReact,
  Element,
  HTMLReactParserOptions,
} from 'html-react-parser'

import 'highlight.js/styles/tokyo-night-dark.css'

type MarkdownTemplateProps = {
  source: string
} & BoxProps

const h1 = {
  component: Text,
  props: {
    mt: '24px',
    mb: '16px',
    lineHeight: 1.25,

    color: '#202020',
    fontWeight: '600',
    pb: '.3em',
    fontSize: '1.8em',
    borderBottom: '1px solid #E7ECF2',
  },
}

const h2 = {
  component: Text,
  props: {
    mt: '24px',
    mb: '16px',
    lineHeight: 1.25,

    color: '#202020',
    fontWeight: '600',
    pb: '.3em',
    fontSize: '1.5em',
    borderBottom: '1px solid #E7ECF2',
  },
}

const h3 = {
  component: Text,
  props: {
    mt: '24px',
    mb: '16px',
    lineHeight: 1.25,

    color: '#202020',
    fontWeight: '600',
    fontSize: '1.25em',
  },
}

const h4 = {
  component: Text,
  props: {
    mt: '12px',
    mb: '8px',
    lineHeight: 1.25,

    color: '#202020',
    fontWeight: '600',
    fontSize: '1.125em',
  },
}

const p = {
  component: Text,
  props: {
    lineHeight: '1.5',
    mb: '10px',
    fontSize: '16px',
    color: '##000',
  },
}

const ul = {
  component: UnorderedList,
  props: {
    color: '#000',
    mt: 0,
    mb: 0,
    pl: '2em',
    lineHeight: '1.6',
  },
}

const ol = {
  component: OrderedList,
  props: {
    color: '#000',
    mt: 0,
    mb: 0,
    pl: '2em',
    lineHeight: '1.6',
  },
}

const li = {
  component: ListItem,
}

const a = {
  component: Link,
  props: {
    isExternal: true,
    textDecoration: 'none',
    color: '#0058B3',
    _hover: {
      textDecoration: 'none',
      color: '#4593e6',
    },
  },
}

const code = {
  props: {
    fontSize: '14px',
    px: '0.2em',
    mx: '0.2rem',
    display: 'inline',
  },
}

const preCode = {
  props: {
    fontSize: '14px',
    mb: '10px',
  },
}

const quoteStyle = css`
  margin: 1.4rem 0;
  border-left: 3px solid #9dacb7;
  padding: 2px 0 2px 0.7em;
  color: #505c64;
`

const options: HTMLReactParserOptions = {
  replace: (domNode: DOMNode) => {
    if (domNode.type === 'tag') {
      if (domNode.name === 'h1') {
        return (
          <Text
            as="h1"
            id={(domNode.children[0] as unknown as Text).data}
            scrollMarginTop={20}
            {...h1.props}
          >
            {domToReact(domNode.children as DOMNode[], options)}
          </Text>
        )
      }
      if (domNode.name === 'h2') {
        return (
          <Text
            as="h2"
            id={(domNode.children[0] as unknown as Text).data}
            scrollMarginTop={20}
            {...h2.props}
          >
            {domToReact(domNode.children as DOMNode[], options)}
          </Text>
        )
      }
      if (domNode.name === 'h3') {
        return (
          <Text
            as="h3"
            id={(domNode.children[0] as unknown as Text).data}
            scrollMarginTop={20}
            {...h3.props}
          >
            {domToReact(domNode.children as DOMNode[], options)}
          </Text>
        )
      }
      if (domNode.name === 'h4') {
        return (
          <Text
            as="h4"
            id={(domNode.children[0] as unknown as Text).data}
            scrollMarginTop={20}
            {...h4.props}
          >
            {domToReact(domNode.children as DOMNode[], options)}
          </Text>
        )
      }
      if (domNode.name === 'ul') {
        return (
          <UnorderedList {...ul.props}>
            {domToReact(domNode.children as DOMNode[], options)}
          </UnorderedList>
        )
      }
      if (domNode.name === 'ol') {
        return (
          <OrderedList {...ul.props}>
            {domToReact(domNode.children as DOMNode[], options)}
          </OrderedList>
        )
      }
      if (domNode.name === 'li') {
        return (
          <ListItem>
            {domToReact(domNode.children as DOMNode[], options)}
          </ListItem>
        )
      }
      if (domNode.name === 'a') {
        return (
          <Link {...a.props} href={domNode.attribs.href}>
            {domToReact(domNode.children as DOMNode[], options)}
          </Link>
        )
      }
      if (domNode.name === 'p') {
        return (
          <Text {...p.props}>
            {domToReact(domNode.children as DOMNode[], options)}
          </Text>
        )
      }
      if (domNode.name === 'code') {
        if (
          domNode.parent instanceof Element &&
          domNode.parent.name === 'pre'
        ) {
          const highlightCode = highlight.highlightAuto(
            domToReact(domNode.children as DOMNode[]) as string,
          ).value
          return (
            <Box
              as="code"
              className="hljs"
              borderRadius={10}
              overflowX="scroll"
              {...preCode.props}
            >
              {parse(highlightCode)}
            </Box>
          )
        } else {
          return (
            <ChakraCode {...code.props}>
              {domToReact(domNode.children as DOMNode[], options)}
            </ChakraCode>
          )
        }
      }
      if (domNode.name === 'blockquote') {
        return (
          <Box css={quoteStyle}>
            {domToReact(domNode.children as DOMNode[], options)}
          </Box>
        )
      }
      if (domNode.name === 'linkcard') {
        const url = domNode.attribs.href
        const title = domNode.attribs.title
        const desc = domNode.attribs.desc
        const image = domNode.attribs.img
        const domain = new URL(url).origin
        return (
          <LinkBox>
            <Card
              variant="outline"
              direction={{ base: 'column', md: 'row' }}
              overflow="hidden"
              size="sm"
              mb="10px"
              borderRadius={10}
              backgroundColor="#ffffff10"
              _hover={{ backgroundColor: '#60aaf020' }}
              transitionDuration="0.3s"
            >
              <Image
                objectFit="contain"
                minW="25%"
                maxW={{ base: '100%', md: '40%' }}
                src={image}
                alt={title}
              />
              <CardBody>
                <Heading fontSize="18px" pb={1}>
                  {title}
                </Heading>
                <LinkOverlay href={url} isExternal={true}>
                  <Text
                    textColor="gray"
                    pb={1}
                    overflow="hidden"
                    css={`
                      -webkit-line-clamp: 1;
                      -webkit-box-orient: vertical;
                    `}
                    display="-webkit-box"
                  >
                    {desc}
                  </Text>
                </LinkOverlay>
                <HStack>
                  <Image
                    maxW="14px"
                    maxH="14px"
                    src={'https://www.google.com/s2/favicons?domain=' + domain}
                    alt={title + 'favicon'}
                  />
                  <Text>{domain}</Text>
                </HStack>
              </CardBody>
            </Card>
          </LinkBox>
        )
      }
    }
  },
}

export const MarkdownTemplate = (props: MarkdownTemplateProps) => {
  return <Box {...props}>{parse(props.source, options)}</Box>
}
