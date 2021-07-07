import React from 'react';
import Head from 'next/head';

type SEOProps = {

    description:    string,
    author:         string,
    title:          string,
    theme:          string,
    image:          any,

}

export default function SEO({
  description = 'We build, design and innovate. Our main priority is to give high-quality products for free with ease!',
  author = 'serumstudio',
  image = "preview.png",
  title = 'Serum Studio',
  theme = "#000"
}: SEOProps) {
  const metaData = [
    {
        name: `description`,
        content: description,
    },
    {
        name: `theme-color`,
        content: theme,
    },
    {
        property: `og:title`,
        content: title,
    },
    {
        property: `og:description`,
        content: description,
    },
    {
        property: `og:type`,
        content: `website`,
    },
    {
        name: `twitter:card`,
        content: `summary_large_image`,
    },
    {
        name: `twitter:creator`,
        content: author,
    },
    {
        name: `twitter:image`,
        content: image,
    },
    {
        name: `twitter:title`,
        content: title,
    },
    {
        name: `twitter:description`,
        content: description,
    },
  ]
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}
