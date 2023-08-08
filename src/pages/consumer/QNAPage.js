import FooterComponent from "../../components/consumer/FooterComponent";
import QNAComponent from "../../components/consumer/QNAComponent";
import useQueryObj from "../../hooks/consumers/useQueryObj";
import SampleLayout from "../../layout/consumer/SampleLayout";
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
            <SampleLayout>
                <h2>Q&A PAGE</h2>
            </SampleLayout>
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