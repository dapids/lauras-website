import { StyleSheetManager, ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { Container } from 'components/Container'
import { Footer } from 'components/Footer'
import { lightTheme, GlobalStyle } from 'components/GlobalStyle'
import { AboutMe } from 'components/Sections/AboutMe'
import { Experience } from 'components/Sections/Experience'
import React from 'react'
import { Header } from 'components/Header'

export async function getStaticProps() {
  return {
    props: {},
  }
}

const shouldForwardProp = (prop: string) => ![
  'active',
  'align',
  'first',
  'last',
  'scrolled',
  'small',
].includes(prop)

export default function Home() {
  return (
    <React.StrictMode>
      <Head>
        <title>Laura Tota | Strategy Advisor & Business Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Laura Tota is a Strategy Advisor and Business Developer with 20+ years of experience driving growth, building strategic partnerships, and leading business development across international markets." />
        <meta name="keywords" content="Laura Tota, strategy advisor, business developer, business development, sales director, territory manager, international markets, strategic partnerships" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://lauratota.com" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lauratota.com" />
        <meta property="og:title" content="Laura Tota | Strategy Advisor & Business Developer" />
        <meta property="og:description" content="Laura Tota is a Strategy Advisor and Business Developer with 20+ years of experience driving growth, building strategic partnerships, and leading business development across international markets." />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@LauraTota8" />
        <meta name="twitter:creator" content="@LauraTota8" />
        <meta name="twitter:title" content="Laura Tota | Strategy Advisor & Business Developer" />
        <meta name="twitter:description" content="Laura Tota is a Strategy Advisor and Business Developer with 20+ years of experience driving growth, building strategic partnerships, and leading business development across international markets." />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Laura Tota',
            jobTitle: 'Strategy Advisor & Business Developer',
            url: 'https://lauratota.com',
            sameAs: [
              'https://linkedin.com/in/lauratota123',
              'https://instagram.com/_elle_ti________',
              'https://twitter.com/LauraTota8',
              'https://threads.net/@_elle_ti________',
            ],
            knowsAbout: [
              'Business Development',
              'Sales Strategy',
              'Strategic Partnerships',
              'Territory Management',
            ],
          })}}
        />
      </Head>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />

          <Container>
            <Header />

            <AboutMe />

            <Experience />

            <Footer />
          </Container>
        </ThemeProvider>
      </StyleSheetManager>
    </React.StrictMode>
  )
}
