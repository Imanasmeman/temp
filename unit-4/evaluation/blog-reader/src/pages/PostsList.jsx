import React, {useContext, useState} from "react";
import {PostsContext} from "../context/PostsContext";
import { Link } from "react-router-dom";
import "./PostsList.css"
import { useSyncExternalStore } from "react";


const PostsList = () => {
    const { posts, loading, error } = useContext(PostsContext);
    const [search, setSearch] = useState("");
    const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(search.toLocaleLowerCase()) || post.body.toLowerCase().includes(search.toLowerCase()));
    if (loading) return <p>Loading posts...</p>;
    if(error) return <p>Error: {error}</p>
    return (
        <div className = "posts-list">
            <h1>Blog Posts</h1>
            <input type="text" placeholder="Search by title or content..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}/>
            <ul>
                {filteredPosts.map((post) => (
                    <li key = {post.id}
                    className = "post-card"> 
                    <Link to = {`/post/${post.id}`}>
                    <h3>{post.title}</h3>
                    <p>{post.body.slice(0, 100)}...</p>
                    </Link> </li>
                ))}
            </ul>
        </div>
    )
};
 export default PostsList