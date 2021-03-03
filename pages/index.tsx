import Layout from '../components/Layout'
import { styled } from '../stitches.config'
import Image from 'next/image'

const IndexPage = () => (
  <Layout title="Ville Heikkilä">
    <Header><Typography as="h1">Ville Heikkilä</Typography><Avatar src="/avatar.jpeg" alt="avatar" width="300" height="300" /></Header>
  </Layout>
)

const Header = styled("header", { display: "grid", textAlign: "center", justifyContent: "center" })

const Typography = styled("p", {})

const Avatar = styled(Image, { borderRadius: "9999px" })

export default IndexPage

