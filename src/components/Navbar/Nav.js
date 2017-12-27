import styled from 'styled-components';

export default styled.nav`
  color: ${props => props.theme.colors.white};
  font-size: 0.875rem;
  margin-bottom: 30px;
  box-shadow: ${props => props.theme.boxShadow};
  background-color: ${props => props.theme.colors.black};
`;
