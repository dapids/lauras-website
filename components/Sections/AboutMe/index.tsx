import { Flex } from 'components/Flex'
import { Body } from 'components/Typography/Body'
import { Mark } from 'components/Typography/Mark'
import { useViewportSize } from 'hooks/useViewportSize'
import styled from 'styled-components'

const PictureWrapper = styled(Flex).attrs({
  shrink: '0',
})`
  margin: 0 auto 32px;
  padding: 0 40px;
`

const Picture = styled.div`
  background-image: url('/my-picture.jpg');
  background-position: center;
  background-repeat: repeat, no-repeat;
  background-size: cover;
  border: 4px solid #ccc;
  border-radius: 100px;
  display: block;
  height: 200px;
  width: 200px;
`

const Paragraph = styled(Body).attrs({
  weight: '400',
})`
  margin-bottom: 8px;
`

const yearsOfExperience = new Date().getFullYear() - 2006

export const AboutMe = () => {
  const viewportSize = useViewportSize()
  const direction = viewportSize === 'small' ? 'column' : 'row'

  return (
    <Flex align="center" direction={direction} grow="1" justify="center">
      <PictureWrapper>
        <Picture />
      </PictureWrapper>

      <Flex shrink="1">
        <Paragraph>Hi! My name is Laura. 👋🏻</Paragraph>
        <Paragraph>
          I'm a <Mark>Business Director</Mark> with{' '}<Mark>{yearsOfExperience} years of experience</Mark> in the field and I'm especially passionate about Sales and Project Management.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
        <Paragraph>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Paragraph>
      </Flex>
    </Flex>
  )
}
