import { createBrowserRouter } from"react-router-dom";
import FarmerSigninPage from "../pages/farmers/FarmerSigninPage";

import ConsumerPage from "../pages/consumer/ConsumerPage";
import SignInPage from "../pages/consumer/SignInPage";
import MyPage from "../pages/consumer/MyPage";
import QNAPage from "../pages/consumer/QNAPage";
import MainPage from "../pages/consumer/MainPage";
import FarmerListPage from "../pages/consumer/FarmerListPage";
import QNAReadComponent from "../components/consumer/QNAReadComponent";
import LoadingPage from "../pages/consumer/LoadingPage";
import { Suspense, lazy } from "react";


const Loading = <LoadingPage></LoadingPage>

const Consumer_QNAPage = lazy(() => import("../pages/consumer/QNAPage"))
const Consumer_QNAReadPage = lazy(() => import("../components/consumer/QNAReadComponent"))
const Consumer_Mypage = lazy(() => import("../pages/consumer/MyPage"))
const Consumer_MainPage = lazy(() => import("../pages/consumer/MainPage"))

const router = createBrowserRouter([
    {
        path:"",
        element: <BasicLayout></BasicLayout>
    },
    {
        path:"farmersignin",
        element: <FarmerSigninPage></FarmerSigninPage>
    }
    ,
    {
        path:"farmerlistpage",
        element: <FarmerListPage></FarmerListPage>
    }
    ,
    {
        path:"consumer",
        element: <Suspense fallback={Loading}><ConsumerPage /></Suspense>,
        children: [
            {
                path:"qnapage",
                element: <Suspense fallback={Loading}><Consumer_QNAPage /></Suspense>
            }
            ,
            {
                path:"qnapage/read/:bno",
                element: <Suspense fallback={Loading}><Consumer_QNAReadPage /></Suspense>
            }
            ,
            {
                path:"mypage",
                element: <Suspense fallback={Loading}><Consumer_Mypage /></Suspense>
            }
            ,
            {
                path:"mainpage",
                element: <Suspense fallback={Loading}><Consumer_MainPage /></Suspense>
            },
        ]
    }
])

export default router;