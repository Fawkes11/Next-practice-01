import React, { useState } from 'react'
import NextLink from 'next/link'
import Logo from './logo'
import {
  Container,
  Box,
  Button,
  Link,
  Stack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useColorModeValue
} from '@chakra-ui/react'
import ElectricMenu from './electric-menu'
import ThemeToggleButton from './theme-toggle-button'
import { FiGithub } from 'react-icons/fi'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon } from '@chakra-ui/icon'
import { useDisclosure } from '@chakra-ui/hooks'
import Modal from './modal'

export const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')

  return (
    <NextLink href={href}>
      <Link
        p={2}
        border={active ? 'solid green' : undefined}
        borderRadius="5px"
        /* bg={active ? 'glassTeal' : undefined} */
        color="inactiveColor" /* {active ? '#202023' : inactiveColor} */
        /* _hover={'textDecoration: none'} */
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

  const { path } = props
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
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
        <div
          onClick={onToggle}
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%)',
            cursor: 'pointer',
            zIndex: '9999'
          }}
        >
          <ElectricMenu isActive={isOpen} />
        </div>
        {isOpen ? <Modal onToggle={onToggle} path={path} /> : ''}
        {/* <Modal
          isOpen={isOpen}
          onClose={onClose}
          w="100vw"
          motionPreset="slideInRight"
        >
          {console.log(isOpen, onClose)}
          <ModalContent m="0" display="block" maxW="100vw">
            <ModalBody>
              <Stack
                direction="column"
                spacing="4rem"
                minH="100vh"
                align="center"
                justifyContent="center"
                onClick={onClose}
              >
                <LinkItem href="/" path={path}>
                  Home
                </LinkItem>

                <LinkItem href="/about" path={path}>
                  About
                </LinkItem>

                <LinkItem href="/works" path={path}>
                  Works
                </LinkItem>

                <LinkItem href="/contact" path={path}>
                  Contact
                </LinkItem>
              </Stack>
            </ModalBody>
          </ModalContent>
        </Modal> */}

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
  )
}

export default Navbar
