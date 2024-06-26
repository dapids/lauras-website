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
  background: rgba(230, 230, 230, 0.8);
  border: 2px solid #e6e6e6;
  border-radius: 50%;
  box-shadow: inset 0 0 0 0px #222;
  color: #222;
  display: flex;
  height: 40px;
  justify-content: center;
  line-height: 40px;
  transition: all 0.3s;
  width: 40px;

  @media (hover: hover) {
    &:hover {
      box-shadow: inset 0 0 0 35px #222;
      color: #e6e6e6;
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
