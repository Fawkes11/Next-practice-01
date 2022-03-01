import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Work = () => {
  return (
    <Layout title="Vue Maps">
      <Container>
        <Section delay={0.2}>
          <Title>Technical test</Title>
          <P>
            A test required to apply for a job in a company, it is necessary to
            develop an interface with VueJs to run a bot race visible on a
            Google Maps map. <br/> The competition consists of the user indicating a
            point on the map to which all the bots must approach in a straight
            line, changing their position every 1 second. The bots are randomly
            located in the city where you live.
          </P>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>Website</Meta>
              <Link href="https://fawkes11.github.io/vue-maps/">
                Bot Race - Vue Maps <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>Vue JS, Google Maps API, GitHub Pages</span>
            </ListItem>
          </List>
          <WorkImage src="/images/works/vue_maps_preview.png" alt="Vue_maps" />
        </Section>
      </Container>
    </Layout>
  )
}

export default Work
