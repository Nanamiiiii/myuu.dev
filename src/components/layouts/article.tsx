'use client'
import { motion } from 'framer-motion'
import { ContentsGridStyle } from '../contents-grid'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
}

const Layout = ({ children }: { children: any }) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {children}
        <ContentsGridStyle />
      </>
    </motion.article>
  )
}

export default Layout
