import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import { withRouter } from 'next/router'
import Navbar from '../navbar'

const Main = ({ children, router }): JSX.Element => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>Nanamiiiii</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={16}>
        {children}
      </Container>
    </Box>
  )
}

export default Main