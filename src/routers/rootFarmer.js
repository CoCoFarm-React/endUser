import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "../layouts/farmers/BasicLayout";

import FarmerHomePage from "../pages/farmers/FarmerHomePage";
import FarmerDiaryPage from "../pages/farmers/FarmerDiaryPage";
import FarmerQAPage from "../pages/farmers/FarmerQAPage";
import FarmerQAReadPage from "../pages/farmers/FarmerQAReadPage";
import FarmerSubListPage from "../pages/farmers/FarmerSubListPage";


const router2 = createBrowserRouter([
  {
      path:"",
      element: <BasicLayout></BasicLayout>
  },
  {
      path:"/farmer/home",
      element: <FarmerHomePage></FarmerHomePage>
  },
  {
    path:"/farmer/diary",
    element: <FarmerDiaryPage></FarmerDiaryPage>
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
    path:"/farmer/subscriberlist",
    element: <FarmerSubListPage></FarmerSubListPage>
  },
])

export default router2;