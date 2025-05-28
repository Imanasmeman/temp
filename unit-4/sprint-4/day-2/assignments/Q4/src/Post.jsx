import React, { useMemo } from "react";

// React.memo prevents unnecessary re-renders when props don't change
const Post = React.memo(({ post, toggleVerifyPost }) => {
  // Memoize random background color to keep it stable across renders
  const bgColor = useMemo(() => {
    const r = Math.floor(Math.random() * 200 + 50);
    const g = Math.floor(Math.random() * 200 + 50);
    const b = Math.floor(Math.random() * 200 + 50);
    return `rgb(${r},${g},${b})`;
  }, []);

  console.log(`Rendering Post ID: ${post.id}`); // For debug/testing

  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        color: "#fff",
      }}
    >
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={() => toggleVerifyPost(post.id)}>
        {post.verifyPost ? "Verified" : "Verify"}
      </button>
    </div>
  );
});

export default Post;
