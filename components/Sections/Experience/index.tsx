import { Body } from 'components/Typography/Body'
import { Heading } from 'components/Typography/Heading'
import { Caption } from 'components/Typography/Caption'
import styled from 'styled-components'

const Section = styled.section`
  margin-top: 40px;
  width: 100%;
`

const Grid = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  background: #ffffff;
  border: 1px solid var(--cream-deep);
  border-left: 3px solid var(--gold-line);
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(34, 28, 26, 0.05);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 24px;
  transition: box-shadow 0.18s ease, border-color 0.18s ease;

  &:hover {
    border-color: var(--rose);
    box-shadow: 0 6px 18px rgba(34, 28, 26, 0.09);
  }
`

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`

const Company = styled(Body).attrs({ weight: '500' })`
  color: var(--ink);
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  letter-spacing: 0.2px;
`

const Role = styled(Caption).attrs({ weight: '400' })`
  color: var(--wine);
  font-size: 1.6rem;
`

const Description = styled(Body).attrs({ weight: '400' })`
  color: #443934;
  font-size: 1.6rem;
  line-height: 1.5;
  margin-top: 2px;
`

const experiences = [
  {
    company: 'MyPos',
    role: 'Responsabile di Zona',
    summary: 'Ho guidato la crescita dei partner regionali e migliorato la costanza dei ricavi locali.',
  },
  {
    company: 'SweetGuest',
    role: 'Direttrice Vendite',
    summary: 'Ho ampliato la pipeline commerciale e rafforzato la fidelizzazione dei clienti enterprise.',
  },
  {
    company: 'Flixbus',
    role: 'Business Developer',
    summary: 'Ho avviato partnership strategiche e supportato l\u2019espansione verso nuove tratte.',
  },
  {
    company: 'ProntoPro',
    role: 'Direttrice Vendite',
    summary: 'Ho costruito processi di vendita ad alte prestazioni su pi\u00f9 segmenti di mercato.',
  },
  {
    company: 'Groupon',
    role: 'Responsabile di Zona',
    summary: 'Ho gestito portafogli di merchant a livello cittadino e accelerato la performance delle offerte.',
  },
  {
    company: 'Conte.it',
    role: 'Supervisore Vendite',
    summary: 'Ho formato i team per migliorare la qualit\u00e0 di conversione e le operazioni di vendita.',
  },
]

export const Experience = () => (
  <Section>
    <Heading as="h2">Esperienza</Heading>
    <Grid>
      {experiences.map(({ company, role, summary }) => (
        <Card key={company}>
          <CardHeader>
            <Company>{company}</Company>
            <Role>{role}</Role>
          </CardHeader>
          <Description>{summary}</Description>
        </Card>
      ))}
    </Grid>
  </Section>
)
