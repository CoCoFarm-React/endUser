import FarmerListComponent from "../../components/consumer/FarmerListComponent";
import FooterComponent from "../../components/consumer/FooterComponent";
import SearchComponent from "../../components/consumer/SearchComponent";
import useQueryObj from "../../hooks/consumers/useQueryObj";
import SampleLayout from "../../layout/consumer/SampleLayout";


const FarmerListPage = () => {

    const {queryObj, setSearch, moveRead2} = useQueryObj()
    console.log("queryObj: " + queryObj)

    const movePage = (num) => {
        
        console.log("NUM: " + num)
        console.log(useQueryObj)
        console.log("----------==========----------")
        queryObj.page = num
        setSearch({...queryObj})
    }

    const moveSearch = (type, keyword) => {
    
        queryObj.page = 1
        queryObj.type = type
        queryObj.keyword = keyword
        setSearch({...queryObj})
    }

    return ( 

        <div className="container mx-[auto] w-[1280px] ">
            <SampleLayout></SampleLayout>
            <h2>FARMER LIST PAGE</h2>
            <div>
                <SearchComponent
                moveSearch={moveSearch}
                queryObj={queryObj}>
                </SearchComponent>
            </div>
            <div>
                <FarmerListComponent
                queryObj={queryObj}
                movePage={movePage}
                moveRead2={moveRead2}>
                </FarmerListComponent>
            </div>

            <FooterComponent></FooterComponent>
        </div>

     );
     
}
 
export default FarmerListPage;