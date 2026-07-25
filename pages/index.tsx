import { StyleSheetManager, ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { Container } from 'components/Container'
import { Footer } from 'components/Footer'
import { lightTheme, GlobalStyle } from 'components/GlobalStyle'
import { AboutMe } from 'components/Sections/AboutMe'
import { CallToAction } from 'components/Sections/CallToAction'
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
        <title>Laura Tota | Consulente Strategica & Business Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Laura Tota è una Consulente Strategica e Business Developer con oltre 20 anni di esperienza nel far crescere il business, costruire partnership strategiche e guidare lo sviluppo commerciale nei mercati internazionali." />
        <meta name="keywords" content="Laura Tota, consulente strategica, business developer, sviluppo business, direttrice vendite, responsabile di zona, mercati internazionali, partnership strategiche" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://lauratota.com" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lauratota.com" />
        <meta property="og:site_name" content="Laura Tota" />
        <meta property="og:title" content="Laura Tota | Consulente Strategica & Business Developer" />
        <meta property="og:description" content="Laura Tota è una Consulente Strategica e Business Developer con oltre 20 anni di esperienza nel far crescere il business, costruire partnership strategiche e guidare lo sviluppo commerciale nei mercati internazionali." />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:image" content="https://lauratota.com/my-picture.jpg" />
        <meta property="og:image:alt" content="Laura Tota, Consulente Strategica e Business Developer" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@LauraTota8" />
        <meta name="twitter:creator" content="@LauraTota8" />
        <meta name="twitter:title" content="Laura Tota | Consulente Strategica & Business Developer" />
        <meta name="twitter:description" content="Laura Tota è una Consulente Strategica e Business Developer con oltre 20 anni di esperienza nel far crescere il business, costruire partnership strategiche e guidare lo sviluppo commerciale nei mercati internazionali." />
        <meta name="twitter:image" content="https://lauratota.com/my-picture.jpg" />
        <meta name="twitter:image:alt" content="Laura Tota, Consulente Strategica e Business Developer" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Laura Tota',
            jobTitle: 'Consulente Strategica & Business Developer',
            url: 'https://lauratota.com',
            sameAs: [
              'https://linkedin.com/in/lauratota123',
              'https://instagram.com/_elle_ti________',
              'https://twitter.com/LauraTota8',
              'https://threads.net/@_elle_ti________',
            ],
            knowsAbout: [
              'Sviluppo Business',
              'Strategia di Vendita',
              'Partnership Strategiche',
              'Gestione del Territorio',
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

            <CallToAction />

            <Experience />

            <Footer />
          </Container>
        </ThemeProvider>
      </StyleSheetManager>
    </React.StrictMode>
  )
}
