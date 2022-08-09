/* eslint-disable react/jsx-filename-extension */

import React, { useEffect, useState } from 'react';
import PostsList from '../PostsList';
import PostForm from '../PostForm';
import PostFilter from '../PostFilter';
import MyModal from '../UI/modal/MyModal';
import MyButton from '../UI/button/MyButton';
import { usePosts } from '../../hooks/usePosts';
import PostService from '../../API/PostService';
import Loader from '../UI/loader/Loader';
import { useFetching } from '../../hooks/useFetching';
import getPageCount from '../../utils/pages';
import Pagination from '../pagination/Pagination';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const response = await PostService.getPosts(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (p) => {
    setPage(p);
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postsError && <h1>{`Произошла ошибка: ${postsError}`}</h1>}
      {isPostsLoading
        ? <div style={{ marginTop: 50, display: 'flex', justifyContent: 'center' }}><Loader /></div>
        : <PostsList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов" />}
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Posts;
