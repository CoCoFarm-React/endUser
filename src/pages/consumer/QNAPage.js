import FooterComponent from "../../components/consumer/FooterComponent";
import QNAComponent from "../../components/consumer/QNAComponent";
import useQueryObj from "../../hooks/consumer/useQueryObj";
import SampleLayout from "../../layout/consumer/SampleLayout";
import SampleNav from "../../layout/consumernav/SampleNav";
//import PageComponent from "../../components/consumer/PageComponent";

const QNAPage = () => {

    const {queryObj, setSearch, moveRead} = useQueryObj()
    console.log("queryObj: " + queryObj)

    const movePage = (bno) => {
        
        console.log(bno)
        console.log(useQueryObj)
        console.log("----------==========----------")
        queryObj.page = bno
        setSearch({...queryObj})
    }


    return ( 

        <div className="container mx-[auto] w-[1280px] ">
            <SampleNav>
                
            </SampleNav>
            <div>
                <QNAComponent
                queryObj={queryObj}
                movePage={movePage}
                moveRead={moveRead}>
                </QNAComponent>
            </div>

            <FooterComponent></FooterComponent>
        </div>

     );

}
 
export default QNAPage;