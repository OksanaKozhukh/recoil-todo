import React from 'react';
import { useRecoilState } from 'recoil';

import { TodoFilter } from './TodoFilter';
import { todoItemFilterState } from '../../state';

export function TodoFilterContainer() {
  const [filterValue, setFilterValue] = useRecoilState(todoItemFilterState);

  const updateFilter = (value) => setFilterValue(value);

  return <TodoFilter value={filterValue} changeFilter={updateFilter} />;
}
