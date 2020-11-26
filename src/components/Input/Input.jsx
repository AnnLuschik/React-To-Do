import React, { useCallback } from 'react';
import styled from 'styled-components';

export function Input({ onChange }) {
  const onChangeHandler = useCallback((event) => {
    onChange(event.target.value);
  }, [onChange]);

  return (
    <StyledInput onChange={onChangeHandler} />
  );
}

const StyledInput = styled.input`
  padding: 10px;
  margin: 0 5px;
  font-size: 18px;
  border: 1px solid gray;
  border-radius: 5px;
  outline: none;
`;
