import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Inbox from "./pages/Inbox.jsx";
import { Provider } from "react-redux";
import { store } from "./services/store/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/inbox",
        element: <Inbox />,
      },
      // {
      //   path: "/login",
      //   element: (
      //     <Protected authentication={false}>
      //       <Login />
      //     </Protected>
      //   ),
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
