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

export const Header = () => {
  const viewportSize = useViewportSize()
  const direction = viewportSize === 'small' ? 'column' : 'row'

  return (
    <Container align="center" as="header" direction={direction} justify="space-between">
      <Flex align="flex-start">
        <Display as="h1">Laura Tota</Display>
        <HeadingSmall as="h2">
          <span style={{ whiteSpace: 'nowrap' }}>Strategy Advisor</span>{' '}
          <span style={{ whiteSpace: 'nowrap' }}>&amp; Business Developer</span>
        </HeadingSmall>
      </Flex>

      <DesktopIcons>
        <SocialIcons gap="8px" iconSize="42px" />
      </DesktopIcons>
    </Container>
  )
}
