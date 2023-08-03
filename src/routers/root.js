import { createBrowserRouter } from"react-router-dom";
import FarmerSigninPage from "../pages/farmers/FarmerSigninPage";
import BasicLayout from "../layouts/farmers/BasicLayout";

const router = createBrowserRouter([
    {
        path:"",
        element: <BasicLayout></BasicLayout>
    },
    {
        path:"farmersignin",
        element: <FarmerSigninPage></FarmerSigninPage>
    }
])

export default router;