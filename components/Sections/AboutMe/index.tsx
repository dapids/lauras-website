import { Flex } from 'components/Flex'
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
  border: 3px solid #e5e7eb;
  border-radius: 10px;
  display: block;
  height: 300px;
  width: 220px;
`

const Paragraph = styled(Body).attrs({
  weight: '400',
})`
  font-size: clamp(2rem, 2.5vw, 2.8rem);
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
        <Paragraph>Hi, I&apos;m Laura. 👋🏼</Paragraph>
        <Paragraph>
          I&apos;m a Strategy Advisor and Business Developer with{' '}{yearsOfExperience} years of experience <Mark>driving growth</Mark>, <Mark>building strategic partnerships</Mark>, and <Mark>leading business development initiatives</Mark> across international markets.
        </Paragraph>
      </Flex>
    </Flex>
  )
}
