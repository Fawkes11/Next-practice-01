import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import HeadSection from '../components/headSection'
import { 
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram
 } from "react-icons/ai";
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
                maxWidth="150px"
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
            I&apos;m a freelance frontend developer based in Pasto, Colombia, I
            enjoy coding and bringing ideas to life from small business to
            interactive applications. When I&apos;m not programming, I love to
            learn 3d modelling.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="teal"
                variant="outline"
              >
                My Works
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" textAlign="center" variant="section-title">
            Social Media
          </Heading>
          <List>
            <ListItem >
              <Link href='https://github.com/Fawkes11' target='_blank'>
                <Button variant='ghost' leftIcon={<AiFillGithub/>}>Fawkes11</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href='https://www.linkedin.com/in/hesslerinampuez' target='_blank'>
                <Button variant='ghost' leftIcon={<AiFillLinkedin/>}>Linkedin</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href='https://www.instagram.com/hessler_07/' target='_blank'>
                <Button variant='ghost' leftIcon={<AiFillInstagram/>}>@hessler_07</Button>
              </Link>
            </ListItem>
          </List>
        </Section>
        <Divider />
        <Section delay={0.3}>
          <p style={{textAlign: 'center'}}>2022</p>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
