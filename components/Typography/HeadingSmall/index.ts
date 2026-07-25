import styled from 'styled-components'

type Props = {
  fontStyle?: 'italic'
  weight?: '300' | '400' | '500'
}

export const HeadingSmall = styled.div<Props>`
  color: var(--wine);
  font-size: 1.7rem;
  font-style: ${({ fontStyle }) => (fontStyle ? fontStyle : 'normal')};
  font-weight: ${({ weight }) => (weight ? weight : '400')};
  letter-spacing: 1.6px;
  line-height: 1.4;
  margin: 0.2rem 0 0.75rem;
  text-transform: uppercase;
`
