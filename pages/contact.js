import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import HeadSection from '../components/headSection'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Contact = () => {
  return (
    <Layout title="Contact">
      <Container>
        <HeadSection delay={0.1}>
          <Heading as="h3" textAlign="center" fontSize={20} mb={4}>
            Contact
          </Heading>
        </HeadSection>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>Hola</Section>
          <Section delay={0.1}>Contact</Section>
          <Section delay={0.1}>!!</Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Contact
