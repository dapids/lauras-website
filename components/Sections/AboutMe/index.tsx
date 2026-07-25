import { Flex } from 'components/Flex'
import { Link } from 'components/Link'
import { SocialIcons } from 'components/SocialIcons'
import { Body } from 'components/Typography/Body'
import { Mark } from 'components/Typography/Mark'
import { useViewportSize } from 'hooks/useViewportSize'
import styled from 'styled-components'

const PictureWrapper = styled(Flex).attrs({
  shrink: '0',
})`
  margin: 0 32px 32px 0;
`

const PictureAndIcons = styled.div`
  align-items: center;
  display: none;
  flex-shrink: 0;
  margin: 0 0 32px;
  width: 100%;

  @media (max-width: 800px) {
    display: flex;
  }
`

const IconsArea = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`

const DesktopPictureWrapper = styled(PictureWrapper)`
  @media (max-width: 800px) {
    display: none;
  }
`

const Picture = styled.div`
  background-image: url('/my-picture.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  border: 3px solid var(--cream-deep);
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(34, 28, 26, 0.05);
  display: block;
  height: 300px;
  width: 220px;
`

const Paragraph = styled(Body).attrs({
  weight: '400',
})`
  font-size: clamp(1.7rem, 2vw, 2.2rem);
  line-height: 1.4;
  margin-bottom: 12px;
`

const yearsOfExperience = new Date().getFullYear() - 2006

export const AboutMe = () => {
  const viewportSize = useViewportSize()
  const direction = viewportSize === 'small' ? 'column' : 'row'

  return (
    <Flex direction={direction}>
      {/* Desktop: picture with right margin */}
      <DesktopPictureWrapper>
        <Picture />
      </DesktopPictureWrapper>

      {/* Mobile: picture + vertical icons side by side */}
      <PictureAndIcons>
        <Picture />
        <IconsArea>
          <SocialIcons direction="column" gap="16px" iconSize="42px" />
        </IconsArea>
      </PictureAndIcons>

      <Flex shrink="1">
        <Paragraph>Ciao, sono Laura. 👋🏼</Paragraph>
        <Paragraph>
          Sono una Consulente Strategica e Business Developer con{' '}{yearsOfExperience} anni di esperienza nel <Mark>far crescere il business</Mark>, <Mark>costruire partnership strategiche</Mark> e <Mark>guidare lo sviluppo commerciale</Mark> nei mercati internazionali.
        </Paragraph>
        <Paragraph>
          Oggi metto questa esperienza al servizio di <Link href="/lumina-consulting"><Mark>Lumina Consulting</Mark></Link>, dove affianco imprenditori, PMI e freelance per trasformare le loro ambizioni in business di successo.
        </Paragraph>
      </Flex>
    </Flex>
  )
}
