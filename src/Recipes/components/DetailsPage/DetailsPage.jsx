import React from 'react';
import styled from 'styled-components';

export function DetailsPage({ recipe }) {
  const {
    recipe: {
      label: title, image, ingredients, totalWeight, calories, totalTime,
    },
  } = recipe;
  return (
    <Container>
      <h2>{title}</h2>
      <RecipeImage src={image} alt="" />
      <IngredientsContainer>
        {ingredients ? ingredients.map(({ image: src, text, weight }) => (
          <StyledContent>
            <IngredientImage src={src} />
            <TextContainer>
              <p>{text}</p>
              <p>{`Weight, g: ${Math.floor(weight)}`}</p>
            </TextContainer>
          </StyledContent>
        )) : null}
      </IngredientsContainer>
      <div>
        <p>{`Calories: ${Math.floor(calories)}`}</p>
        <p>{`Total weight, g: ${Math.floor(totalWeight)}`}</p>
        <p>{`Totaltime, min: ${totalTime}`}</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
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

const IngredientsContainer = styled.div`
  display: flex; 
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 20px;
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  margin-bottom: 15px;
  padding: 15px 10px;
  font-size: 12px;
  border: 1px solid gray;
`;

const TextContainer = styled.div`
  padding: 0 10px;
`;
