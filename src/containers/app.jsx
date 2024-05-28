import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Main from "./main";
import Image from "./image";
import StyleExample from './style-example';

const router = createBrowserRouter([
    {
        path: "/",
        element: <StyleExample />,
    },
    {
        path: "/image",
        element: <Image />,
    },
]);

const App = () => {
    return <RouterProvider router={router} />
}

export default App;