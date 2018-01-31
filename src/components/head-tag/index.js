import React from 'react'
import { Helmet } from 'react-helmet'

export default props => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{props.title}</title>
    <meta name="description" content={props.description} />
    {/* Google / Search Engine Tags */}
    <meta itemprop="name" content={props.title} />
    <meta itemprop="description" content={props.description} />
    <meta itemprop="image" content={props.image} />
    {/* Facebook Meta Tags */}
    <meta property="og:url" content="https://m-zubairahmed.com" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    <meta property="og:image" content={props.image} />
    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.description} />
    <meta name="twitter:image" content={props.image} />
  </Helmet>
)
