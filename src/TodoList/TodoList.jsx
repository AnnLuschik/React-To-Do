import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Form, TodoItems, Header } from '../components';
import { ADD_TODO, CHANGE_TODO_COMPLETION_STATUS, DELETE_TODO } from './action';

export function TodoList() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todoList.todos);
  const [currentPage, setCurrentPage] = useState('all');

  const addTodo = useCallback((value) => {
    dispatch({ type: ADD_TODO, payload: value });
  }, [dispatch]);

  const toggleCompletion = useCallback((todoId) => {
    dispatch({ type: CHANGE_TODO_COMPLETION_STATUS, payload: todoId });
  }, [dispatch]);

  const deleteTodo = useCallback((todoId) => {
    dispatch({ type: DELETE_TODO, payload: todoId });
  }, [dispatch]);

  const filteredTodos = todos.filter((todo) => {
    if (currentPage === 'active') {
      return todo.isDone === false;
    }

    if (currentPage === 'done') {
      return todo.isDone === true;
    }

    return true;
  });

  return (
    <StyledDiv>
      <Header onClick={setCurrentPage} page={currentPage} />
      <Form onSubmit={addTodo} />
      <TodoItems
        page={currentPage}
        data={filteredTodos}
        onDelete={deleteTodo}
        onChangeCompletionStatus={toggleCompletion}
      />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

// const StyledTaskContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
// `;
