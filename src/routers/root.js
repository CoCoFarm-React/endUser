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


import FarmerSignUpComponent from "../components/member/FarmerSignUpComponent";



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
    },
    {
        path:"consumer/mainpage",
        element: <MainPage></MainPage>
    },
    {
        path:"",
        element: <BasicLayout></BasicLayout>
      },
      {
        path:"/farmer/home",
        element: <FarmerHomePage></FarmerHomePage>
      },
      {
        path:"/farmer/home/read/:pno",
        element: <FarmerHomeReadPage></FarmerHomeReadPage>
      },
      {
        path:"/farmer/diary",
        element: <FarmerDiaryPage></FarmerDiaryPage>
      },
      {
        path:"/farmer/diary/read/:bno",
        element: <FarmerDiaryReadPage></FarmerDiaryReadPage>
      },
      {
        path:"/farmer/qa",
        element: <FarmerQAPage></FarmerQAPage>
      },
      {
        path:"/farmer/qa/read/:bno",
        element: <FarmerQAReadPage></FarmerQAReadPage>
      },
      {
        path:"/farmer/qa/regist",
        element: <FarmerQARegistPage></FarmerQARegistPage>
      },
      {
        path:"/farmer/qa/modify/:bno",
        element: <FarmerQAModifyPage></FarmerQAModifyPage>
      },      
      {
        path:"/farmer/subscriberlist",
        element: <FarmerSubListPage></FarmerSubListPage>
      },
      {
        path:"/farmer/subscriberlist/read/:mno",
        element: <FarmerSubReadPage></FarmerSubReadPage>
      },
      {
        path:"/farmer/signin",
        element: <FarmerSigninPage></FarmerSigninPage>
      },
      {
        path:"/member/loginhandler",
        element: <LoginHandleComponent></LoginHandleComponent>
      },
      {
        path:"/member/modify",
        element: <MemberModifyPage></MemberModifyPage>
      } 
    
      //차은우 추가 컨슈머로 이동시켜야함
      ,{
        path:"/consumer/list",
        element: <BoardPage></BoardPage>
      }
      ,{
        path:"/member/singup",
        element: <FarmerSignUpComponent></FarmerSignUpComponent>
      }
    
      
    
        
    
])

export default router;