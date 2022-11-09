import React, { useState, useEffect } from "react";
import "./App.css";
import { createPost, getPosts, removePost } from './util';

function App() {
  const [post, setPost] = useState({
    text: "",
  });
  const [postsList, setPostsList] = useState();
  const [error, setError] = useState();

  const fetchPosts = async () => {
    const res = await getPosts();
    if (res.error) {
      setError(res.error.name);
    }
    setPostsList(res.rows);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError();

    const data = new FormData(event.currentTarget);
  
    try {
      data.set('text', post.text);
      data.set('created_at', `${new Date().toISOString()}`);

      const newPost = await createPost(data);

      if (newPost.error) {
        setError(newPost.error);
      }
      setPost({ text: '' });
      fetchPosts();
    } catch (err) {
      setError(err);
    }
  };

  const handleInputChange = (event) => {
    setPost({
      ...post,
      text: event.target.value,
    });
  };

  const handleDelete = (id) => {
    try {
      removePost(id);
      fetchPosts();
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1>Add a new post</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="textarea"
          value={post.text}
          placeholder="Your post..."
          onChange={handleInputChange}
        ></input>
        <button type="submit">Add post</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}

    <ol>
    {postsList?.map((postItem) => (
      <li
      onClick={() => {
        handleDelete(postItem.id);
      }}>
        {postItem.text}
      </li>
    ))}
    </ol>
    </div>
  );
}

export default App;
