import { createBrowserRouter } from"react-router-dom";

// import BasicLayout from "../layout/BasicLayout";
import BasicLayout from "../layouts/farmers/BasicLayout";

import BoardPage from "../pages/consumer/BoardPage";
import QAPage from "../pages/consumer/QAPage";

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
        path:"/consumer/qa",
        element: <QAPage></QAPage>
    }
])

export default router3;