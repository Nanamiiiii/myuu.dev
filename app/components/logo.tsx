import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  front-weight: bold;
  font-size: 26px;
  display: inline-flex;
  align-items: center;
  height: 40px;
  line-height: 40px;
  padding: 10px;

  &:hover img {
    transform: scale(0.9,0.9);
    transition-duration: 0.3s;
  }
`

const Logo = () => {
  const initialLogo = `/images/logo_${useColorModeValue("dark", "dark")}.png`
  return (
    <Link href="/">
      <LogoBox>
        <Image src={initialLogo} width={20} height={20} alt="logo" />
        <Text 
          color={useColorModeValue('gray.800', 'whiteAlpha.900')} 
          fontFamily='Gwendolyn' 
          fontWeight='normal' 
          ml={5}
        >
          Nanamiiiii
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
