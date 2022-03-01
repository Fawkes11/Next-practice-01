import { Container, Heading } from '@chakra-ui/react'
import React from 'react'
import HeadSection from '../components/headSection'
import Layout from '../components/layouts/article'
import NoSsr from '../components/no-ssr'
import Section from '../components/section'
import Form from '../components/form'

const Contact = () => {

  

  return (
    <Layout title="Contact">
      <Container>
        <HeadSection delay={0.1}>
          <Heading as="h3" textAlign="center" fontSize={20} mb={4}>
            Contact
          </Heading>
        </HeadSection>

        <Section delay={0.1}>
          <NoSsr>
            <Form />
          </NoSsr>
        </Section>
      </Container>
    </Layout>
  )
}

export default Contact
