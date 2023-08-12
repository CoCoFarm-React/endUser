import { createBrowserRouter } from"react-router-dom";
//import BasicLayout from "../layouts/farmers/BasicLayout";
import QNAPage from "../pages/consumer/consumertack/QNAPage";

import ConsumerPage from "../pages/consumer/consumertack/ConsumerPage";
import QNAReadPage from "../pages/consumer/consumertack/QNAReadpage";
import MyPage from "../pages/consumer/consumertack/MyPage";
import QNAModifyPage from "../pages/consumer/consumertack/QNAModifyPage";
import QNARegistPage from "../pages/consumer/consumertack/QNARegistPage";
import FarmerListPage from "../pages/consumer/consumertack/FarmerListPage";

import BasicLayout from "../layouts/farmers/BasicLayout";
import FarmerListReadPage from "../pages/consumer/consumertack/FarmerListReadPage";


// const Loading = <LoadingPage></LoadingPage>

// const Consumer_QNAPage = lazy(() => import("../pages/consumer/QNAPage"))
// const Consumer_QNAReadPage = lazy(() => import("../components/consumer/QNAReadComponent"))
// const Consumer_Mypage = lazy(() => import("../pages/consumer/MyPage"))
// const Consumer_MainPage = lazy(() => import("../pages/consumer/MainPage"))

const router = createBrowserRouter([
    {
        path:"",
        element: <BasicLayout></BasicLayout>
    },
    {
        path:"consumer/qnapage",
        element: <QNAPage></QNAPage>
    }
    ,
    {
        path:"consumer/farmerlistpage",
        element: <FarmerListPage></FarmerListPage>
    }
    ,
    {
        path:"consumer/farmerlistpage/read:bno",
        element: <FarmerListReadPage></FarmerListReadPage>
    }
    ,
    {
        path:"consumer",
        element: <ConsumerPage></ConsumerPage>
    },
    //         {
    //             path:"consumer/qnapage",
    //             element: <QNAPage></QNAPage>
    //         }
    ,
    {
        path:"consumer/qnapage/read/:bno",
        element: <QNAReadPage></QNAReadPage>
    }
    ,
    {
        path:"consumer/qnapage/read/modify/:bno",
        element: <QNAModifyPage></QNAModifyPage>
    }
    ,
    {
        path:"consumer/qnapage/regist",
        element: <QNARegistPage></QNARegistPage>
    }
    ,
    {
        path:"consumer/mypage",
        element: <MyPage></MyPage>
    }
    
    
])

export default router;