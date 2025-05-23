'use client'
import {
  Badge,
  List,
  ListItem,
  ListIcon,
  Button,
  Box,
  Heading,
  UnorderedList,
  Center,
  Divider,
} from '@chakra-ui/react'
import { FaMicrosoft } from 'react-icons/fa'
import { IoLogoAndroid, IoLogoWindows } from 'react-icons/io5'
import {
  SiGoogleplay,
  SiApple,
  SiIos,
  SiGo,
  SiCplusplus,
  SiKubernetes,
  SiDocker,
  SiUnity,
} from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'
import P from '../../../components/paragraph'
import { Title, WorkImagePad, Meta } from '../../../components/work'

import birdolIcon from '../../../public/images/works/birdol_icon.png'

export const Component = () => {
  return (
    <Box maxWidth="100%" fontSize="18px" fontWeight="300">
      <Title>
        Birdol March <Badge>2021</Badge>
      </Title>

      <WorkImagePad src={birdolIcon} alt="birdol_icon" pad={5} />

      <Box display="flex" justifyContent="center" alignItems="center" mb={6}>
        <P>
          A game of bringing up <i>&quot;bishoujo&quot;</i>&nbsp; based on wild
          birds
        </P>
      </Box>

      <Box
        display={{ base: 'none', md: 'flex' }}
        justifyContent="center"
        alignItems="center"
        mb={6}
      >
        <Button
          colorScheme="green"
          mt={5}
          mr={3}
          as="a"
          href="https://play.google.com/store/apps/details?id=com.ProjectB.birdol"
          target="_blank"
          fontWeight="300"
        >
          <SiGoogleplay />
          &nbsp; Google Play
        </Button>
        <Button
          colorScheme="blue"
          mt={5}
          mr={3}
          as="a"
          href="https://www.microsoft.com/ja-jp/p/birdol-march/9p02ggg09clh"
          target="_blank"
          fontWeight="300"
        >
          <FaMicrosoft />
          &nbsp; Microsoft Store
        </Button>
        <Button
          colorScheme="gray"
          mt={5}
          as="a"
          href="https://apps.apple.com/jp/app/%E3%83%90%E3%83%BC%E3%83%89%E3%83%AB-%E3%83%9E%E3%83%BC%E3%83%81/id1593183839"
          target="_blank"
          fontWeight="300"
        >
          <SiApple />
          &nbsp; App Store
        </Button>
      </Box>

      <Box
        display={{ base: 'flex', md: 'none' }}
        justifyContent="center"
        alignItems="center"
        mb={6}
      >
        <Button
          colorScheme="green"
          mt={5}
          mr={3}
          as="a"
          href="https://play.google.com/store/apps/details?id=com.ProjectB.birdol"
          target="_blank"
          fontWeight="300"
        >
          <SiGoogleplay />
        </Button>
        <Button
          colorScheme="blue"
          mt={5}
          mr={3}
          as="a"
          href="https://www.microsoft.com/ja-jp/p/birdol-march/9p02ggg09clh"
          target="_blank"
          fontWeight="300"
        >
          <FaMicrosoft />
        </Button>
        <Button
          colorScheme="gray"
          mt={5}
          as="a"
          href="https://apps.apple.com/jp/app/%E3%83%90%E3%83%BC%E3%83%89%E3%83%AB-%E3%83%9E%E3%83%BC%E3%83%81/id1593183839"
          target="_blank"
          fontWeight="300"
        >
          <SiApple />
        </Button>
      </Box>

      <List
        w={{ base: '90%', sm: '60%', md: '50%', lg: '40%' }}
        mx="auto"
        my={4}
      >
        <ListItem>
          <Meta>Platform</Meta>
          <ListIcon as={IoLogoAndroid} />
          <ListIcon as={IoLogoWindows} />
          <ListIcon as={SiIos} />
        </ListItem>
        <ListItem>
          <Meta>Language</Meta>
          <ListIcon as={SiGo} />
          <ListIcon as={TbBrandCSharp} />
          <ListIcon as={SiCplusplus} />
        </ListItem>
        <ListItem>
          <Meta>Technology</Meta>
          <ListIcon as={SiKubernetes} />
          <ListIcon as={SiDocker} />
          <ListIcon as={SiUnity} />
          &nbsp; and so on...
        </ListItem>
        <ListItem>
          <Meta>Version</Meta>
          v1.0.1
        </ListItem>
        <ListItem>
          <Meta>Price</Meta>
          Free
        </ListItem>
      </List>

      <Divider />

      <Heading as="h4" fontSize={20} mt={6} fontWeight="400">
        <Center>My Contribution</Center>
      </Heading>

      <List
        mb={4}
        w={{ base: '90%', sm: '70%', md: '60%', lg: '50%' }}
        mx="auto"
        mt={3}
      >
        <ListItem>
          <b>Backend Server</b>
          <UnorderedList pl={3} mb={3}>
            <ListItem>Account Management System</ListItem>
            <ListItem>Access Control System (Session / AccessToken)</ListItem>
            <ListItem>Cross-Device Data Linking System</ListItem>
            <ListItem>Authorization Architecture</ListItem>
            <ListItem>Infrastructure</ListItem>
            <ListItem>Building CI/CD Workflow</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          <b>Windows Client</b>
          <UnorderedList pl={3}>
            <ListItem>Customizing Window Layout on Unity UWP</ListItem>
            <ListItem>Debugging</ListItem>
          </UnorderedList>
        </ListItem>
      </List>
    </Box>
  )
}
