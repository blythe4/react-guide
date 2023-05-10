import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import NewPost from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";
import Posts from "./routes/Posts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Posts />,
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
