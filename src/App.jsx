import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Header, Form, Task } from './components';

export function App() {
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const [activePage, setActivePage] = useState('Active');

  const addTask = useCallback((value) => {
    setTodoList([...todoList, value]);
  }, [todoList]);

  const changeTask = useCallback(({ target, text }) => {
    if (target === 'Mark done') {
      const task = todoList.filter((item) => item === text);
      setDoneList([...doneList, ...task]);
      const newList = todoList.filter((item) => item !== text);
      setTodoList(newList);
    } else if (target === 'Undo') {
      const task = doneList.filter((item) => item === text);
      setTodoList([...todoList, ...task]);
      const newList = doneList.filter((item) => item !== text);
      setDoneList(newList);
    } else if (target === 'Delete') {
      if (todoList.find((item) => item === text)) {
        const newList = todoList.filter((item) => item !== text);
        setTodoList(newList);
      } else {
        const newList = doneList.filter((item) => item !== text);
        setDoneList(newList);
      }
    }
  }, [doneList, todoList]);

  const showAnotherList = useCallback((target) => {
    if (target === 'All') {
      setActivePage('All');
    } else if (target === 'Active') {
      setActivePage('Active');
    } else if (target === 'Done') {
      setActivePage('Done');
    }
  }, []);

  function showList() {
    if (activePage === 'Active') {
      if (todoList.length > 0) {
        return todoList.map((i) => <Task text={i} key={i} onClick={changeTask} status="todo" />);
      }
      return <p style={{ color: 'green' }}>There are no tasks for today.</p>;
    }
    if (activePage === 'Done') {
      if (doneList.length > 0) {
        return doneList.map((i) => <Task text={i} key={i} onClick={changeTask} status="done" />);
      }
      return <p style={{ color: 'red' }}>You haven`t done anything yet.</p>;
    }
    if (doneList.length === 0 && todoList.length === 0) {
      return <p style={{ color: 'green' }}>There are no tasks for today.</p>;
    }
    return (
      <>
        {
      todoList.map((i) => <Task text={i} key={i} onClick={changeTask} status="todo" />)
      }
        {
      doneList.map((i) => <Task text={i} key={i} onClick={changeTask} status="done" />)
      }
      </>
    );
  }

  return (
    <StyledDiv>
      <Header onClick={showAnotherList} />
      <Form onSubmit={addTask} />
      <StyledTaskContainer>
        {showList()}
      </StyledTaskContainer>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
`;

const StyledTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
