'use client'
import { chakra } from '@chakra-ui/react'
import shouldForwardProp from '@emotion/is-prop-valid'
import { motion } from 'framer-motion'

const StyledDiv = chakra(
  motion.div,
  {},
  {
    shouldForwardProp: prop => {
      return shouldForwardProp(prop) || prop === 'transition'
    },
  },
)

const Section = ({ children, delay = 0 }: { children: any; delay: number }) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </StyledDiv>
)

export default Section
