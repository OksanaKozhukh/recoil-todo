import { selector } from 'recoil';
import { todoItemsState, todoItemFilterState } from './atoms';

export const filteredTodoItemsState = selector({
  key: 'filteredTodoItemsState',
  get: ({ get }) => {
    const filter = get(todoItemFilterState);
    const items = get(todoItemsState);

    switch (filter) {
      case 'Completed':
        return items?.filter((el) => el.isComplete);
      case 'Uncompleted':
        return items?.filter((el) => !el.isComplete);
      case 'All':
      default:
        return items;
    }
  },
});

export const todoItemsTotalState = selector({
  key: 'todoItemsTotalState',
  get: ({ get }) => {
    const items = get(todoItemsState);
    const totalItemsCount = items?.length;
    const totalItemsCompletedCount = items?.filter(
      (el) => el.isComplete
    )?.length;
    const totalItemsUncompletedCount =
      totalItemsCount - totalItemsCompletedCount;
    const itemsCompletedPercent =
      totalItemsCompletedCount === 0
        ? 0
        : Math.round((totalItemsCompletedCount / totalItemsCount) * 100);

    return {
      totalItemsCount,
      totalItemsCompletedCount,
      totalItemsUncompletedCount,
      itemsCompletedPercent,
    };
  },
});
