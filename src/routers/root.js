import { createBrowserRouter } from"react-router-dom";
import App from "../App";
import FarmerSigninPage from "../pages/farmers/FarmerSigninPage";

const router = createBrowserRouter([
    {
        path:"",
        element: <App></App>
    },
    {
        path:"farmersignin",
        element: <FarmerSigninPage></FarmerSigninPage>
    }
])

export default router;