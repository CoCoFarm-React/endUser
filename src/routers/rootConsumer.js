import { createBrowserRouter } from"react-router-dom";

import BasicLayout from "../layouts/farmers/BasicLayout";

import FarmerListComponent from "../components/farmers/FarmerListComponent";
import QNAPage from "../pages/consumer/QNAPage";

import QNAReadPage from "../pages/consumer/QNAReadpage";
import QNAModifyPage from "../pages/consumer/QNAModifyPage";
import QNARegistPage from "../pages/consumer/QNARegistPage";
import FarmerListPage from "../pages/consumer/FarmerListPage";
import FarmerListReadPage from "../pages/consumer/FarmerListReadPage";

const router3 = createBrowserRouter([
    {
        path:"",
        element: <BasicLayout></BasicLayout>
    },
    {
        path:"consumer/farmerlistpage",
        element: <FarmerListPage></FarmerListPage>
    }
    ,
    {
        path:"consumer/farmerlistpage/read:bno",
        element: <FarmerListReadPage></FarmerListReadPage>
    }
    
])

export default router3;