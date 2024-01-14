import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'components/Link'
import { useScrolled } from 'hooks/useScrolled'
import styled from 'styled-components'

type IconWrapperProps = {
  scrolled: boolean
}

const IconWrapper = styled.div<IconWrapperProps>`
  bottom: 8px;
  opacity: ${({ scrolled }) => (scrolled ? '1' : '0')};
  position: fixed;
  right: 8px;
  visibility: ${({ scrolled }) => (scrolled ? 'visible' : 'hidden')};
  transition: visibility 0.3s, opacity 0.3s;
  z-index: 10;
`

const IconLink = styled(Link)`
  align-items: center;
  background: rgba(230, 230, 230, 0.8);
  border: 2px solid #e6e6e6;
  border-radius: 50%;
  box-shadow: inset 0 0 0 0px #222;
  color: #222;
  display: flex;
  height: 48px;
  justify-content: center;
  line-height: 48px;
  transition: all 0.3s;
  width: 48px;

  @media (hover: hover) {
    &:hover {
      box-shadow: inset 0 0 0 35px #222;
      color: #e6e6e6;
    }
  }
`

const Icon = styled(FontAwesomeIcon)`
  height: 30px;
`

export const BackToTop = () => {
  const scrolled = useScrolled()

  return (
    <IconWrapper scrolled={scrolled}>
      <IconLink href="#">
        <Icon icon={faChevronUp} size="3x" />
      </IconLink>
    </IconWrapper>
  )
}
