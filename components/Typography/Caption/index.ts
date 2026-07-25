import styled from 'styled-components'

type Props = {
  weight?: '300' | '400' | '500'
}

export const Caption = styled.div<Props>`
  color: var(--muted);
  font-family: 'EB Garamond', serif;
  font-size: 1.5rem;
  font-weight: ${({ weight }) => (weight ? weight : '400')};
`
