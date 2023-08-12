import { useParams } from "react-router-dom"
import useQueryObj from "../../../hooks/consumers/useQueryObj"
import FarmerListReadComponent from "../../../components/consumer/FarmerListReadComponent"
import SampleLayout from "../../../layout/consumer/SampleLayout"

const FarmerListReadPage = () => {

    const {queryObj, moveList} = useQueryObj()
      
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
                FARMER LIST READ PAGE
            </div>
            
            <div className="m-auto">
                <FarmerListReadComponent bno={bno}></FarmerListReadComponent>
            </div>
        </div>
    );
}
 
export default FarmerListReadPage;