import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AgentLogin from "./pages/AgentLogin";
import AgentVerifyOtp from "./pages/AgentVerifyOtp";
import HomePage from "./pages/HomePage";
import UserLogin from "./pages/UserLogin";
import UserVerifyOtp from "./pages/UserVerifyOtp";
import UserListing from "./pages/UserListing";
import NewUsers from "./pages/NewUsers";
import SupportRequest from "./pages/SupportRequest";
import GetSupport from "./pages/GetSupport";
import Accounts from "./pages/Accounts";
import AdminDashboard from "./pages/AdminDashboard";

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
        path:"/admindashboard",
        element:<AdminDashboard />
    },
     {
        path:"/homepage",
        element:<HomePage />
    },
     {
        path:"/accounts",
        element:<Accounts />
    },
    {
        path:"/user-listing",
        element: <UserListing />
    },
    {
        path:"/new-users",
        element: <NewUsers />
    },
    {
        path:"/support-request",
        element: <SupportRequest />
    },
    {
        path:"/get-support",
        element: <GetSupport />
    },
])

const Routes = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Routes
