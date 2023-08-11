import { createBrowserRouter } from"react-router-dom";

import BasicLayout from "../layouts/farmers/BasicLayout";


import FarmerListComponent from "../components/farmers/FarmerListComponent";
import QNAPage from "../pages/consumer/QNAPage";

import QNAReadPage from "../pages/consumer/QNAReadpage";
import QNAModifyPage from "../pages/consumer/QNAModifyPage";
import QNARegistPage from "../pages/consumer/QNARegistPage";

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