'use client'
import {
  Box,
  Container,
  Divider,
  Heading,
  Tag,
  TagLeftIcon,
} from '@chakra-ui/react'
import { FaJava } from 'react-icons/fa'
import {
  SiVisualstudiocode,
  SiNeovim,
  SiArchlinux,
  SiRuby,
  SiRust,
  SiC,
  SiCplusplus,
  SiGo,
  SiCsharp,
  SiPython,
  SiTypescript,
  SiVim,
  SiJavascript,
  SiHaskell,
  SiOcaml,
  SiDotnet,
  SiKubernetes,
  SiDocker,
  SiQemu,
  SiAmazonwebservices,
  SiMicrosoftazure,
  SiVmware,
  SiGooglecloud,
  SiLua,
  SiNixos,
} from 'react-icons/si'
import { ItemizeName, ItemizeSection } from '../../components/itemize'

export const Component = () => {
  return (
    <Container maxWidth="100%" fontSize="18px">
      <Heading as="h3" fontSize={25} mt={2} mb={4} fontWeight="300">
        Development Skills
      </Heading>

      <Heading
        as="h4"
        fontSize={20}
        mb={4}
        variant="section-title"
        fontWeight="300"
      >
        Programming
      </Heading>
      <Heading as="h5" fontSize={18} mb={2} fontWeight="300">
        Awesome
      </Heading>
      <Box display="flex" py={2} pl={4} overflow="auto">
        <Tag colorScheme="orange" mx={2} flexShrink="0">
          <TagLeftIcon as={SiRust} />
          Rust
        </Tag>
        <Tag colorScheme="cyan" mx={2} flexShrink="0">
          <TagLeftIcon as={SiGo} />
          Go
        </Tag>
        <Tag colorScheme="blue" mx={2} flexShrink="0">
          <TagLeftIcon as={SiC} />C
        </Tag>
        <Tag colorScheme="purple" mx={2} flexShrink="0">
          <TagLeftIcon as={SiCplusplus} />
          C++
        </Tag>
        <Tag colorScheme="orange" mx={2} flexShrink="0">
          RISC-V Assembly
        </Tag>
      </Box>
      <Heading as="h5" fontSize={18} mt={4} mb={2} fontWeight="300">
        Be used to
      </Heading>
      <Box display="flex" py={2} pl={4} overflow="auto">
        <Tag colorScheme="red" mx={2} flexShrink="0">
          <TagLeftIcon as={SiRuby} />
          Ruby
        </Tag>
        <Tag colorScheme="teal" mx={2} flexShrink="0">
          <TagLeftIcon as={SiCsharp} />
          C#
        </Tag>
        <Tag colorScheme="orange" mx={2} flexShrink="0">
          <TagLeftIcon as={FaJava} />
          Java
        </Tag>
        <Tag colorScheme="brown" mx={2} flexShrink="0">
          <TagLeftIcon as={SiPython} />
          Python
        </Tag>
      </Box>

      <Heading as="h5" fontSize={18} mt={4} mb={2} fontWeight="300">
        Simply can write
      </Heading>
      <Box display="flex" py={2} pl={4} overflow="auto">
        <Tag colorScheme="navy" mx={2} flexShrink="0">
          <TagLeftIcon as={SiTypescript} />
          Typescript
        </Tag>
        <Tag colorScheme="yellow" mx={2} flexShrink="0">
          <TagLeftIcon as={SiJavascript} />
          Javascript
        </Tag>
        <Tag colorScheme="green" mx={2} flexShrink="0">
          <TagLeftIcon as={SiVim} />
          Vim script
        </Tag>
        <Tag colorScheme="purple" mx={2} flexShrink="0">
          <TagLeftIcon as={SiLua} />
          Lua
        </Tag>
        <Tag colorScheme="cyan" mx={2} flexShrink="0">
          <TagLeftIcon as={SiHaskell} />
          Haskell
        </Tag>
        <Tag colorScheme="gray" mx={2} flexShrink="0">
          <TagLeftIcon as={SiOcaml} />
          Ocaml
        </Tag>
      </Box>

      <Heading as="h5" fontSize={18} mt={4} mb={2} fontWeight="300">
        Framework
      </Heading>
      <Box display="flex" py={2} pl={4} overflow="auto">
        <Tag colorScheme="purple" mx={2} flexShrink="0">
          <TagLeftIcon as={SiDotnet} />
          .NET
        </Tag>
      </Box>

      <Heading
        as="h4"
        fontSize={20}
        mb={4}
        variant="section-title"
        fontWeight="300"
      >
        Virtualization
      </Heading>
      <Box display="flex" py={2} pl={4} overflow="auto">
        <Tag colorScheme="blue" mx={2} flexShrink="0">
          <TagLeftIcon as={SiKubernetes} />
          Kubernetes
        </Tag>
        <Tag colorScheme="cyan" mx={2} flexShrink="0">
          <TagLeftIcon as={SiDocker} />
          Docker
        </Tag>
        <Tag colorScheme="green" mx={2} flexShrink="0">
          <TagLeftIcon as={SiVmware} />
          VMware
        </Tag>
        <Tag colorScheme="orange" mx={2} flexShrink="0">
          <TagLeftIcon as={SiQemu} />
          QEMU KVM
        </Tag>
      </Box>

      <Heading
        as="h4"
        fontSize={20}
        mb={6}
        variant="section-title"
        fontWeight="300"
      >
        Cloud
      </Heading>
      <Box display="flex" py={2} pl={4} overflow="auto">
        <Tag colorScheme="orange" mx={2} flexShrink="0">
          <TagLeftIcon as={SiAmazonwebservices} />
          AWS
        </Tag>
        <Tag colorScheme="cyan" mx={2} flexShrink="0">
          <TagLeftIcon as={SiGooglecloud} />
          GCP
        </Tag>
        <Tag colorScheme="blue" mx={2} flexShrink="0">
          <TagLeftIcon as={SiMicrosoftazure} />
          Azure
        </Tag>
      </Box>

      <Heading
        as="h4"
        fontSize={20}
        mb={6}
        variant="section-title"
        fontWeight="300"
      >
        Operating System
      </Heading>
      <Box display="flex" py={2} pl={4} overflow="auto">
        <Tag colorScheme="blue" mx={2} flexShrink="0">
          <TagLeftIcon as={SiNixos} />
          NixOS
        </Tag>
        <Tag colorScheme="cyan" mx={2} flexShrink="0">
          <TagLeftIcon as={SiArchlinux} />
          ArchLinux
        </Tag>
      </Box>

      <Heading
        as="h4"
        fontSize={20}
        mb={6}
        variant="section-title"
        fontWeight="300"
      >
        Editor
      </Heading>
      <Box display="flex" py={2} pl={4} mb={6} overflow="auto">
        <Tag colorScheme="green" mx={2} flexShrink="0">
          <TagLeftIcon as={SiNeovim} />
          Neovim
        </Tag>
        <Tag colorScheme="green" mx={2} flexShrink="0">
          <TagLeftIcon as={SiVim} />
          Vim
        </Tag>
        <Tag colorScheme="blue" mx={2} flexShrink="0">
          <TagLeftIcon as={SiVisualstudiocode} />
          VSCode
        </Tag>
      </Box>

      <Divider />

      <Heading as="h3" fontSize={25} mt={6} mb={2} fontWeight="300">
        Qualifications
      </Heading>
      <Box display="flex" py={2} pl={2} justifyContent="left" flexFlow="column">
        <ItemizeSection>
          <ItemizeName>2022.10</ItemizeName>
          IPA 情報処理安全確保支援士 (Not Registered)
        </ItemizeSection>
        <ItemizeSection>
          <ItemizeName>2020.10</ItemizeName>
          IPA 応用情報技術者試験
        </ItemizeSection>
      </Box>
    </Container>
  )
}
