import React from 'react';
import styled from 'styled-components';

export function RecipeDataItem({ title, image, ingredients }) {
  return (
    <StyledContainer>
      <h2>{title}</h2>
      <RecipeImage src={image} alt="" />
      <div style={{
        width: '100%', paddingTop: '20px', display: 'flex', flexWrap: 'wrap',
      }}
      >
        {ingredients.map((item) => (
          <StyledContent>
            <IngredientImage src={item.image} />
            <TextContainer>
              <p>{item.text}</p>
              <p>{`Weight, g: ${item.weight}`}</p>
            </TextContainer>
          </StyledContent>
        ))}
      </div>
      <div>
        <p>Calories: </p>
        <p>Total weight: </p>
        <p>Totaltime: </p>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  width: 600px;
  border: 1px solid black;
`;

const RecipeImage = styled.img`
  width: 250px;
  height: 200px;
  object-fit: cover;
`;

const IngredientImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  padding: 15px 0;
  font-size: 12px;
  border: 1px solid gray;
`;

const TextContainer = styled.div`
  padding: 0 10px;
`;
