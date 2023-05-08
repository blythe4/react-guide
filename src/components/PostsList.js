import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = () => {
    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuth, setEnteredAuth] = useState("");
    // useState[0] - current value
    // useState[1] - state updating function
    const bodyChangeHandler = (event) => {
        const {
            target: { value },
        } = event;
        setEnteredBody(value);
    };
    const authChangeHandler = (event) => {
        const {
            target: { value },
        } = event;
        setEnteredAuth(value);
    };

    return (
        <>
            <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authChangeHandler} />
            <ul className={classes.posts}>
                <Post author={enteredAuth} body={enteredBody} />
                <Post author="Selina" body="Hello World" />
            </ul>
        </>
    );
};

export default PostsList;
