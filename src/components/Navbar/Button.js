import { Button } from '../common/Button';
import { colors, breakpoints } from '../../styles/variables.json';

export default Button.extend`
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.375rem 0.75rem;
  color: ${colors.white};
  background-color: ${props => (props.outline ? 'transparent' : colors.grey)};
  border-width: ${props => (props.outline ? '2px' : '1px')};
  border-color: ${props => (props.outline ? colors.white : colors.grey)};

  &:hover,
  &:focus,
  &:active {
    color: ${props => (props.outline ? colors.black : colors.white)};
    background-color: ${props =>
      props.outline ? colors.white : colors.greyDarken};
    border-color: ${props =>
      props.outline ? colors.white : colors.greyDarken};
  }

  @media (${breakpoints.tablet}) {
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: 0.5rem;
  }
`;
