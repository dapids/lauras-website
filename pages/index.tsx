import { StyleSheetManager, ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { BackToTop } from 'components/BackToTop'
import { Container } from 'components/Container'
import { Footer } from 'components/Footer'
import { darkTheme, lightTheme, GlobalStyle } from 'components/GlobalStyle'
import { AboutMe } from 'components/Sections/AboutMe'
import { SwitchTheme } from 'components/SwitchTheme'
import React, { useState } from 'react'
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
  const [themeIsDark, setThemeIsDark] = useState(false)

  return (
    <React.StrictMode>
      <Head>
        <title>Laura - Web Developer & Designer | Portfolio</title>
        <meta name="description" content="Explore my web development and design portfolio. Specializing in modern web technologies and user-centered design." />
        <meta name="keywords" content="web developer, designer, portfolio, web design, react, nextjs" />
      </Head>
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <ThemeProvider theme={themeIsDark ? darkTheme : lightTheme}>
          <GlobalStyle />

          <Container>
            <Header />

            <AboutMe />

            <Footer />
          </Container>

          <BackToTop />

          <SwitchTheme onTap={() => setThemeIsDark(!themeIsDark)}/>
        </ThemeProvider>
      </StyleSheetManager>
    </React.StrictMode>
  )
}
