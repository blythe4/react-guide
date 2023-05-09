import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
    const [modalIsVible, setModalIsVisible] = useState(false);

    const showModalHandler = () => {
        setModalIsVisible(true);
    };
    const hideModalHandler = () => {
        setModalIsVisible(false);
    };

    return (
        <>
            <MainHeader onCreatePost={showModalHandler} />
            <main>
                <PostsList isPosting={modalIsVible} onStopPosting={hideModalHandler} />
            </main>
        </>
    );
}

export default App;
