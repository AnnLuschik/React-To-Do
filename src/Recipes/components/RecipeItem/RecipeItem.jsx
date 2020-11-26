import React, { useCallback } from 'react';
import styled from 'styled-components';

export function RecipeItem({
  title, image, healthLabels, onClick, id,
}) {
  const onClickHandler = useCallback(() => {
    onClick(id);
  }, [onClick, id]);

  return (
    <StyledContainer id={id}>
      <StyledImage src={`${image}`} onClick={onClickHandler} />
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
