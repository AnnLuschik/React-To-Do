import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

export function Header({ onClick }) {
  const onClickHandler = useCallback((event) => {
    event.preventDefault();
    const target = event.target.textContent;
    onClick(target);
  }, [onClick]);

  return (
    <StyledDiv onClick={onClickHandler}>
      <Button customType="clear">All</Button>
      <Button customType="clear">Active</Button>
      <Button customType="clear">Done</Button>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 50px 0 50px;
`;
