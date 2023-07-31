import BottomSignInComponent from "../../components/common/BottomSignInComponent";
import LeftSignInComponent from "../../components/common/LeftSignInComponent";
import RightSignInComponent from "../../components/common/RightSignInComponent";
import TopSignInComponent from "../../components/common/TopSignInComponent";

const SignInPage = () => {
    return (
        <div>
            <TopSignInComponent></TopSignInComponent>
            <div className="flex">
                <LeftSignInComponent></LeftSignInComponent>
                <RightSignInComponent></RightSignInComponent>
            </div>
            <BottomSignInComponent></BottomSignInComponent>
        </div>
    );
}
 
export default SignInPage;