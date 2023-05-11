import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";
import Posts, { loader as postLoader } from "./routes/Posts";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Posts />,
                loader: postLoader,
                children: [
                    {
                        path: "/create-post",
                        element: <NewPost />,
                    },
                ],
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
