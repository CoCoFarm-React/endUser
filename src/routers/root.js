import { createBrowserRouter } from"react-router-dom";

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

import LoginHandleComponent from "../components/member/LoginHandleComponent";
import MemberModifyPage from "../pages/member/MemberModifyPage";

import FarmerListPage from "../pages/consumer/consumertack/FarmerListPage";
import FarmerListReadPage from "../pages/consumer/consumertack/FarmerListReadPage";



// import FarmerListPage from "../pages/farmers/";


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
    }
    ,
    {
        path:"consumer/qnapage/regist",
        element: <QNARegistPage></QNARegistPage>
    }
    ,
    {
        path:"/mypage",
        element: <MyPage></MyPage>
    }
    ,
    // {
    //     path:"/about",
    //     element: <AboutPage></AboutPage>
    // }
    ,
    {
        path:"consumer/mainpage",
        element: <MainPage></MainPage>
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
        path:"/consumer/farmer/list",
        element: <FarmerListPage></FarmerListPage>
      }
      // ,{
      //   path:"/consumer/farmerlistpage",
      //   element: <FarmerListPage></FarmerListPage>
      // },
      ,{
        path:"/consumer/farmerlistpage/read/:mno",
        element:<FarmerListReadPage></FarmerListReadPage>
      },
      // {
      //   path:"/consumer/modify",
      //   element:<ModifyPage></ModifyPage>
      // }

      
    
        
    
])

export default router;