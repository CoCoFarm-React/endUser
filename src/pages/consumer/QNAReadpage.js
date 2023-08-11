import { useParams } from "react-router-dom"
import UseQueryObj from "../../hooks/consumers/useQueryObj"
import SampleLayout from "../../layout/consumer/SampleLayout"
import QNAReadComponent from "../../components/consumer/QNAReadComponent"
import FooterComponent from "../../components/consumer/FooterComponent"

const QNAReadPage = () => {

    const {queryObj, moveList} = UseQueryObj()
    
    const {bno} = useParams()

    console.log(bno)
    console.log(queryObj)
    console.log(UseQueryObj)
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
                <QNAReadComponent bno={bno}></QNAReadComponent>
                {/* <button 
                className="border-2 w-20 m-auto text-center rounded-md" 
                onClick={() => moveList()}>
                    List
                </button> */}
            </div>
            {/* <FooterComponent></FooterComponent> */}
        </div>

     );

}
 
export default QNAReadPage;