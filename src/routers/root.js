import { createBrowserRouter } from"react-router-dom";
//import BasicLayout from "../layouts/farmers/BasicLayout";
import QNAPage from "../pages/consumer/consumertack/QNAPage";

import ConsumerPage from "../pages/consumer/consumertack/ConsumerPage";
import QNAReadPage from "../pages/consumer/consumertack/QNAReadpage";
import MyPage from "../pages/consumer/consumertack/MyPage";

import BasicLayout from "../layouts/farmers/BasicLayout";

import MainPage from "../pages/consumer/consumertack/MyPage";

import FarmerHomePage from "../pages/farmers/FarmerHomePage";
import FarmerDiaryPage from "../pages/farmers/FarmerDiaryPage";
import FarmerQAPage from "../pages/farmers/FarmerQAPage";

import FarmerQAReadPage from "../pages/farmers/FarmerQAReadPage";
import FarmerSubListPage from "../pages/farmers/FarmerSubListPage";
import FarmerSubReadPage from "../pages/farmers/FarmerSubReadPage";
import FarmerQAModifyPage from "../pages/farmers/FarmerQAModifyPage";

import FarmerDiaryReadPage from "../pages/farmers/FarmerDiaryReadPage";
import FarmerSigninPage from "../pages/farmers/FarmerSigninPage";

import FarmerQARegistPage from "../pages/farmers/FarmerQARegistPage";
import FarmerHomeReadPage from "../pages/farmers/FarmerHomeReadPage";

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
        path:"consumer",
        element: <ConsumerPage></ConsumerPage>
    },
    {
        path:"consumer/qnapage/read/:bno",
        element: <QNAReadPage></QNAReadPage>
    }
    ,
    {
        path:"consumer/qnapage/read/modify/:bno",
        element: <QNAModifyPage></QNAModifyPage>
    },
    {
        path:"consumer/qnapage/regist",
        element: <QNARegistPage></QNARegistPage>
    },
    {
        path:"consumer/mypage",
        element: <MyPage></MyPage>
    }
    
    
    
        
    
])

export default router;