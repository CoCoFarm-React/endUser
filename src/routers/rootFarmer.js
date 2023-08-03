import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "../layouts/farmers/BasicLayout";

import FarmerHomePage from "../pages/farmers/FarmerHomePage";
import FarmerDiaryPage from "../pages/farmers/FarmerDiaryPage";
import FarmerQAPage from "../pages/farmers/FarmerQAPage";


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
  }  
])

export default router2;