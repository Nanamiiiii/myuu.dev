'use client'
import { chakra } from '@chakra-ui/react'
import Image from 'next/image'

export const ChakraNextImage = chakra(
  Image,
  {},
  {
    shouldForwardProp: prop =>
      [
        'width',
        'height',
        'src',
        'alt',
        'quality',
        'placeholder',
        'blurDataURL',
        'loader',
        'style',
        'sizes',
        'priority',
      ].includes(prop),
  },
)
