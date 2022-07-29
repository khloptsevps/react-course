import './styles/App.css';
import React, { useState } from 'react';
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Javascript - язык программирования' },
    { id: 2, title: 'Java', body: 'Java - язык программирования' },
    { id: 3, title: 'Python', body: 'Python - язык программирования' },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className='App'>
      <PostForm createPost={createPost} />
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
