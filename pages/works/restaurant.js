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
          <Title>Restaurant</Title>
          <P>
            An eCommerce project for a junior web development course, based in
            an Italian food restaurant.
          </P>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>Website</Meta>
              <Link href="https://fawkes11.github.io/deploy-store/#/" target="_blank">
                Restaurant - eCommerce <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>React JS, .NET Framework, MySql, GitHub Pages</span>
            </ListItem>
          </List>
          <WorkImage src="/images/works/restaurant_preview.png" alt="Inkdrop" />
        </Section>
      </Container>
    </Layout>
  )
}

export default Work
