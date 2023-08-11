import { createBrowserRouter } from"react-router-dom";

import BasicLayout from "../layouts/farmers/BasicLayout";


import FarmerListComponent from "../components/farmers/FarmerListComponent";
import QNAPage from "../pages/consumer/consumertack/QNAPage";

import QNAReadPage from "../pages/consumer/consumertack/QNAReadpage";
import QNAModifyPage from "../pages/consumer/consumertack/QNAModifyPage";
import QNARegistPage from "../pages/consumer/consumertack/QNARegistPage";

const router3 = createBrowserRouter([
    {
        path:"",
        element: <BasicLayout></BasicLayout>
    },
    {
        path:"/consumer",
        element: <FarmerListComponent></FarmerListComponent>
    },
    {
        path:"/consumer/qapage",
        element: <QNAPage></QNAPage>
    },
    {
        path:"/consumer/qapage/read/:bno",
        element: <QNAReadPage></QNAReadPage>
    },
    {
        path:"/consumer/qapage/modify/:bno",
        element: <QNAModifyPage></QNAModifyPage>
    },
    {
        path:"/consumer/qapage/regist",
        element: <QNARegistPage></QNARegistPage>
    }
])

export default router3;