import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./NewPost.module.css";

const NewPost = ({ onAddPost }) => {
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

    const submitHandler = (event) => {
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuth,
        };
        onAddPost(postData);
    };

    return (
        <Modal>
            <form className={classes.form} onSubmit={submitHandler}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" required onChange={authChangeHandler} />
                </p>
                <p className={classes.actions}>
                    <Link to="..">Cancel</Link>
                    <button>Submit</button>
                </p>
            </form>
        </Modal>
    );
};

export default NewPost;
