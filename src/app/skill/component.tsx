'use client'
import { Box, Container, Separator, Heading, Tag } from '@chakra-ui/react'
import { FaJava } from 'react-icons/fa'
import {
  SiNeovim,
  SiArchlinux,
  SiRuby,
  SiRust,
  SiC,
  SiCplusplus,
  SiGo,
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
  SiVmware,
  SiGooglecloud,
  SiLua,
  SiNixos,
} from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'
import { VscVscode, VscAzure } from 'react-icons/vsc'
import { CustomHeading } from '../../components/heading'
import { ItemizeName, ItemizeSection } from '../../components/itemize'

export const Component = () => {
  return (
    <Container maxWidth="100%" fontSize="18px">
      <Heading as="h3" fontSize={25} mt={2} mb={4} fontWeight="300">
        Development Skills
      </Heading>

      <CustomHeading
        as="h4"
        fontSize={20}
        mb={4}
        variant="section-title"
        fontWeight="300"
      >
        Programming
      </CustomHeading>
      <Heading as="h5" fontSize={18} mb={2} fontWeight="300">
        Awesome
      </Heading>
      <Box display="flex" py={2} pl={4} overflow="auto">
        <Tag.Root colorPalette="orange" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiRust />
          </Tag.StartElement>
          <Tag.Label>Rust</Tag.Label>
        </Tag.Root>
        <Tag.Root colorPalette="cyan" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiGo />
          </Tag.StartElement>
          <Tag.Label>Go</Tag.Label>
        </Tag.Root>
        <Tag.Root colorPalette="blue" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiC />
          </Tag.StartElement>
          <Tag.Label>C</Tag.Label>
        </Tag.Root>
        <Tag.Root colorPalette="purple" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiCplusplus />
          </Tag.StartElement>
          <Tag.Label>C++</Tag.Label>
        </Tag.Root>
        <Tag.Root colorPalette="orange" mx={2} flexShrink="0">
          <Tag.Label>RISC-V Assembly</Tag.Label>
        </Tag.Root>
      </Box>
      <Heading as="h5" fontSize={18} mt={4} mb={2} fontWeight="300">
        Be used to
      </Heading>
      <Box display="flex" py={2} pl={4} overflow="auto">
        <Tag.Root colorPalette="red" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiRuby />
          </Tag.StartElement>
          <Tag.Label>Ruby</Tag.Label>
        </Tag.Root>
        <Tag.Root colorPalette="teal" mx={2} flexShrink="0">
          <Tag.StartElement>
            <TbBrandCSharp />
          </Tag.StartElement>
          <Tag.Label>C#</Tag.Label>
        </Tag.Root>
        <Tag.Root colorPalette="orange" mx={2} flexShrink="0">
          <Tag.StartElement>
            <FaJava />
          </Tag.StartElement>
          <Tag.Label>Java</Tag.Label>
        </Tag.Root>
        <Tag.Root colorPalette="brown" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiPython />
          </Tag.StartElement>
          <Tag.Label>Python</Tag.Label>
        </Tag.Root>
      </Box>

      <Heading as="h5" fontSize={18} mt={4} mb={2} fontWeight="300">
        Simply can write
      </Heading>
      <Box display="flex" py={2} pl={4} overflow="auto">
        <Tag.Root colorPalette="navy" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiTypescript />
          </Tag.StartElement>
          <Tag.Label>Typescript</Tag.Label>
        </Tag.Root>
        <Tag.Root colorPalette="yellow" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiJavascript />
          </Tag.StartElement>
          <Tag.Label>Javascript</Tag.Label>
        </Tag.Root>
        <Tag.Root colorPalette="green" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiVim />
          </Tag.StartElement>
          <Tag.Label>Vim script</Tag.Label>
        </Tag.Root>
        <Tag.Root colorPalette="purple" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiLua />
          </Tag.StartElement>
          <Tag.Label>Lua</Tag.Label>
        </Tag.Root>
        <Tag.Root colorPalette="cyan" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiHaskell />
          </Tag.StartElement>
          <Tag.Label>Haskell</Tag.Label>
        </Tag.Root>
        <Tag.Root colorPalette="gray" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiOcaml />
          </Tag.StartElement>
          <Tag.Label>OCaml</Tag.Label>
        </Tag.Root>
      </Box>

      <Heading as="h5" fontSize={18} mt={4} mb={2} fontWeight="300">
        Framework
      </Heading>
      <Box display="flex" py={2} pl={4} overflow="auto">
        <Tag.Root colorPalette="purple" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiDotnet />
          </Tag.StartElement>
          <Tag.Label>.NET</Tag.Label>
        </Tag.Root>
      </Box>

      <CustomHeading
        as="h4"
        fontSize={20}
        mb={4}
        variant="section-title"
        fontWeight="300"
      >
        Virtualization
      </CustomHeading>
      <Box display="flex" py={2} pl={4} overflow="auto">
        <Tag.Root colorPalette="blue" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiKubernetes />
          </Tag.StartElement>
          <Tag.Label>Kubernetes</Tag.Label>
        </Tag.Root>
        <Tag.Root colorPalette="cyan" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiDocker />
          </Tag.StartElement>
          <Tag.Label>Docker</Tag.Label>
        </Tag.Root>
        <Tag.Root colorPalette="green" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiVmware />
          </Tag.StartElement>
          <Tag.Label>VMware</Tag.Label>
        </Tag.Root>
        <Tag.Root colorPalette="orange" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiQemu />
          </Tag.StartElement>
          <Tag.Label>QEMU KVM</Tag.Label>
        </Tag.Root>
      </Box>

      <CustomHeading
        as="h4"
        fontSize={20}
        mb={6}
        variant="section-title"
        fontWeight="300"
      >
        Cloud
      </CustomHeading>
      <Box display="flex" py={2} pl={4} overflow="auto">
        <Tag.Root colorPalette="orange" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiAmazonwebservices />
          </Tag.StartElement>
          <Tag.Label>AWS</Tag.Label>
        </Tag.Root>
        <Tag.Root colorPalette="cyan" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiGooglecloud />
          </Tag.StartElement>
          <Tag.Label>GCP</Tag.Label>
        </Tag.Root>
        <Tag.Root colorPalette="blue" mx={2} flexShrink="0">
          <Tag.StartElement>
            <VscAzure />
          </Tag.StartElement>
          <Tag.Label>Azure</Tag.Label>
        </Tag.Root>
      </Box>

      <CustomHeading
        as="h4"
        fontSize={20}
        mb={6}
        variant="section-title"
        fontWeight="300"
      >
        Operating System
      </CustomHeading>
      <Box display="flex" py={2} pl={4} overflow="auto">
        <Tag.Root colorPalette="blue" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiNixos />
          </Tag.StartElement>
          <Tag.Label>NixOS</Tag.Label>
        </Tag.Root>
        <Tag.Root colorPalette="cyan" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiArchlinux />
          </Tag.StartElement>
          <Tag.Label>ArchLinux</Tag.Label>
        </Tag.Root>
      </Box>

      <CustomHeading
        as="h4"
        fontSize={20}
        mb={6}
        variant="section-title"
        fontWeight="300"
      >
        Editor
      </CustomHeading>
      <Box display="flex" py={2} pl={4} mb={6} overflow="auto">
        <Tag.Root colorPalette="green" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiNeovim />
          </Tag.StartElement>
          <Tag.Label>Neovim</Tag.Label>
        </Tag.Root>
        <Tag.Root colorPalette="green" mx={2} flexShrink="0">
          <Tag.StartElement>
            <SiVim />
          </Tag.StartElement>
          <Tag.Label>Vim</Tag.Label>
        </Tag.Root>
        <Tag.Root colorPalette="blue" mx={2} flexShrink="0">
          <Tag.StartElement>
            <VscVscode />
          </Tag.StartElement>
          <Tag.Label>VSCode</Tag.Label>
        </Tag.Root>
      </Box>

      <Separator />

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
