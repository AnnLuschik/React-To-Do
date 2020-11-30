import React, { useCallback } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

export function RecipeItem({
  title, image, healthLabels, onClick, id,
}) {
  const onClickHandler = useCallback(() => {
    onClick(id);
  }, [onClick, id]);

  const { url } = useRouteMatch();

  return (
    <StyledContainer id={id}>
      <Link to={`${url}/${id.split('_')[1]}`}>
        <StyledImage src={`${image}`} onClick={onClickHandler} />
      </Link>
      <StyledContentContainer>
        <StyledTitle>{title}</StyledTitle>
        <ol>
          {healthLabels.map((text) => <li key={text}>{text}</li>)}
        </ol>
      </StyledContentContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 10px 15px;
  width: 400px;
  border: 1px solid black;
`;

const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
`;

const StyledContentContainer = styled.div`
  padding-left: 15px;
`;

const StyledTitle = styled.h2`
  margin: 0;
  margin-bottom: 25px;
`;
