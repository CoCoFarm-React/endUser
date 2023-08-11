import { createBrowserRouter } from"react-router-dom";

import BasicLayout from "../layout/BasicLayout";

import BoardPage from "../pages/consumer/BoardPage";
import QAPage from "../pages/consumer/QAPage";
import MemberModifyPage from "../pages/member/MemberModifyPage";

const router3 = createBrowserRouter([
    {
        path:"",
        element: <BasicLayout></BasicLayout>
    },
    {
        path:"/consumer/list",
        element: <BoardPage></BoardPage>
    },
    {
        path:"/consumer/qa",
        element: <QAPage></QAPage>
    },

])

export default router3;