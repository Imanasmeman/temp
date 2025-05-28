import React, { useState, useEffect, useCallback } from "react";
import Post from "./Post";

function App() {
  const [timer, setTimer] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  // Timer increments every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Add new post handler
  const addPost = () => {
    if (title.trim() === "" || body.trim() === "") return;
    setPosts((prevPosts) => [
      ...prevPosts,
      {
        id: Date.now(),
        title,
        body,
        verifyPost: false,
      },
    ]);
    setTitle("");
    setBody("");
  };

  // Memoize toggle function to avoid re-creating on every render
  const toggleVerifyPost = useCallback((id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, verifyPost: !post.verifyPost } : post
      )
    );
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Timer: {timer}s</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: 8 }}
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        style={{ marginRight: 8 }}
      />
      <button onClick={addPost}>Add Post</button>

      <div style={{ marginTop: 20 }}>
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            toggleVerifyPost={toggleVerifyPost}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
