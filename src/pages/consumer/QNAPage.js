import FooterComponent from "../../components/consumer/FooterComponent";
import QNAComponent from "../../components/consumer/QNAComponent";
import useQueryObj from "../../hooks/consumers/useQueryObj";
import SampleLayout from "../../layout/consumer/SampleLayout";
import SampleNav from "../../layout/consumernav/SampleNav";


const QNAPage = () => {

    const {queryObj, setSearch, moveRead, moveRegist} = useQueryObj()
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
            <SampleNav>
                <h2>Q&A PAGE</h2>
            </SampleNav>
            <div>
                <QNAComponent
                queryObj={queryObj}
                movePage={movePage}
                moveRead={moveRead}
                moveRegist={moveRegist}>
                </QNAComponent>
            </div>

            <FooterComponent></FooterComponent>
        </div>

     );

}
 
export default QNAPage;