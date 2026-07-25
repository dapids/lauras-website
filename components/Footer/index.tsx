import { Link } from 'components/Link'
import { Caption } from 'components/Typography/Caption'
import styled from 'styled-components'

const Wrapper = styled.div`
  align-items: center;
  border-top: 1px solid var(--cream-deep);
  display: flex;
  justify-content: center;
  margin-top: 32px;
  min-height: 72px;
  padding: 0 42px;
  text-align: center;
`

export const Footer = () => (
  <Wrapper>
    <Caption as="span" weight="400">
      © {new Date().getFullYear()} Laura Tota. Tutti i diritti riservati.{' '}
      <span style={{ whiteSpace: 'nowrap' }}>
        Sviluppato da{' '}
        <Link href='//davidsorrentino.com' target='_blank' rel='noopener noreferrer'>David Sorrentino</Link>
        .
      </span>
    </Caption>
  </Wrapper>
)
