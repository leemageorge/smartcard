import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AgentLogin from "./pages/AgentLogin";
import AgentVerifyOtp from "./pages/AgentVerifyOtp";
import HomePage from "./pages/HomePage";
import UserLogin from "./pages/UserLogin";
import UserVerifyOtp from "./pages/UserVerifyOtp";

const router = createBrowserRouter([
    {
        path:"/",
        element:<AgentLogin />
    },
    {
        path:"/agent-verify-otp",
        element:<AgentVerifyOtp />
    },
    {
        path:"/user-login",
        element:<UserLogin />
    },
     {
        path:"/user-verify-otp",
        element:<UserVerifyOtp />
    },
     {
        path:"/homepage",
        element:<HomePage />
    }
])

const Routes = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Routes
