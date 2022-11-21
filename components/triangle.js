import { Box, keyframes } from '@chakra-ui/react'

const animationKeyframes = keyframes`
from {
    background-position: 0px;
}
to {
    background-position: -2144px;}
`

const Triangle = () => {


    const animation = `${animationKeyframes} 2s steps(16) infinite`
    return (
        <>
            <Box
                position="absolute"
                transform="translateX(-50%)"
                left="50%"
                zIndex="-1"
                width="134px"
                height="104px"
                backgroundImage="url(/menu_electric.png)"
                animation={animation}
            />
        </>
    )

}

export default Triangle

