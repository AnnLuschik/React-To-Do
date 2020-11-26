import React, { useMemo } from 'react';
import { TodoItem } from '../TodoItem';

export function TodoItems({
  data, page, onDelete, onChangeCompletionStatus,
}) {
  const isNoTodos = data.length === 0;

  const emptyText = useMemo(() => {
    if (page === 'all') {
      return 'There are no tasks';
    }

    if (page === 'active') {
      return 'There are no active tasks';
    }

    return 'There are no completed tasks';
  }, [page]);

  return isNoTodos
    ? <span>{emptyText}</span>
    : data.map((todo) => (
      <TodoItem
        onDelete={onDelete}
        onChangeCompletionStatus={onChangeCompletionStatus}
        {...todo}
      />
    ));
}
