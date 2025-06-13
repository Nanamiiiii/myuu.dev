'use client'

import {
  chakra,
  ConditionalValue,
  HeadingProps,
  useRecipe,
} from '@chakra-ui/react'
import { HeadingRecipe } from '../lib/theme'

export const CustomHeading = (
  props: HeadingProps & {
    variant: ConditionalValue<'section-title' | undefined>
  },
) => {
  const { variant, ...restProps } = props

  const recipe = useRecipe({ recipe: HeadingRecipe })
  const styles = recipe({ variant })

  return <chakra.h3 css={styles} {...restProps} />
}
