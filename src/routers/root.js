import { createBrowserRouter } from"react-router-dom";
//import BasicLayout from "../layouts/farmers/BasicLayout";
import QNAPage from "../pages/consumer/QNAPage";
import { Suspense, lazy } from "react";
import ConsumerPage from "../pages/consumer/ConsumerPage";
import QNAReadPage from "../pages/consumer/QNAReadpage";
import MyPage from "../pages/consumer/MyPage";
import MainPage from "../pages/consumer/MainPage";
import QNAModifyPage from "../pages/consumer/QNAModifyPage";
import QNARegistPage from "../pages/consumer/QNARegistPage";
import FarmerListPage from "../pages/consumer/FarmerListPage";
import SampleLayout from "../layout/consumer/SampleLayout";
import BasicLayout from "../layouts/farmers/BasicLayout";
import FarmerListReadPage from "../pages/consumer/FarmerListReadPage";


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
    ,
    {
        path:"consumer/mainpage",
        element: <MainPage></MainPage>
    }
        
    
])

export default router;