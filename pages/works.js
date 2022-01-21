import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import { WorkGridItem } from '../components/grid-item'
import thumbRestaurant from '../public/images/works/restaurant_preview.png'
import thumbFyloVue from '../public/images/works/fylo_vue_preview.png'
import thumbHuddleReact from '../public/images/works/huddle_react_preview.png'
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
              Landing page layout made in vue js, it&apos;s a frontendmentor
              challenge
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
