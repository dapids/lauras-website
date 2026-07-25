import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'components/Link'
import styled from 'styled-components'

const IconWrapper = styled.div`
  left: 8px;
  position: fixed;
  top: 8px;
  z-index: 10;
`

const IconLink = styled(Link)`
  align-items: center;
  background: rgba(239, 220, 224, 0.85);
  border: 2px solid var(--blush);
  border-radius: 50%;
  box-shadow: inset 0 0 0 0px var(--wine);
  color: var(--wine);
  display: flex;
  height: 40px;
  justify-content: center;
  line-height: 40px;
  transition: all 0.3s;
  width: 40px;

  @media (hover: hover) {
    &:hover {
      box-shadow: inset 0 0 0 35px var(--wine);
      color: var(--cream);
      cursor: pointer;
    }
  }
`

const Icon = styled(FontAwesomeIcon)`
  height: 30px;
`

export const SwitchTheme = ({ onTap }: { onTap: () => void }) => (
  <IconWrapper onClick={onTap}>
    <IconLink>
      <Icon icon={faLightbulb} size="2x" />
    </IconLink>
  </IconWrapper>
)
