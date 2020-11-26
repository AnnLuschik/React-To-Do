import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

export function TodoItem({
  title, isDone, id, onChangeCompletionStatus, onDelete,
}) {
  const onCompletionButtonClick = useCallback(() => {
    onChangeCompletionStatus(id);
  }, [onChangeCompletionStatus, id]);

  const onDeleteButtonClick = useCallback(() => {
    onDelete(id);
  }, [onDelete, id]);

  return (
    <Container background={isDone ? '#2edb87' : 'none'}>
      <p>{title}</p>
      <StyledButtonContainer>
        <Button onClick={onCompletionButtonClick} type="solid" color={isDone ? 'orange' : 'green'}>{isDone ? 'Undo' : 'Mark done'}</Button>
        <Button onClick={onDeleteButtonClick} type="solid" color="red">Delete</Button>
      </StyledButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  background-color: ${(props) => props.background};
  border: 1px solid gray;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

// const onClickDone = useCallback(() => {
//   if (isDone) {
//     setMarkDoneBtnColor('green');
//     setMarkDoneBtnText('Mark done');
//     setBackground('none');
//     setIsDone(false);
//   } else {
//     setMarkDoneBtnColor('orange');
//     setMarkDoneBtnText('Undo');
//     setBackground('#2edb87');
//     setIsDone(true);
//   }
// }, [isDone]);

// const onClickDelete = useCallback(() => {
//   onClick(text);
// }, [onClick, text]);
