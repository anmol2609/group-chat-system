
import ReactDOM from "react-dom/client";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Registration from "./components/login/Registration";
const App = () =>{
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Login />,
        },
        {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/registration",
            element: <Registration />,
          },
      ]);
    return(
        <div className="app">
            <RouterProvider router={router} />
        </div>
    )
}
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)