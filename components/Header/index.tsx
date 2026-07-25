import { Flex } from 'components/Flex'
import { SocialIcons } from 'components/SocialIcons'
import { Display } from 'components/Typography/Display'
import { HeadingSmall } from 'components/Typography/HeadingSmall'
import { useViewportSize } from 'hooks/useViewportSize'
import styled from 'styled-components'

const Container = styled(Flex)`
  padding: 32px 0 64px;

  @media (max-width: 800px) {
    padding: 32px 0 28px;
  }
`

const DesktopIcons = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`

const Brush = styled.svg`
  height: 18px;
  margin-top: 10px;
  width: 160px;
`

export const Header = () => {
  const viewportSize = useViewportSize()
  const direction = viewportSize === 'small' ? 'column' : 'row'

  return (
    <Container align="center" as="header" direction={direction} justify="space-between">
      <Flex align="flex-start">
        <Display as="h1">Laura Tota</Display>
        <HeadingSmall as="h2">
          <span style={{ whiteSpace: 'nowrap' }}>Consulente Strategica</span>{' '}
          <span style={{ whiteSpace: 'nowrap' }}>&amp; Business Developer</span>
        </HeadingSmall>
        <Brush viewBox="0 0 160 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 12C24 4 46 16 68 8C90 1 112 15 135 6C142 3.5 150 5 157 8"
            stroke="#B99B6B"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </Brush>
      </Flex>

      <DesktopIcons>
        <SocialIcons gap="8px" iconSize="42px" />
      </DesktopIcons>
    </Container>
  )
}
