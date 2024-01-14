import { StyleSheetManager, ThemeProvider } from 'styled-components'
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
