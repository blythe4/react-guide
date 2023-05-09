import { useState, useEffect } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = ({ isPosting, onStopPosting }) => {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    useEffect(() => {
        const fetchPosts = async () => {
            setIsFetching(true);
            const response = await fetch("http://localhost:8080/posts");
            const resData = await response.json();
            if (!response.ok) {
                // Error
            }
            setPosts(resData.posts);
            setIsFetching(false);
        };
        fetchPosts();
    }, []);

    // fetch("http://localhost:8080/posts")
    //     .then((response) => response.json())
    //     .then((data) => setPosts(data.posts));
    const addPostHandler = (postData) => {
        fetch("http://localhost:8080/posts", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "content-Type": "application/json",
            },
        });
        // setPosts([postData, ...posts]);
        setPosts((existingPosts) => [postData, ...existingPosts]);
    };

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
                </Modal>
            )}
            {!isFetching && posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post key={post.body} author={post.author} body={post.body} />
                    ))}
                </ul>
            )}
            {!isFetching && posts.length === 0 && (
                <div style={{ textAlign: "center", color: "white" }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
            {isFetching && (
                <div style={{ textAlign: "center", color: "white" }}>
                    <p>Loading posts...</p>
                </div>
            )}
        </>
    );
};

export default PostsList;
