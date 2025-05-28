import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "../context/PostsContext";

const PostDetail = () => {
  const { id } = useParams();
  const { posts, loading, error } = useContext(PostsContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <p>Post not found.</p>;

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
