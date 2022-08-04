import React from 'react';
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';

const PostFilter = ({filter, setFilter}) => {
  const { sort, query } = filter;
  return (
    <div>
        <MyInput
          value={query}
          onChange={e => setFilter({ ...filter, query: e.target.value })}
          placeholder='Поиск...'
        />
        <MySelect
          value={sort}
          onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
          defaultValue='Сортировка'
          options={[
            { value: 'title', name: 'по названию' },
            { value: 'body', name: 'по описанию' },
          ]}
        />
    </div>
  );
};

export default PostFilter;