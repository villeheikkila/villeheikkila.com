import React from 'react'
import NextHead from 'next/head'

const Head: React.FC<{ title: string }> = ({ children, title = 'Ville Heikkilä' }) => (
  <>
    <NextHead>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </NextHead>
    {children}
  </>
)




export default Head
