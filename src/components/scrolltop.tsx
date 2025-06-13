'use client'
import { Icon } from '@chakra-ui/react'
import { FC, useEffect } from 'react'
import { RiArrowUpSLine } from 'react-icons/ri'
import { useBoolean } from 'react-use'

export const ScrollToTop: FC = () => {
  const [showButton, setShowButton] = useBoolean(false)

  useEffect(() => {
    window.addEventListener('scroll', watchScroll)
    return () => {
      window.removeEventListener('scroll', watchScroll)
    }
  })

  const watchScroll = () => {
    const basePosition = 200
    const scrollPosition = window.scrollY
    if (basePosition <= scrollPosition) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  return (
    <Icon
      display={showButton ? 'block' : 'none'} // ボタンをToggle
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // 上までSmoothスクロール
      cursor="pointer"
      position="fixed"
      right={6}
      bottom={6}
      as={RiArrowUpSLine}
      bgColor="blue.100"
      color="blue.400"
      w={10}
      h={10}
      rounded="full"
      p={2}
      boxShadow="md"
      _hover={{
        bgColor: 'blue.200',
      }}
    />
  )
}
