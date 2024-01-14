import { faInstagram, faLinkedin, faThreads, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Flex } from 'components/Flex'
import { Link } from 'components/Link'
import { Body } from 'components/Typography/Body'
import { Display } from 'components/Typography/Display'
import { HeadingSmall } from 'components/Typography/HeadingSmall'
import { useViewportSize } from 'hooks/useViewportSize'
import styled from 'styled-components'

const Container = styled(Flex)`
  padding: 32px 0 24px;
`

const IconsContainer = styled(Flex)`
  margin: 24px 0;
`

type IconLinkProps = {
  small: boolean
}

const IconLink = styled(Link)<IconLinkProps>`
  align-items: center;
  border: 2px solid #e6e6e6;
  border-radius: 50%;
  background: #e6e6e6;
  box-shadow: inset 0 0 0 0px #222;
  color: #222;
  display: flex;
  height: 55px;
  justify-content: center;
  line-height: 55px;
  margin: ${({ small }) => (small ? '0 8px' : '0 0 0 16px')};
  transition: all 0.3s;
  width: 55px;

  &:hover {
    box-shadow: inset 0 0 0 35px #222;
    color: #e6e6e6;
  }
`

const Icon = styled(FontAwesomeIcon)`
  height: 30px;
`

export const Header = () => {
  const viewportSize = useViewportSize()
  const direction = viewportSize === 'small' ? 'column' : 'row'
  const leftAlign = viewportSize === 'small' ? 'center' : 'flex-start'
  const rightAlign = viewportSize === 'small' ? 'center' : 'flex-end'

  return (
    <Container align="center" as="header" direction={direction} justify="space-between">
      <Flex align={leftAlign}>
        <Display as="h1"> Laura Tota</Display>
        <HeadingSmall as="h2">Business Director @ {' '}
          <HeadingSmall as="span" weight="500">
            <Link href="//linkedin.com/company/sweetguest/" target="_blank">
              SweetGuest
            </Link>
          </HeadingSmall>
        </HeadingSmall>
        <Body>Mangia. Viaggia. Ama.</Body>
      </Flex>

      <Flex align={rightAlign}>
        <IconsContainer direction="row">
          <IconLink href="//linkedin.com/in/lauratota123" rel="nofollow" small={viewportSize === 'small'} target="_blank">
            <Icon icon={faLinkedin} size="3x" />
          </IconLink>
          <IconLink href="//instagram.com/_elle_ti________" rel="nofollow" small={viewportSize === 'small'} target="_blank">
            <Icon icon={faInstagram} size="3x" />
          </IconLink>
          <IconLink href="//threads.net/@_elle_ti________" rel="nofollow" small={viewportSize === 'small'} target="_blank">
            <Icon icon={faThreads} size="3x" />
          </IconLink>
          <IconLink
            href="//twitter.com/LauraTota8"
            rel="nofollow"
            small={viewportSize === 'small'}
            target="_blank"
          >
            <Icon icon={faXTwitter} size="3x" />
          </IconLink>
          <IconLink href="//tiktok.com/@lauratotaaa" rel="nofollow" small={viewportSize === 'small'} target="_blank">
            <Icon icon={faTiktok} size="3x" />
          </IconLink>
        </IconsContainer>

        <Body>Current location: Rome - Italy</Body>
      </Flex>
    </Container>
  )
}
