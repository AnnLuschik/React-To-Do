import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

export function Task({ text, onClick, status }) {
  const [markDoneBtnColor, setMarkDoneBtnColor] = useState('green');
  const [markDoneBtnText, setMarkDoneBtnText] = useState('Mark done');
  const [background, setBackground] = useState('transparent');
  const [isDone, setIsDone] = useState(status || 'todo');

  const onClickHandler = useCallback((event) => {
    event.preventDefault();
    const target = event.target.textContent;
    if (target === 'Mark done') {
      setIsDone(true);
    } else if (target === 'Undo') {
      setIsDone(false);
    }
    onClick({ target, text });
  }, [onClick, text]);

  useEffect(() => {
    if (isDone === 'done') {
      setMarkDoneBtnColor('orange');
      setMarkDoneBtnText('Undo');
      setBackground('#2edb87');
    } else {
      setMarkDoneBtnColor('green');
      setMarkDoneBtnText('Mark done');
      setBackground('none');
    }
  }, [isDone]);

  return (
    <StyledContainer background={background}>
      <p>{text}</p>
      <StyledButtonContainer onClick={onClickHandler}>
        <Button customType="solid" color={markDoneBtnColor}>{markDoneBtnText}</Button>
        <Button customType="solid" color="red">Delete</Button>
      </StyledButtonContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
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
