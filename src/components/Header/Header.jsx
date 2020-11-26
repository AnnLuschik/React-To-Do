import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

function HeaderButton({
  type, onClick, page, children,
}) {
  const onClickHandler = useCallback(() => {
    onClick(type);
  }, [onClick, type]);

  return <Button onClick={onClickHandler} color={page === type ? 'green' : 'blue'}>{children}</Button>;
}

export function Header({ page, onClick }) {
  return (
    <StyledDiv>
      <HeaderButton page={page} onClick={onClick} type="all">All</HeaderButton>
      <HeaderButton page={page} onClick={onClick} type="active">Active</HeaderButton>
      <HeaderButton page={page} onClick={onClick} type="done">Done</HeaderButton>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 20px 0 50px;
`;
