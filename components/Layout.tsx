import React from 'react'
import Head from 'next/head'
import { styled } from '@stitches/react'

const Layout: React.FC<{ title: string }> = ({ children, title = 'This is the default title' }) => (
  <Wrapper>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </Wrapper>
)

const Wrapper = styled("div", { display: "flex", margin: "0 auto" })

export default Layout
