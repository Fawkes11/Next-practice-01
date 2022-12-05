import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import { WorkGridItem } from '../components/grid-item'
import thumbRestaurant from '../public/images/works/restaurant_preview.png'
import thumbFyloVue from '../public/images/works/fylo_vue_preview.png'
import thumbHuddleReact from '../public/images/works/huddle_react_preview.png'
import thumbVueMaps from '../public/images/works/vue_maps_preview.png'
import thumbMercadoLibreClone from '../public/images/works/mercadolibre_preview.png'
import thumbChatReact from '../public/images/works/chat_react_express.png'
import thumbBuildiaSite from '../public/images/works/testsite_preview.png'
import HeadSection from '../components/headSection'

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <HeadSection delay={0.1}>
          <Heading as="h3" textAlign="center" fontSize={20} mb={4}>
            Works
          </Heading>
        </HeadSection>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>

          <Section delay={0.1}>
            <WorkGridItem
              id="restaurant"
              title="Restaurant"
              thumbnail={thumbRestaurant}
            >
              An ecommerce for an Italian food restaurant
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="chatReactExpress"
              title="Chat - React"
              thumbnail={thumbChatReact}
            >
              A chat application with React - Socket IO
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="mercadolibre"
              title="MercadoLibre - Clone"
              thumbnail={thumbMercadoLibreClone}
            >
              A clone of mercadolibre&apos;s homepage
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="buildia"
              title="Construction company website"
              thumbnail={thumbBuildiaSite}
            >
              Landing page developed with hubspot&apos;s content manager
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="vuemaps"
              title="Race in google maps"
              thumbnail={thumbVueMaps}
            >
              Interface with VueJs that allows to run a bot race visible on a
              Google Maps map.
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem id="fylovue" title="Fylo" thumbnail={thumbFyloVue}>
              Landing page layout made in vue js, it&apos;s a frontendmentor
              challenge
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="huddlevue"
              title="Huddle"
              thumbnail={thumbHuddleReact}
            >
              Landing page layout made in vue js, it&apos;s a frontendmentor, GitHub
              challenge
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
