import { Link, Form, redirect } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./NewPost.module.css";

/**
 *
 * <Form> : react-router-dom
 * 태그 안에 있는 name 속성으로 데이터를 갖는다.
 *
 */

const NewPost = () => {
    return (
        <Modal>
            <Form method="post" className={classes.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" required rows={3} />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="author" required />
                </p>
                <p className={classes.actions}>
                    <Link to="..">Cancel</Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
};

export default NewPost;

/**
 *
 * Object.fromEntries
 * <Form> 태그 안에 있는 name으로 Object 생성
 * formData.get('body')
 *
 */
export const action = async ({ request }) => {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData); // { body: '...', author: '...' }
    await fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "content-Type": "application/json",
        },
    });
    return redirect("/");
};
