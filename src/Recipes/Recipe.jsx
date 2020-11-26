import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Input, Button } from '../components';
import { getRecipeRequest, getMoreRecipeRequest, showRecipeData } from './actions';
import { RecipeDataItem, RecipeItem } from './components';

export function Recipe() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const getRecipe = useCallback(() => {
    dispatch(getRecipeRequest(value));
  }, [dispatch, value]);

  const getMoreRecipe = useCallback(() => {
    dispatch(getMoreRecipeRequest());
  }, [dispatch]);

  const [key, setKey] = useState('');
  const showRecipeItem = useCallback(() => {
    dispatch(showRecipeData(key));
  }, [dispatch, key]);

  const {
    loading, loadingMore, errorMessage, data,
  } = useSelector((state) => state.recipe);

  // const displayedData = recipeData || data || null;

  const ingredient = [{
    text: '640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)',
    weight: 640.0,
    image: 'https://www.edamam.com/food-img/491/4916353c22bd1ac381ac81d55597ddbe.jpg',
  }, {
    text: '640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)',
    weight: 640.0,
    image: 'https://www.edamam.com/food-img/491/4916353c22bd1ac381ac81d55597ddbe.jpg',
  }, {
    text: '640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)',
    weight: 640.0,
    image: 'https://www.edamam.com/food-img/491/4916353c22bd1ac381ac81d55597ddbe.jpg',
  }, {
    text: '640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)',
    weight: 640.0,
    image: 'https://www.edamam.com/food-img/491/4916353c22bd1ac381ac81d55597ddbe.jpg',
  }];

  return (
    <Container>
      <form style={{ marginBottom: '25px' }} onSubmit={(e) => e.preventDefault()}>
        <Input value={value} onChange={setValue} />
        <Button color="black" customType="solid" onClick={getRecipe}>{loading ? 'Loading...' : 'Search'}</Button>
      </form>
      { errorMessage ? <h2 style={{ color: 'red' }}>{errorMessage}</h2> : null }
      {true ? <RecipeDataItem title="Chicken" image="https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg" ingredients={ingredient} /> : null}
      {
        data ? data.hits.map(({ recipe }) => (
          <RecipeItem
            key={recipe.uri}
            id={recipe.uri}
            title={recipe.label}
            image={recipe.image}
            healthLabels={recipe.healthLabels}
            onClick={showRecipeItem}
            getId={setKey}
          />
        )) : null
      }
      {data ? <Button color="black" customType="solid" onClick={getMoreRecipe}>{loadingMore ? 'Loading...' : 'Show more'}</Button> : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;
