import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import HeadSection from '../components/headSection'
const Page = () => {
  return (
    <Layout title="Home">
      <Container>
        <HeadSection delay={0.1}>
          <Box
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p="3"
            mb={6}
            align="center"
          >
            Hello, I&apos;m a frontend developer based in Colombia!
          </Box>
        </HeadSection>
        <Section delay={0.05}>
          <Box display={{ md: 'column' }}>
            <Box flexGrow={1} align="center">
              <Heading as="h2" variant="page-title">
                Hessler Inampuez
              </Heading>
              <p>FrontEnd Developer</p>
            </Box>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 5 }}
              ml={{ md: 6 }}
              align="center"
            >
              <Image
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                maxWidth="100px"
                display="inline-block"
                borderRadius="100%"
                src="/images/hessler.jpg"
                alt="Profile Image"
              />
            </Box>
          </Box>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" textAlign="center" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Hessler is a freelance and a full passion for building digial
            services/stuff he wants. He has a knack for all things lauching
            products, from planning and designing all the way to solving
            real-life problems with code. When not online, he loves learning 3D design.
            {/* <NextLink href="/works/inkdrop">
              <Link>Inkdrop</Link>
            </NextLink> */}
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1992</BioYear>
            Born in Pasto, Nariño.
          </BioSection>
          {/* <BioSection>
            <BioYear>2010</BioYear>
            Completed the Master&apos;s Program in the graduate School of
            Information Science at Nara Institute of Sccence and technology
          </BioSection> */}
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I {'<3'}
          </Heading>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
