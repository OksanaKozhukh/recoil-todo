import React from 'react';
import { useRecoilState } from 'recoil';

import { TodoItem } from './TodoItem';
import { todoItemsState } from '../../state';

export function TodoItemContainer({ item }) {
  const [todoItems, setTodoItems] = useRecoilState(todoItemsState);
  const editTodoItemText = (value) => {
    setTodoItems(
      getItemsWithUpdateItem(todoItems, {
        ...item,
        text: value,
      })
    );
  };

  const toggleItemCheck = () => {
    setTodoItems(
      getItemsWithUpdateItem(todoItems, {
        ...item,
        isComplete: !item.isComplete,
      })
    );
  };

  const deleteItem = () => {
    const newList = todoItems.filter((todo) => todo.id !== item.id);
    setTodoItems(newList);
  };

  return (
    <TodoItem
      text={item.text}
      isComplete={item.isComplete}
      onToggleCheck={toggleItemCheck}
      onDeleteClick={deleteItem}
      onTextUpdate={editTodoItemText}
    />
  );
}

const getItemsWithUpdateItem = (items, item) => {
  return items.map((el) => {
    if (el.id === item.id) {
      return item;
    } else {
      return el;
    }
  });
};
