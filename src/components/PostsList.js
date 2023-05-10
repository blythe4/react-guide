import { useState, useEffect } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";

/**
 *
 * fetch에서 받아오는 데이터는 Node.js로 되어 있는 백엔드에서 가져옴.
 * https://github.com/academind/react-complete-guide-code/blob/zz-reactjs-summary-updated/extra-files/dummy-backend.zip
 * 위 링크에서 다운받아 `npm install` 후 `npm start`로 실행 후 데이터 전송을 해야한다.
 *
 */
const PostsList = () => {
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
