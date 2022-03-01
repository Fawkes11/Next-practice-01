import { Box, Container } from '@chakra-ui/react'

import Head from 'next/head'
import React from 'react'
import Navbar from '../navbar'
import NoSsr from '../no-ssr'
import BallTech from '../ball-tech'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Hessler Inampuez - Portfolio</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <BallTech />
        </NoSsr>

        {children}
      </Container>
    </Box>
  )
}

export default Main
