import { Stack } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { LinkItem } from './navbar'

const leftDivVariants = {
  hidden: {
    x: -1000,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.1
    }
  },
  exit: {
    x: -800,
    opacity: 0,
    transition: {
      type: 'spring',
      bounce: 0.25
    }
  }
}

const rightDivVariants = {
  hidden: {
    x: 1000,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.1
    }
  },
  exit: {
    x: 800,
    opacity: 0,
    transition: {
      type: 'spring',
      bounce: 0.1
    }
  }
}

const stackVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6
    }
  },
  exit: {
    opacity: 0
  }
}

const Modal = ({ onToggle, path, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            width: '100%',
            height: '100vh',
            zIndex: '999',
            margin: '0',
            padding: '0',
            overflow: 'hidden'
          }}
        >
          <motion.div
            variants={leftDivVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'absolute',
              left: '-10%',
              top: 0,
              height: '100vh',
              width: '60%',
              background: '#13142a',
              zIndex: '1050',
              color: 'white'
            }}
          ></motion.div>

          <motion.div
            variants={rightDivVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              height: '100vh',
              width: '60%',
              background: '#13142a',
              zIndex: '1050'
            }}
          ></motion.div>
          <motion.div
            variants={stackVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ position: 'relative', zIndex: '1100' }}
          >
            <Stack
              direction="column"
              spacing="4rem"
              minH="100vh"
              align="center"
              justifyContent="center"
              onClick={onToggle}
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
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default Modal
