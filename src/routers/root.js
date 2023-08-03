import { createBrowserRouter } from"react-router-dom";
import App from "../App";
import FarmerSigninPage from "../pages/farmers/FarmerSigninPage";
import SignInPage from "../pages/common/SignInPage";
import ConsumerPage from "../pages/consumer/ConsumerPage";

const router = createBrowserRouter([
    {
        path:"",
        element: <SignInPage></SignInPage>
    },
    {
        path:"farmersignin",
        element: <FarmerSigninPage></FarmerSigninPage>
    },
    {
        path:"ConsumerPage",
        element: <ConsumerPage></ConsumerPage>
    }
])

export default router;