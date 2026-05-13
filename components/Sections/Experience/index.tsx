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
  border: 1px solid #e5e7eb;
  border-left: 3px solid #1e40af;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 24px;
`

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`

const Company = styled(Body).attrs({ weight: '500' })`
  color: #0f172a;
  font-size: 2.2rem;
  letter-spacing: -0.01em;
`

const Role = styled(Caption).attrs({ weight: '400' })`
  color: #6b7280;
  font-size: 1.7rem;
`

const Description = styled(Body).attrs({ weight: '400' })`
  color: #4b5563;
  font-size: 1.45rem;
  line-height: 1.5;
  margin-top: 2px;
`

const experiences = [
  {
    company: 'MyPos',
    role: 'Territory Manager',
    summary: 'Led regional partner growth and improved local revenue consistency.',
  },
  {
    company: 'SweetGuest',
    role: 'Sales Director',
    summary: 'Scaled commercial pipeline and strengthened enterprise client retention.',
  },
  {
    company: 'Flixbus',
    role: 'Business Developer',
    summary: 'Opened strategic partnerships and supported expansion into new routes.',
  },
  {
    company: 'ProntoPro',
    role: 'Sales Director',
    summary: 'Built high-performing sales motions across multiple market segments.',
  },
  {
    company: 'Groupon',
    role: 'Territory Manager',
    summary: 'Managed city-level merchant portfolios and accelerated deal performance.',
  },
  {
    company: 'Conte.it',
    role: 'Sales Supervisor',
    summary: 'Coached teams to improve conversion quality and sales operations.',
  },
]

export const Experience = () => (
  <Section>
    <Heading as="h2">Experience</Heading>
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
