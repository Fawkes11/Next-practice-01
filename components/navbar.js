import React from 'react'
import NextLink from 'next/link'
/* import Logo from './logo' */
import {
  Container,
  Box,
  Link,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import ElectricMenu from './electric-menu'
/* import ThemeToggleButton from './theme-toggle-button'
import { FiGithub } from 'react-icons/fi'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon } from '@chakra-ui/icon' */
import { useDisclosure } from '@chakra-ui/hooks'
import Modal from './modal'

export const LinkItem = ({ href, path, children }) => {
  const active = path === href
  /* const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900') */

  return (
    <NextLink href={href}>
      <Link
        px={5}
        py={2}
        border={active ? '1px solid #01a9c1' : undefined}
        borderRadius="5px"
        /* bg={active ? 'glassTeal' : undefined} */
        color={active ? '#01a9c1' : '#f4f5f5'}
        /* _hover={'textDecoration: none'} */
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { isOpen, onToggle } = useDisclosure()

  const { path } = props
  return (
    <>
      <div
        onClick={onToggle}
        style={{
          position: 'fixed',
          left: '50%',
          transform: 'translate(-50%)',
          cursor: 'pointer',
          zIndex: '9999'
        }}
      >
        <ElectricMenu isActive={isOpen} />
      </div>
      <Modal onToggle={onToggle} path={path} isOpen={isOpen} />
      <Box
        position="absolute"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#13142a50')}
        style={{ backdropFilter: 'blur(10px)' }}
        zIndex={1}
        {...props}
      >
        <Container
          display="flex"
          p={2}
          maxW="container.md"
          justifyContent="center"
          wrap="wrap"
        >
          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            justifyContent="space-between"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <LinkItem href="/" path={path}>
              Home
            </LinkItem>

            <LinkItem href="/about" path={path}>
              About
            </LinkItem>

            <Box w={70}></Box>

            <LinkItem href="/works" path={path}>
              Works
            </LinkItem>

            <LinkItem href="/contact" path={path}>
              Contact
            </LinkItem>
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default Navbar
