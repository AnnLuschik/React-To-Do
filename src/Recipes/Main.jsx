import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Switch, Route, Link, useRouteMatch,
} from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components';
import { RecipeList, DetailsPage } from './components';
import { deleteRecipeData } from './actions';

export function Main() {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();

  const { selectedRecipeData } = useSelector((state) => state.recipe);

  const showAllRecipes = useCallback(() => {
    dispatch(deleteRecipeData());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path={`${url}`}>
        <RecipeList />
      </Route>
      <Route path={`${url}/:productId`}>
        <Container>
          <DetailsPage recipe={selectedRecipeData} />
          <Link to={`${url}`}>
            <BackButton type="solid" color="black" onClick={showAllRecipes}>Back</BackButton>
          </Link>
        </Container>
      </Route>
    </Switch>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackButton = styled(Button)`
  margin: 10px 0;
`;
