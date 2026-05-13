import { faInstagram, faLinkedin, faThreads, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'components/Link'
import styled from 'styled-components'

type ContainerProps = {
  direction?: 'row' | 'column'
  gap?: string
  justify?: 'flex-start' | 'space-between'
}

const Container = styled.div<ContainerProps>`
  align-items: center;
  display: flex;
  flex-direction: ${({ direction }) => direction ?? 'row'};
  gap: ${({ gap }) => gap ?? '4px'};
  height: ${({ justify }) => justify === 'space-between' ? '100%' : 'auto'};
  justify-content: ${({ justify }) => justify ?? 'flex-start'};
`

const IconLink = styled(Link)`
  align-items: center;
  border-radius: 50%;
  color: #6b7280;
  display: flex;
  height: 44px;
  justify-content: center;
  transition: color 0.2s;
  width: 44px;

  &:hover {
    color: #1e40af;
    text-decoration: none;
  }
`

type IconProps = { iconSize?: string }

const Icon = styled(FontAwesomeIcon)<IconProps>`
  height: ${({ iconSize }) => iconSize ?? '32px'};
`

const links = [
  { href: '//linkedin.com/in/lauratota123', icon: faLinkedin, label: 'LinkedIn' },
  { href: '//instagram.com/_elle_ti________', icon: faInstagram, label: 'Instagram' },
  { href: '//threads.net/@_elle_ti________', icon: faThreads, label: 'Threads' },
  { href: '//twitter.com/LauraTota8', icon: faXTwitter, label: 'X' },
]

type Props = {
  direction?: 'row' | 'column'
  gap?: string
  iconSize?: string
  justify?: 'flex-start' | 'space-between'
}

export const SocialIcons = ({ direction = 'row', gap, iconSize, justify }: Props) => (
  <Container direction={direction} gap={gap} justify={justify}>
    {links.map(({ href, icon, label }) => (
      <IconLink href={href} key={label} rel="nofollow" target="_blank">
        <Icon icon={icon} iconSize={iconSize} size="3x" />
      </IconLink>
    ))}
  </Container>
)
