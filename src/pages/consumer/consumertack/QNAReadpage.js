import { useParams } from "react-router-dom"

import QNAReadComponent from "../../../components/consumer/QNAReadComponent"
import FooterComponent from "../../../components/consumer/FooterComponent"
import useQueryObj from "../../../hooks/consumers/useQueryObj"
// import SampleNav from "../../layout/consumernav/SampleNav"
import SampleLayout from "../../../layout/consumer/SampleLayout"


const QNAReadPage = () => {

    const {queryObj, moveDelete, moveList, moveModify} = useQueryObj()
    const {bno} = useParams()

    console.log(bno)
    console.log(queryObj)
    console.log(useQueryObj)
    console.log("==========----------==========")

    return ( 
        
        <div className="container mx-[auto] w-[1280px]">
            <div>
                <SampleLayout></SampleLayout>
            </div>
            <div className="text-xl mt-5">
                Q&A Read Page
            </div>

            <div className="m-auto">
                <QNAReadComponent
                    bno={bno}
                    moveList={moveList}
                    moveModify={moveModify}
                    moveDelete={moveDelete}
                ></QNAReadComponent>
                <FooterComponent></FooterComponent>
            </div>
        </div>

     );

}
 
export default QNAReadPage;