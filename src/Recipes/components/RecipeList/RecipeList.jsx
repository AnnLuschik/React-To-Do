import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import { Input, Button } from '../../../components';
import {
  getRecipeRequest, getMoreRecipeRequest, getRecipeData,
} from '../../actions';
import { RecipeItem } from '../RecipeItem';

export function RecipeList() {
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

  const {
    loading, loadingMore, errorMessage, data,
  } = useSelector((state) => state.recipe);

  const showData = () => {
    if (data) {
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
      );
    }
    return null;
  };

  return (
    <Container>
      <form style={{ marginBottom: '25px' }} onSubmit={(e) => e.preventDefault()}>
        <Input value={value} onChange={setValue} />
        <Button color="black" type="solid" onClick={getRecipe}>Search</Button>
      </form>
      { errorMessage ? <h2 style={{ color: 'red' }}>{errorMessage}</h2> : null }
      {loading ? <ClipLoader /> : null}
      {showData()}
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
