import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Work = () => {
  return (
    <Layout title="eCommerce">
      <Container>
        <Section delay={0.2}>
          <Title>Fylo challenge</Title>
          <P>
            Landing page layout made in vue js, it&apos;s a frontendmentor challenge.
          </P>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>Website</Meta>
              <Link href="https://fawkes11.github.io/eighteenth-practice/" target="_blank">
                Fylo - Challenge <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>Vue JS, GitHub Pages</span>
            </ListItem>
          </List>
          <WorkImage src="/images/works/fylo_vue_preview.png" alt="fylo" />
        </Section>
      </Container>
    </Layout>
  )
}

export default Work
