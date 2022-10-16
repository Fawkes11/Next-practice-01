import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Link,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { useColorModeValue } from '@chakra-ui/react'
/* import { GridItem } from '../components/grid-item' */

import HeadSection from '../components/headSection'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { IoLogoJavascript, IoLogoReact, IoLogoVue } from 'react-icons/io5'
import { SiNextdotjs, SiWordpress, SiDotnet } from 'react-icons/si'
import { ArrowForwardIcon } from '@chakra-ui/icons'
const About = () => (
  <Layout title="About">
    <Container>
      <HeadSection delay={0.1}>
        <Heading as="h4" textAlign="center" fontSize={20} mb={4}>
          About me
        </Heading>
      </HeadSection>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}></SimpleGrid>
      </Section>
      <Section delay={0.1}>
        <Heading as="h3" textAlign="center" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Hi, my name is Hessler and I enjoy solving problems with code, I had
          the opportunity to do a course as a systems technician when I was 13
          years old, since then I love technology.
          <br />
          Intellectually curious, proactive, problem solver with attention to
          detail. fan of 3D modelling and animations.
          <br />
          Interested in frontEnd (for the moment), if you want to develop
          something cool, or you are a recruiter and you are interested in my
          profile,{' '}
          <NextLink href="/contact">
            <Link>get in touch</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/resume.pdf">
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant="outline"
            >
              Resume
            </Button>
          </NextLink>
        </Box>
        <br />
        <Box>
          <p>
            Here are some technologies I&apos;ve been working with recently:
          </p>

          <List
            mt={3}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }}
          >
            <ListItem>
              <ListIcon as={IoLogoReact} color={useColorModeValue('#007a7a', '#fea02f')} />
              React Js{' '}
            </ListItem>
            <ListItem>
              <ListIcon as={IoLogoVue} color={useColorModeValue('#007a7a', '#fea02f')} />
              Vue Js{' '}
            </ListItem>
            <ListItem>
              <ListIcon as={IoLogoJavascript} color={useColorModeValue('#007a7a', '#fea02f')} />
              JavaScript{' '}
            </ListItem>
            <ListItem>
              <ListIcon as={SiNextdotjs} color={useColorModeValue('#007a7a', '#fea02f')} />
              Next Js{' '}
            </ListItem>
            <ListItem>
              <ListIcon as={SiDotnet} color={useColorModeValue('#007a7a', '#fea02f')} />
              .Net{' '}
            </ListItem>
            <ListItem>
              <ListIcon as={SiWordpress} color={useColorModeValue('#007a7a', '#fea02f')} />
              Wordpress{' '}
            </ListItem>
          </List>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default About
