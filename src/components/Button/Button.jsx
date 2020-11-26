import React from 'react';
import styled from 'styled-components';

export function Button({
  onClick, children, type, color, ...restProps
}) {
  return (
    <StyledBtn
      {...restProps}
      customType={type}
      color={color}
      onClick={onClick}
    >
      {children}
    </StyledBtn>
  );
}

const StyledBtn = styled.button`
  padding: 10px 15px;
  font-weight: 600;
  font-size: 16px;
  color: white;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  ${(props) => (props.customType === 'solid'
    ? `background-color: ${props.color}`
    : `color: ${props.color}`)}
`;
