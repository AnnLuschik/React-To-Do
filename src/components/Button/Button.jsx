import React from 'react';
import styled from 'styled-components';

export function Button({
  onClick, children, customType, color = 'transparent',
}) {
  return (
    <StyledBtn
      customType={customType}
      color={color}
      fontColor={customType === 'solid' ? 'white' : 'blue'}
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
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;
