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
        <meta name="description" content="Laura Tota is a Strategy Advisor and Business Developer with extensive experience in sales, business development, and strategic growth." />
        <meta name="keywords" content="strategy advisor, business developer, business development, sales, strategic growth, consultant" />
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
