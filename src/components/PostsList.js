import { useLoaderData } from "react-router-dom";
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
    const posts = useLoaderData();

    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post key={post.body} id={post.id} author={post.author} body={post.body} />
                    ))}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{ textAlign: "center", color: "white" }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    );
};

export default PostsList;
