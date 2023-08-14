import { useParams } from "react-router-dom"
import useQueryObj from "../../../hooks/consumers/useQueryObj"
import FarmerListReadComponent from "../../../components/consumer/FarmerListReadComponent"
import SampleNav from "../../../layout/consumernav/SampleNav"
import FooterComponent from "../../../components/consumer/FooterComponent"

const FarmerListReadPage = () => {

    const {queryObj, moveList2} = useQueryObj()
      
    const {mno} = useParams()

    console.log(mno)
    console.log(queryObj)
    console.log(useQueryObj)
    console.log("==========----------==========")

    return ( 

        <div className="container mx-[auto] w-[1280px]">
            <div>
                <SampleNav></SampleNav>
            </div>
            <div className="font-size-16px font-serif text-center mt-5 mb-9">
                FARMER
            </div>
            
            <div className="m-auto">
                <FarmerListReadComponent 
                    mno={mno}
                    moveList2={moveList2}
                    ></FarmerListReadComponent>
            </div>

            <FooterComponent></FooterComponent>
        </div>
    );
}
 
export default FarmerListReadPage;