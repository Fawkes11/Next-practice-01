import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Work = () => {
    return (
        <Layout title="Construction company website">
            <Container>
                <Section delay={0.2}>
                    <Title>Buildia</Title>
                    <P>
                        This website was developed in the beginning with
                        html css and js only and then the site was made with
                        automanageable content with hubspot tools.
                    </P>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Website</Meta>
                            <Link href="https://fawkes11.github.io/test-site/" target="_blank">
                                Buildia - Landing page <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack</Meta>
                            <span>HTML, CSS, Javascript, Hubspot tools</span>
                        </ListItem>
                    </List>
                    <WorkImage src="/images/works/testsite_preview.png" alt="buildia" />
                </Section>
            </Container>
        </Layout>
    )
}

export default Work