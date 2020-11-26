import React, { useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import { Input, Button } from '../components';
import {
  getRecipeRequest, getMoreRecipeRequest, getRecipeData, deleteRecipeData,
} from './actions';
import { RecipeItem, RecipeDataItem } from './components';

export function Recipe() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const getRecipe = useCallback(() => {
    dispatch(getRecipeRequest(value));
  }, [dispatch, value]);

  const getMoreRecipe = useCallback(() => {
    dispatch(getMoreRecipeRequest());
  }, [dispatch]);

  const showRecipeItem = useCallback((id) => {
    dispatch(getRecipeData(id));
  }, [dispatch]);

  const showAllRecipes = useCallback(() => {
    dispatch(deleteRecipeData());
  }, [dispatch]);

  const {
    loading, loadingMore, errorMessage, data, selectedRecipeData,
  } = useSelector((state) => state.recipe);

  const dispayedData = selectedRecipeData || data || 'none';
  const showData = useMemo(() => {
    switch (dispayedData) {
      case selectedRecipeData: {
        return (
          <>
            <RecipeDataItem
              recipe={selectedRecipeData.recipe}
            />
            <BackButton type="solid" color="black" onClick={showAllRecipes}>Back</BackButton>
          </>
        );
      }
      case data: {
        return (
          <>
            { data.hits.map(({ recipe }) => (
              <RecipeItem
                key={recipe.uri}
                id={recipe.uri}
                title={recipe.label}
                image={recipe.image}
                healthLabels={recipe.healthLabels}
                onClick={showRecipeItem}
              />
            ))}
            {data.hits.length !== 0
              ? <ShowMoreButton color="black" type="solid" onClick={getMoreRecipe}>{loadingMore ? 'Loading...' : 'Show more'}</ShowMoreButton>
              : null}
          </>
        ); }
      default: return null;
    }
  }, [
    data,
    dispayedData,
    selectedRecipeData,
    showAllRecipes,
    showRecipeItem,
    getMoreRecipe,
    loadingMore,
  ]);

  return (
    <Container>
      <form style={{ marginBottom: '25px' }} onSubmit={(e) => e.preventDefault()}>
        <Input value={value} onChange={setValue} />
        <Button color="black" type="solid" onClick={getRecipe}>Search</Button>
      </form>
      { errorMessage ? <h2 style={{ color: 'red' }}>{errorMessage}</h2> : null }
      {loading ? <ClipLoader /> : null}
      {showData}
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

const ShowMoreButton = styled(Button)`
  margin: 10px 0;
`;

const BackButton = styled(Button)`
  margin: 10px 0;
`;
