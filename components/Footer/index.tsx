import { Link } from 'components/Link'
import { Caption } from 'components/Typography/Caption'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-top: 1px solid #e5e7eb;
  margin-top: 32px;
  padding: 24px 42px 0;
  text-align: center;
`

export const Footer = () => (
  <Wrapper>
    <Caption as="span" weight="400">
      © {new Date().getFullYear()} Laura Tota. All rights reserved. Developed by
      {' '}
      <Link href='//davidsorrentino.com' target='_blank' rel='noopener noreferrer'>David Sorrentino</Link>
      .
    </Caption>
  </Wrapper>
)
