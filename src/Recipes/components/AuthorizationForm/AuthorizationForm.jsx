import React, { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { authorization } from '../../authorization';
import { Input, Button } from '../../../components';

export function AuthorizationForm({ onClick }) {
  const { state } = useLocation();
  const { from } = state || { from: { pathname: '/' } };
  const [value, setValue] = useState('');
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const login = () => {
    authorization.authorize(() => {
      setRedirectToReferrer(true);
    });
    onClick(value);
  };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <Input value={value} onChange={(v) => setValue(v)} />
      <Button type="solid" color="black" onClick={login}>Login</Button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  padding-top: 50px;
`;
