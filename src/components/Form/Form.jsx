import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

export function Form({ onSubmit }) {
  const [value, setValue] = useState('');

  const onSubmitHandler = useCallback((event) => {
    event.preventDefault();
    onSubmit(value);
    setValue('');
  }, [onSubmit, value]);

  const onChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="input">
        Add a todo for today
        <StyledInput type="text" id="input" value={value} onChange={onChange} />
      </label>
      <Button type="solid" color="black">Add</Button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: 0 50px 25px;
`;

const StyledInput = styled.input`
  margin-left: 25px;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 5px;
  outline: none;

  &:focus {
    border: 1px solid blue;
  }
`;
