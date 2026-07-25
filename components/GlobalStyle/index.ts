import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  body: '#FFFFFF',
  text: '#221C1A',
}

export const darkTheme = {
  body: '#221C1A',
  text: '#F0EEE9',
}

export type GlobalStyle = {
  theme: typeof lightTheme & typeof darkTheme
}

export const GlobalStyle = createGlobalStyle`
  :root {
    --cream: #FFFFFF;
    --cream-deep: #F0EEE9;
    --ink: #221C1A;
    --wine: #6B2737;
    --rose: #C98BA0;
    --blush: #EFDCE0;
    --gold-line: #B99B6B;
    --muted: #7A6D66;
  }

  * {
    box-sizing: border-box;
  }

  html {
    background: ${({ theme }: GlobalStyle) => theme.body};
    font-size: 10px;
  }

  body {
    background-color: ${({ theme }: GlobalStyle) => theme.body};
    color: ${({ theme }: GlobalStyle) => theme.text};
    font-family: 'EB Garamond', serif;
    font-feature-settings: "kern", "liga", "pnum";
    font-size: 1.6rem;
    line-height: 1.5;
    margin: 0;
    position: relative;
    -webkit-font-smoothing: antialiased;
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

  a {
    color: var(--wine);
  }
` as any
