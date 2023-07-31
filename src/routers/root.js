import { createBrowserRouter } from"react-router-dom";
import App from "../App";
import FarmerSigninPage from "../pages/farmers/FarmerSigninPage";
import SignInPage from "../pages/common/SignInPage";

const router = createBrowserRouter([
    {
        path:"",
        element: <SignInPage></SignInPage>
    },
    {
        path:"farmersignin",
        element: <FarmerSigninPage></FarmerSigninPage>
    }
])

export default router;