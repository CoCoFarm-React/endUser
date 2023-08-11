import { useNavigate } from "react-router-dom";
import SampleLayout from "../../layout/consumer/SampleLayout";
import QNARegistComponent from "../../components/consumer/QNARegistComponent";
import FooterComponent from "../../components/consumer/FooterComponent";

  const QNARegistPage = () => {

    const navigate = useNavigate()

    const moveList = () => {

        navigate("/consumer/qnapage")
    }

    return ( 

        <div className="container mx-[auto] w-[1280px] ">
            <div>
                <SampleLayout></SampleLayout>
            </div>

            <div className="text-2xl m-4">Q&A 등록페이지</div>
                  
            <QNARegistComponent moveList={moveList}></QNARegistComponent>
            <FooterComponent></FooterComponent>
        </div>

    );
}
 
export default QNARegistPage;