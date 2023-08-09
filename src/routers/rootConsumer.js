import { createBrowserRouter } from"react-router-dom";

// import BasicLayout from "../layout/BasicLayout";
import BasicLayout from "../layouts/farmers/BasicLayout";

import BoardPage from "../pages/consumer/BoardPage";

import FarmerListComponent from "../components/farmers/FarmerListComponent";
import QNAPage from "../pages/consumer/QNAPage";
import QAPage from "../pages/consumer/QAPage";
import FarmerSubListComponent from "../components/farmers/FarmerSubListComponent";

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
    }
])

export default router3;