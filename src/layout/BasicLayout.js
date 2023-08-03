
import BodyNav from "./consumernav/BodyNav";
import SampleNav from "./consumernav/SampleNav";

const BasicLayout = () => {
    return ( 
        <div className="container mx-[auto] w-[1280px]">
            <div>
                <SampleNav></SampleNav>
                <BodyNav></BodyNav>
            </div>
        </div>

        

    );
}
 
export default BasicLayout;