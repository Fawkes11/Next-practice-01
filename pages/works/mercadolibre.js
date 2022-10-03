import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const work = () => {
    return (
        <Layout title="MercadoLibre-Clone">
            <Container>
                <Section delay={0.2}>
                    <Title>MercadoLibre</Title>
                    <P>
                        A project carried out to obtain the Alkemy certification,
                        in order to demonstrate the capabilities of a frontend developer,
                        using React Js to create interfaces, Redux for state management,
                        Chakra UI to help create custom and reusable components, Formik
                        to create forms and Yup for validation.
                        It is created following the mobile first development approach
                        for a good experience on all screen sizes.
                    </P>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Website</Meta>
                            <Link href="https://fawkes11.github.io/mercadolibre-clone/" target="_blank">
                                MercadoLibre - Clone <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack</Meta>
                            <span>React JS, Redux, MercadoLibre API, GitHub Pages</span>
                        </ListItem>
                    </List>
                    <WorkImage src="/images/works/restaurant_preview.png" alt="mercadolibre" />
                </Section>
            </Container>
        </Layout>
    )
}

export default work


