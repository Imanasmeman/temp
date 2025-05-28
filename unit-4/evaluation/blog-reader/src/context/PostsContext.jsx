import React,{ createContext, useEffect, useState} from "react";
export const PostsContext = createContext();
export const PostsProvider = ({children}) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchPosts = async () => {
            try{
                const res = await fetch(" https://jsonplaceholder.typicode.com/posts");

                if(!res.ok) throw new Error("Failed to fetch posts");
                const data = await res.json();
                console.log("fetched Posts:", data)
                setPosts(data);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);
    return(
        <PostsContext.Provider value={{posts,loading,error}}>{children}</PostsContext.Provider>
    )
}