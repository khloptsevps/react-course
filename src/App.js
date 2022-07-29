import './styles/App.css';
import React, { useState } from 'react';
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Javascript - язык программирования' },
    { id: 2, title: 'Java', body: 'Java - язык программирования' },
    { id: 3, title: 'Python', body: 'Python - язык программирования' },
  ])
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className='App'>
      <PostForm createPost={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Поиск...'
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка'
          options={[
            { value: 'title', name: 'по названию' },
            { value: 'body', name: 'по описанию' },
          ]}
        />
      </div>
      {posts.length 
        ? 
        <PostsList remove={removePost} posts={posts} title={'Список постов'} />
        :
        <h1 style={{ textAlign:'center' }}>
          Посты не найдены!
        </h1>
      }
    </div>
  );
}

export default App;
