import Document, { Head, Html, Main, NextScript } from 'next/document'
import { JSX } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="it">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Laura - Web Developer & Designer" />
          <meta name="keywords" content="web developer, designer, portfolio" />
          <meta name="author" content="Laura" />

          <meta property="og:title" content="Laura - Web Developer & Designer" />
          <meta property="og:description" content="Portfolio of Laura, a web developer and designer" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://lauratota.com" />
          <meta property="og:image" content="https://lauratota.com/og-image.png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Laura - Web Developer & Designer" />
          <meta name="twitter:description" content="Portfolio of Laura, a web developer and designer" />
          <meta name="twitter:image" content="https://lauratota.com/og-image.png" />

          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://lauratota.com" />

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
