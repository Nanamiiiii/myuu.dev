import { Container, Heading, Center, List, ListItem, Divider } from '@chakra-ui/react'
import { NextPage } from 'next'
import { Title, DevPort } from '../../components/device'
import Layout from '../../components/layouts/article'
import { Meta } from '../../components/device'

const Display: NextPage = () => {
    return (
        <Layout title='Display'>
            <Container>
                <Title>
                    Displays
                </Title>

                <Heading as="h4" fontSize={18} my={6}>
                    <Center>DELL U2720QM</Center>
                </Heading>

                <DevPort src="/images/devices/display.png" alt="dell4k" />

                <List my={6} ml={4}>
                    <ListItem display="flex" mb={1} alignItems="center">
                        <Meta>RESOLUTION</Meta>
                        <span>3840x2160</span>
                    </ListItem>
                    <ListItem display="flex" mb={1} alignItems="center">
                        <Meta>TYPE</Meta>
                        <span>IPS / Non-Glare</span>
                    </ListItem>
                    <ListItem display="flex" mb={1} alignItems="center">
                        <Meta>REFRESH RATE</Meta>
                        <span>60Hz</span>
                    </ListItem>
                    <ListItem display="flex" mb={1} alignItems="center">
                        <Meta>RESPONSE</Meta>
                        <span>8ms</span>
                    </ListItem>
                    <ListItem display="flex" mb={1} alignItems="center">
                        <Meta>COLOR</Meta>
                        <span>DCI-P3 95% / sRGB 99% / DisplayHDR</span>
                    </ListItem>
                </List>

                <Divider />

                <Heading as="h4" fontSize={18} my={6}>
                    <Center>HP OMEN 27i QHD</Center>
                </Heading>

                <DevPort src="/images/no_img.png" alt="omen" />

                <List my={6} ml={4}>
                    <ListItem display="flex" mb={1} alignItems="center">
                        <Meta>RESOLUTION</Meta>
                        <span>2560x1440</span>
                    </ListItem>
                    <ListItem display="flex" mb={1} alignItems="center">
                        <Meta>TYPE</Meta>
                        <span>Nano IPS / Non-Glare</span>
                    </ListItem>
                    <ListItem display="flex" mb={1} alignItems="center">
                        <Meta>REFRESH RATE</Meta>
                        <span>165Hz</span>
                    </ListItem>
                    <ListItem display="flex" mb={1} alignItems="center">
                        <Meta>RESPONSE</Meta>
                        <span>1ms</span>
                    </ListItem>
                    <ListItem display="flex" mb={1} alignItems="center">
                        <Meta>COLOR</Meta>
                        <span>DCI-P3 98%</span>
                    </ListItem>
                    <ListItem display="flex" mb={1} alignItems="center">
                        <Meta>OTHER</Meta>
                        <span>NVIDIA G-SYNC</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Display