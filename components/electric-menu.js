import { motion } from 'framer-motion'

const svgVariants = {
  hidden: {},
  visible: {}
}

const pathVariantsLineA = {
  hidden: {
    strokeOpacity: 1
  },
  visible: {
    strokeOpacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
}

const pathVariantsLineB = {
  hidden: {
    strokeDashoffset: 0,
    strokeDasharray: '7 70'
  },
  visible: {
    strokeDashoffset: -63,
    strokeDasharray: '5 70',
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
}

const pathVariantsLineC = {
  hidden: {
    strokeDashoffset: 0,
    strokeDasharray: '7 72'
  },
  visible: {
    strokeDashoffset: -72,
    strokeDasharray: '5 72',
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
}

const svgStyle = {
  fill: 'none',
  stroke: '#fff',
  strokeWidth: '0.60px',
  strokeLinecap: "round",
  strokeLinejoin: "round",
}


const ElectricMenu = ({ isActive }) => {
  return (
    <div>
      <motion.svg
        variants={svgVariants}
        initial="hidden"
        animate={isActive ? 'visible' : ''}
        exit="exit"
        width="112"
        height="55.5"
        viewBox="0 0 29.633333 14.684376"
        version="1.1"
        id="svg1"
      >
        <defs id="defs2" />
        <g id="layer1">
          <motion.path
            style={svgStyle}
            d="m 18.388595,5.3623839 c 0,0 -7.14375,0 -7.14375,0"
            id="path936"
            variants={pathVariantsLineA}
          />

          <motion.path
            style={svgStyle}
            d="m 11.244845,3.3780036 c 0,0 7.14375,0 7.14375,0 0,0 7.478635,0 7.478635,0 0,0 3.11343,-3.11341002 3.11343,-3.11341002 0,0 -28.32793292,-1e-5 -28.32793292,-1e-5 0,0 8.33571892,8.33572032 8.33571892,8.33572032 0,0 9.400149,-5.2223003 9.400149,-5.2223003"
            id="path932"
            variants={pathVariantsLineB}
          />


          <motion.path
            style={svgStyle}
            d="m 18.388595,7.3467539 c 0,0 -7.143757,0 -7.143757,0 0,0 -3.5099448,0 -3.5099448,0 0,0 7.0818268,7.0817701 7.0818268,7.0817701 0,0 14.163937,-14.16394042 14.163937,-14.16394042 0,0 -23.3399642,0 -23.3399642,0 0,0 12.7479022,7.08217032 12.7479022,7.08217032 z"
            id="path940"
            variants={pathVariantsLineC}
          />
        </g>
      </motion.svg>
    </div>
  )
}

export default ElectricMenu
