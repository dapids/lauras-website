import styled from 'styled-components'

type Props = {
  fontStyle?: 'italic'
  weight?: '300' | '400' | '500'
}

export const Body = styled.div<Props>`
  color: var(--ink);
  font-family: 'EB Garamond', serif;
  font-size: 1.8rem;
  font-style: ${({ fontStyle }) => (fontStyle ? fontStyle : 'normal')};
  font-weight: ${({ weight }) => (weight ? weight : '400')};
  line-height: 1.5;
`
