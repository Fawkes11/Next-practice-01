import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const work = () => {
    return (
        <Layout title="Chat-React">
            <Container>
                <Section delay={0.2}>
                    <Title>Chat React</Title>
                    <P>
                        A chat application to practice using Socket IO with React js with Tailwind styles.<br/>
                        You can open two or more tabs from different places to chat with your friends.
                    </P>
                    <List ml={4} my={4}>
                        <ListItem>
                            <Meta>Website</Meta>
                            <Link href="https://react-express-chat-production.up.railway.app/" target="_blank">
                                Chat - React <ExternalLinkIcon mx="2px" />
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack F</Meta>
                            <span>React JS, Tailwind, Github, Socket IO Client</span>
                        </ListItem>
                        <ListItem>
                            <Meta>Stack B</Meta>
                            <span>Node Js, Express, Github, Socket IO</span>
                        </ListItem>
                    </List>
                    <WorkImage src="/images/works/chat_react_express.png" alt="chat with react" />
                </Section>
            </Container>
        </Layout>
    )
}

export default work