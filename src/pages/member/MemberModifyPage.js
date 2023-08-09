import { Outlet } from "react-router-dom";
import MemberModifyComponent from "../../components/member/MemberModifyComponent";
import BasicLayout from "../../layouts/BasicLayout";

const MemberModifyPage = () => {
    return ( 
        <div>
        <BasicLayout> 
            <div>
                Member Modify Page
                <MemberModifyComponent></MemberModifyComponent>
            </div>
        </BasicLayout>
        </div>
    );
}
 
export default MemberModifyPage;