import { Link } from 'components/Link'
import { Caption } from 'components/Typography/Caption'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-top: 2px dashed #e6e6e6;
  margin-top: 16px;
  padding: 16px 42px 0;
  text-align: center;
`

export const Footer = () => (
  <Wrapper>
    <Caption as="span" weight="400">
      This website was baked with ❤️ by
      {' '}
      <Link href='//davidsorrentino.com'>Dapids</Link>
      .
    </Caption>
  </Wrapper>
)
