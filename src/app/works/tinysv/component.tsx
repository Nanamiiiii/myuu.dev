'use client'
import {
  Container,
  Badge,
  List,
  ListItem,
  ListIcon,
  Button,
  Box,
  Center,
  Heading,
  UnorderedList,
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'
import { SiC, SiLinux } from 'react-icons/si'
import P from '../../../components/paragraph'
import { Title, WorkImage, Meta } from '../../../components/work'

export const Component = () => {
  return (
    <Container maxWidth="100%" fontSize="18px" fontWeight="300">
      <Title>
        tinysv <Badge>2021</Badge>
      </Title>

      <P>
        A <b>minimal & extensive</b> web server application for Linux.
      </P>
      <Box display="flex" justifyContent="center" alignItems="center" mb={6}>
        <Button
          colorScheme="blue"
          mt={5}
          as="a"
          href="https://github.com/Nanamiiiii/tinysv"
          target="_blank"
          fontWeight="300"
        >
          <IoLogoGithub />
          &nbsp; Repository
        </Button>
      </Box>

      <List px={{ base: '60px', md: '150px' }} ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <ListIcon as={SiLinux} />
        </ListItem>
        <ListItem>
          <Meta>Language</Meta>
          <ListIcon as={SiC} />
        </ListItem>
        <ListItem>
          <Meta>Latest Ver.</Meta>
          <span>0.1.0 (2021/12/18)</span>
        </ListItem>
        <ListItem>
          <Meta>License</Meta>
          <span>MIT</span>
        </ListItem>
        <ListItem>
          <Meta>Status</Meta>
          <span>Work in progress</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={20} mt={6} fontWeight="400">
        <Center>Features</Center>
      </Heading>

      <UnorderedList px={{ base: '60px', md: '150px' }} mb={4} mt={2}>
        <ListItem>Linux syscall based</ListItem>
        <ListItem>Small footprint</ListItem>
        <ListItem>Module-based enhancement (no need for rebuild)</ListItem>
        <ListItem>XML formed configuration</ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={20} mt={6} mb={2} fontWeight="400">
        <Center>Screenshots</Center>
      </Heading>

      <WorkImage src="/images/works/tinysv_1.png" alt="tinysv1" />
      <WorkImage src="/images/works/tinysv_2.png" alt="tinysv2" />
      <WorkImage src="/images/works/tinysv_3.png" alt="tinysv3" />
    </Container>
  )
}