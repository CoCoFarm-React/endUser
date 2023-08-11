import { useParams } from "react-router-dom";
import SampleLayout from "../../layout/consumer/SampleLayout";
import QNAModifyComponent from "../../components/consumer/QNAModifyComponent";
import FooterComponent from "../../components/consumer/FooterComponent";
import useQueryObj from "../../hooks/consumers/useQueryObj";

const QNAModifyPage = () => {

    const {queryObj, moveList, moveModify, moveRead} = useQueryObj()
    const { bno } = useParams()
    
    return ( 
        <div className="container mx-[auto] w-[1280px] ">

            <div>
                <SampleLayout></SampleLayout>
            </div>

            <div>
                <QNAModifyComponent bno={bno} moveList={moveList} moveRead={moveRead}></QNAModifyComponent>
            </div>
            <FooterComponent></FooterComponent>
        </div>
    );
}
 
export default QNAModifyPage;