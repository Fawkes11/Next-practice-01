import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const LogoBox = styled.span`
font-size: 16px;
display: inline-flex;
align-items; center;

&:hover img {
    transform: rotate(20deg);
}
`


const Logo = () => {
    const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png` 
    return (
        <Link href='/'>
            <a>
                <LogoBox>
                    <Image src={footPrintImg} width={20} height={20} alt='logo'/>
                    <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    ml={3}
                    >
                        Home
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo
