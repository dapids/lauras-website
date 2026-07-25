import { Link } from 'components/Link'
import styled from 'styled-components'

const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  text-align: center;
  width: 100%;
`

const Intro = styled.p`
  color: var(--muted);
  font-family: 'EB Garamond', serif;
  font-size: 1.6rem;
  margin: 0 0 20px;
`

const CardLink = styled(Link)`
  align-items: center;
  background: #ffffff;
  border: 1px solid var(--cream-deep);
  border-radius: 14px;
  box-shadow: 0 2px 10px rgba(34, 28, 26, 0.05);
  display: flex;
  gap: 16px;
  max-width: 460px;
  padding: 18px 24px;
  text-align: left;
  transition: box-shadow 0.18s ease, border-color 0.18s ease, transform 0.18s ease;
  width: 100%;

  &:hover {
    border-color: var(--rose);
    box-shadow: 0 6px 18px rgba(34, 28, 26, 0.09);
    text-decoration: none;
    transform: translateY(-1px);
  }
`

const IconCircle = styled.div`
  align-items: center;
  background: var(--blush);
  border-radius: 50%;
  display: flex;
  flex: none;
  font-size: 22px;
  height: 48px;
  justify-content: center;
  width: 48px;
`

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`

const Title = styled.span`
  color: var(--ink);
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 500;
`

const Subtitle = styled.span`
  color: var(--muted);
  font-family: 'EB Garamond', serif;
  font-size: 1.5rem;
`

export const CallToAction = () => (
  <Section>
    <Intro>Vuoi far crescere il tuo business?</Intro>
    <CardLink href="/lumina-consulting">
      <IconCircle>🥂</IconCircle>
      <TextWrap>
        <Title>Lavoriamo insieme</Title>
        <Subtitle>Scopri come posso aiutarti con Lumina Consulting</Subtitle>
      </TextWrap>
    </CardLink>
  </Section>
)
