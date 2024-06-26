import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import type { Metadata, NextPage, ResolvingMetadata } from 'next'
import { DeviceContent } from '../../components/device-content'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

import deviceDisplay from '../../public/images/devices/display.png'
import deviceKey from '../../public/images/devices/keyboard.png'
import desktopEnv from '../../public/images/devices/mac_desktop_202404.webp'
import deviceMob from '../../public/images/devices/mobile.png'
import devicePc from '../../public/images/devices/pc.png'

export const generateMetadata = async (
  props: any,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  return {
    title: 'My Environments',
    description: 'Introduction of environments & setup',
    openGraph: {
      ...(await parent).openGraph,
      url: 'https://myuu.dev/env',
    },
  }
}

const Devices: NextPage = () => {
  return (
    <Layout>
      <Container maxWidth="100%" fontSize="18px">
        <Heading as="h3" fontSize={25} mt={2} mb={4} fontWeight="300">
          My Environments
        </Heading>
        <SimpleGrid columns={[1, 1, 1]} gap={6} mb={6}>
          <Section delay="0.1">
            <DeviceContent
              href="/env/dotfiles"
              title="dotfiles"
              thumbnail={desktopEnv}
            >
              dotfiles
            </DeviceContent>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 1]} gap={6} mb={6}>
          <Section delay="0.1">
            <DeviceContent href="/env/pc" title="PC" thumbnail={devicePc}>
              Computer
            </DeviceContent>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 1]} gap={6} mb={6}>
          <Section delay="0.1">
            <DeviceContent
              href="/env/display"
              title="Display"
              thumbnail={deviceDisplay}
            >
              Display
            </DeviceContent>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 1]} gap={6} mb={6}>
          <Section delay="0.1">
            <DeviceContent
              href="/env/keyboard-mouse"
              title="Keyboard&Mouse"
              thumbnail={deviceKey}
            >
              Keyboard & Mouse
            </DeviceContent>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 1]} gap={6} mb={6}>
          <Section delay="0.1">
            <DeviceContent
              href="/env/mobile"
              title="Mobile&Others"
              thumbnail={deviceMob}
            >
              Mobile & Others
            </DeviceContent>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Devices
