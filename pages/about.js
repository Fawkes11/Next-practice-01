import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
/* import { GridItem } from '../components/grid-item' */

/* import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png' */
import HeadSection from '../components/headSection'

const About = () => (
  <Layout title="About">
    <Container>
      <HeadSection delay={0.1}>
        <Heading as="h4" textAlign="center" fontSize={20} mb={4}>
          About
        </Heading>
      </HeadSection>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}></SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default About
