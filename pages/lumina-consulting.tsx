import Head from 'next/head'
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

export async function getStaticProps() {
  return {
    props: {},
  }
}

const LuminaGlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light;
    --cream: #FFFFFF;
    --cream-deep: #F0EEE9;
    --ink: #221C1A;
    --wine: #6B2737;
    --rose: #C98BA0;
    --blush: #EFDCE0;
    --gold-line: #B99B6B;
  }

  * { box-sizing: border-box; }

  html {
    background: var(--cream);
    font-size: 16px;
  }

  html, body {
    margin: 0;
    padding: 0;
    background-color: var(--cream);
    color: var(--ink);
    font-family: 'EB Garamond', serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    min-height: 100vh;
    min-height: 100dvh;
    display: flex;
    justify-content: center;
    padding: 0 20px;
  }

  body::before {
    content: "";
    position: fixed;
    inset: 0;
    background-image:
      radial-gradient(circle at 15% 20%, rgba(107,39,55,0.045) 0%, transparent 45%),
      radial-gradient(circle at 85% 80%, rgba(201,139,160,0.08) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
` as any

const Page = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 56px 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (prefers-reduced-motion: no-preference) {
    & > * {
      opacity: 0;
      animation: rise 0.6s ease forwards;
    }
  }

  @keyframes rise {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }
`

const AvatarRing = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 1.5px solid var(--gold-line);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  position: relative;
  z-index: 1;

  span {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 34px;
    color: var(--wine);
  }

  @media (prefers-reduced-motion: no-preference) {
    animation-delay: 0.05s;
  }
`

const Name = styled.h1`
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  font-size: 32px;
  letter-spacing: 0.3px;
  margin: 0 0 6px;
  text-align: center;
  z-index: 1;

  @media (prefers-reduced-motion: no-preference) {
    animation-delay: 0.15s;
  }
`

const Role = styled.p`
  font-size: 17px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: var(--wine);
  margin: 0 0 20px;
  z-index: 1;
  text-align: center;

  @media (prefers-reduced-motion: no-preference) {
    animation-delay: 0.22s;
  }
`

const Brush = styled.svg`
  width: 130px;
  height: 18px;
  margin-bottom: 22px;
  z-index: 1;

  @media (prefers-reduced-motion: no-preference) {
    animation: none;
    opacity: 1;

    path {
      stroke-dasharray: 340;
      stroke-dashoffset: 340;
      animation: draw 1.1s ease forwards 0.15s;
    }
  }

  @keyframes draw {
    to { stroke-dashoffset: 0; }
  }
`

const Tagline = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 1.55;
  max-width: 320px;
  margin: 0 0 8px;
  color: #443934;
  z-index: 1;

  @media (prefers-reduced-motion: no-preference) {
    animation-delay: 0.3s;
  }
`

const CommunityTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
  color: var(--wine);
  background: var(--blush);
  padding: 6px 14px;
  border-radius: 20px;
  margin: 14px 0 34px;
  z-index: 1;

  @media (prefers-reduced-motion: no-preference) {
    animation-delay: 0.38s;
  }
`

const Links = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  z-index: 1;

  @media (prefers-reduced-motion: no-preference) {
    animation-delay: 0.46s;
  }
`

const LinkBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 17px 20px;
  background: #fff;
  border: 1px solid var(--cream-deep);
  border-radius: 14px;
  text-decoration: none;
  color: var(--ink);
  box-shadow: 0 2px 10px rgba(34,28,26,0.05);
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;

  &:active {
    transform: scale(0.985);
  }

  &:hover {
    box-shadow: 0 6px 18px rgba(34,28,26,0.09);
    border-color: var(--rose);
  }
`

const LinkIcon = styled.div<{ $variant: 'event' | 'consult' }>`
  width: 42px;
  height: 42px;
  flex: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19px;
  background: ${({ $variant }) => ($variant === 'event' ? 'var(--blush)' : '#EFE9DC')};
`

const LinkText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const LinkTitle = styled.span`
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  font-size: 19px;
`

const LinkSub = styled.span`
  font-size: 15px;
  color: #7A6D66;
`

const FooterMark = styled.div`
  margin-top: 46px;
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  font-size: 28px;
  color: var(--wine);
  z-index: 1;

  small {
    display: block;
    font-family: 'EB Garamond', serif;
    font-weight: 400;
    font-size: 13px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #9C8E86;
    margin-top: 6px;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation-delay: 0.6s;
  }
`

export default function LuminaConsulting() {
  return (
    <React.StrictMode>
      <Head>
        <title>Laura Tota — Lumina Consulting | Consulenza Strategica per il tuo Business</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="description" content="Lumina Consulting di Laura Tota: consulenza strategica e sviluppo business per imprenditori, PMI e freelance. Trasforma le tue ambizioni in un business di successo." />
        <meta name="keywords" content="Lumina Consulting, Laura Tota, consulenza strategica, sviluppo business, business developer, consulente per PMI, consulente per imprenditori, strategia di vendita, partnership strategiche" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://lauratota.com/lumina-consulting" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lauratota.com/lumina-consulting" />
        <meta property="og:site_name" content="Lumina Consulting" />
        <meta property="og:title" content="Laura Tota — Lumina Consulting | Consulenza Strategica per il tuo Business" />
        <meta property="og:description" content="Lumina Consulting di Laura Tota: consulenza strategica e sviluppo business per imprenditori, PMI e freelance. Trasforma le tue ambizioni in un business di successo." />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:image" content="https://lauratota.com/my-picture.jpg" />
        <meta property="og:image:alt" content="Laura Tota, fondatrice di Lumina Consulting" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@LauraTota8" />
        <meta name="twitter:creator" content="@LauraTota8" />
        <meta name="twitter:title" content="Laura Tota — Lumina Consulting | Consulenza Strategica per il tuo Business" />
        <meta name="twitter:description" content="Lumina Consulting di Laura Tota: consulenza strategica e sviluppo business per imprenditori, PMI e freelance. Trasforma le tue ambizioni in un business di successo." />
        <meta name="twitter:image" content="https://lauratota.com/my-picture.jpg" />
        <meta name="twitter:image:alt" content="Laura Tota, fondatrice di Lumina Consulting" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Lumina Consulting',
            description:
              'Consulenza strategica e sviluppo business per imprenditori, PMI e freelance.',
            url: 'https://lauratota.com/lumina-consulting',
            image: 'https://lauratota.com/my-picture.jpg',
            areaServed: 'IT',
            founder: {
              '@type': 'Person',
              name: 'Laura Tota',
              jobTitle: 'Consulente Strategica & Business Developer',
              url: 'https://lauratota.com',
            },
            knowsAbout: [
              'Sviluppo Business',
              'Strategia di Vendita',
              'Partnership Strategiche',
              'Consulenza per PMI',
            ],
          })}}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Dancing+Script:wght@600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <LuminaGlobalStyle />

      <Page>
        <AvatarRing>
          <span>LT</span>
        </AvatarRing>

        <Name>Laura Tota</Name>
        <Role>Lumina Consulting</Role>

        <Brush viewBox="0 0 130 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 12C20 4 38 16 56 8C74 1 92 15 110 6C116 3.5 122 5 127 8"
            stroke="#B99B6B"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </Brush>

        <Tagline>
          Al fianco di imprenditrici e freelance
          <br />
          verso i loro obiettivi di business
        </Tagline>

        <CommunityTag>🥂 Le Donne che Fanno — la nostra community</CommunityTag>

        <Links>
          <LinkBtn
            href="https://wa.me/393405294595?text=Ciao%20Laura%2C%20vorrei%20iscrivermi%20a%20Le%20Donne%20che%20Fanno"
            target="_blank"
            rel="noopener"
          >
            <LinkIcon $variant="event">🥂</LinkIcon>
            <LinkText>
              <LinkTitle>Iscriviti a &quot;Le Donne che Fanno&quot;</LinkTitle>
              <LinkSub>Scrivimi su WhatsApp per il tuo posto</LinkSub>
            </LinkText>
          </LinkBtn>

          <LinkBtn href="https://ig.me/m/lumina.cons" target="_blank" rel="noopener">
            <LinkIcon $variant="consult">📩</LinkIcon>
            <LinkText>
              <LinkTitle>Contattami per una consulenza</LinkTitle>
              <LinkSub>Scrivimi in DM su Instagram</LinkSub>
            </LinkText>
          </LinkBtn>
        </Links>

        <FooterMark>
          make it happen
          <small>Lumina Consulting</small>
        </FooterMark>
      </Page>
    </React.StrictMode>
  )
}
