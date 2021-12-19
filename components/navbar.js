import React from 'react'
import NextLink from 'next/link'
import Logo from './logo'
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'


const LinkItem = ({href, path, children}) =>{
    const active = path === href
    const inactiveColor =  useColorModeValue('gray.200','whiteAlpha.900')

    return (
        <NextLink href={href}>
            <Link p={2}
            bg={active? 'glassTeal': undefined}
            color={active? '#202023': inactiveColor}
            >
                {children}    
            </Link>
        </NextLink>
    )
}



const Navbar = (props) => {
    const {path} = props
    return (
        <Box
        position='fixed'
        as='nav'
        w='100%'
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{backdropFilter: 'blur(10px)'}}
        zIndex={1}
        {...props}
        >
            <Container display='flex' p={2} maxW='container.md' justifyContent='center' wrap='wrap'> 
                
                <Stack
                direction = {{base: 'column', md:'row'}}
                display={{base: 'none', md:'flex'}}
                width={{base: 'full', md: 'auto'}}
                alignItems='center'
                justifyContent='space-around'
                flexGrow={1}
                mt={{base: 4, md:0}}
                >   

                    <Flex pt={1}>
                        
                            <Logo/>
                        
                    </Flex>

                    

                    <LinkItem href='/posts' path={path}>
                        Posts
                    </LinkItem>

                    <Menu>
                        <MenuButton border='none' as={IconButton} icon={<HamburgerIcon/>} variant='outline' aria-label='Options'/> 
                        <MenuList
                        w='100vw'
                        h='100vh'
                        bgColor='black.50'
                        zIndex={20}
                        
                        >
                            <Stack
                            direction={['column']}
                            spacing='7rem'
                            >
                                <NextLink href='/' passHref>
                                    <MenuItem as={Link} justifyContent='center'>About</MenuItem>
                                </NextLink>
                                <NextLink href='/works' passHref >
                                    <MenuItem as={Link} justifyContent='center'>Works</MenuItem>
                                </NextLink>
                                <NextLink href='/posts' passHref>
                                    <MenuItem as={Link} justifyContent='center'>Posts</MenuItem>
                                </NextLink>
                                <MenuItem as={Link} href='https://www.google.com' justifyContent='center'>View source</MenuItem>
                            </Stack>
                            
                        </MenuList>
                    </Menu>

                    <LinkItem href='/works' path={path}>
                        Works
                    </LinkItem>

                    <ThemeToggleButton/>

                </Stack>
                
            </Container>
        </Box>
    )
}

export default Navbar
