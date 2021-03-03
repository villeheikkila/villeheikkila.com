import Layout from '../components/Layout'
import { styled } from '../stitches.config'

const IndexPage = () => (
  <Layout title="Ville Heikkilä">
    <Header><h1>Ville Heikkilä</h1></Header>
  </Layout>
)

const Header = styled("header", { display: "grid", justifyContent: "center" })

export default IndexPage
