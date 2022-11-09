import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [post, setPost] = useState({
    text: "",
  });
  const [postsList, setPostsList] = useState();
  const [error, setError] = useState();

  const handleSubmit = (event) => {
    // Handle
  };

  const handleInputChange = (event) => {
    setPost({
      ...post,
      text: event.target.value,
    });
  };

  const handleDelete = (id) => {
    // Handle
  };

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
