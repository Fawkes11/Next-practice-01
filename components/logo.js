/* import { Text, useColorModeValue } from '@chakra-ui/react' */
import { Icon } from '@chakra-ui/icon'
import { FiHome } from 'react-icons/fi'
import styled from '@emotion/styled'
/* import Image from 'next/image' */
import Link from 'next/link'

const LogoBox = styled.span`
font-size: 16px;
display: inline-flex;
align-items; center;

&:hover img {
    transform: rotate(20deg);
}
`

const Logo = () => {
  /* const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png` */
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Icon as={FiHome} fontSize={20} me={2} />
          Home
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
