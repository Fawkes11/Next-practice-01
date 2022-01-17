import NextLink from 'next/link'
import { Heading, Flex, Image, Link, Badge } from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Flex justify="center">
    <NextLink href="/works">
      <Link>Works</Link>
    </NextLink>

    <span>
      &nbsp;
      <ArrowRightIcon fontSize={10} />
      &nbsp;
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Flex>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="blue" mr={2} w="65px" textAlign="center">
    {children}
  </Badge>
)
