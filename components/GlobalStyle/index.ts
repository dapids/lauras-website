import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  body: '#f8f7f5',
  text: '#1c1c1e',
}

export const darkTheme = {
  body: '#222',
  text: '#e6e6e6',
}

export type GlobalStyle = {
  theme: typeof lightTheme & typeof darkTheme
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    background-color: ${({ theme }: GlobalStyle) => theme.body};
    color: ${({ theme }: GlobalStyle) => theme.text};
    font-family: 'Inter', sans-serif;
    font-feature-settings: "kern", "liga", "pnum";
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: ${({ theme }: GlobalStyle) => theme.text};
  }
` as any
