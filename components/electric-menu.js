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
    strokeDasharray: '10 66'
  },
  visible: {
    strokeDashoffset: -65,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
}

const pathVariantsLineC = {
  hidden: {
    strokeDashoffset: 0,
    strokeDasharray: '10 90'
  },
  visible: {
    strokeDashoffset: -79,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
}

const svgStyle = {
  fill: 'none',
  stroke: '#fff',
  strokeWidth: '0.65px',
  strokeLinecap: 'butt',
  strokeLinejoin: 'miter'
}

const ElectricMenu = ({ isActive }) => {
  return (
    <div>
      <motion.svg
        variants={svgVariants}
        initial="hidden"
        animate={isActive ? 'visible' : ''}
        exit="exit"
        width="98.402351"
        height="88.818947"
        viewBox="0 0 26.035622 23.500014"
        version="1.1"
        id="svg1"
      >
        <defs id="defs2" />
        <g id="layer1" transform="translate(-51.982188,-88.41521)">
          <motion.path
            style={svgStyle}
            d="M 60,98.000001 H 70.020091"
            id="path28-1"
            variants={pathVariantsLineA}
          />
          <motion.path
            style={svgStyle}
            d="m 59.999998,96.000001 h 10.020091 4.015809 l 3.752776,-6.5 h -25.57735 l 7.792196,13.496479 9.076798,-9.0768"
            id="path119"
            variants={pathVariantsLineB}
          />
          <motion.path
            style={svgStyle}
            d="M 70.02009,100.00001 H 59.999999 58.273503 L 65,111.65064 77.788675,89.500009 H 56.500001 l 13.496478,13.496481"
            id="path121"
            variants={pathVariantsLineC}
          />
        </g>
      </motion.svg>
    </div>
  )
}

export default ElectricMenu
