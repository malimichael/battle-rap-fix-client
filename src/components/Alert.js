import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;

  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
`;

const List = styled.ul`
  text-align: left;
  padding: 0;
  margin: 0.5em 0 0;
  list-style-position: inside;
`;

const Message = styled.div`
  font-weight: 600;
`;

const Alert = ({ message, errors }) => (
  <Wrapper>
    <Message>{message}</Message>
    <List>{errors.map(error => <li key={error}>{error}</li>)}</List>
  </Wrapper>
);

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Alert;
