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
import { SiNextdotjs, SiUnity, SiJquery  } from 'react-icons/si'
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
          Hi, my name is Hessler, and I enjoy solving problems through code. 
          I had the opportunity to take a systems technician course when I was 13, and since then, I&apos;ve been passionate about technology. 
          I&apos;m intellectually curious, proactive, and a detail-oriented problem solver. I&apos;m also a fan of 3D modeling and animations. 
          Currently, I&apos;m focused on frontend development. If you&apos;re interested in creating something cool or if you&apos;re a recruiter interested in my profile, feel free to {' '}
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
              <ListIcon as={SiUnity} color={useColorModeValue('#007a7a', '#fea02f')} />
              Unity{' '}
            </ListItem>
            <ListItem>
              <ListIcon as={SiJquery} color={useColorModeValue('#007a7a', '#fea02f')} />
              jQuery{' '}
            </ListItem>
          </List>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default About
