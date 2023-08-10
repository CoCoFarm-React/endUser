// import FarmerListComponent from "../../components/consumer/FarmerListComponent";
import FooterComponent from "../../components/consumer/FooterComponent";
import SampleLayout from "../../layout/consumer/SampleLayout";


const FarmerListPage = () => {

    return ( 

        <div className="container mx-[auto] w-[1280px]">
            <SampleLayout></SampleLayout>
                <h2>FARMER LIST PAGE</h2>
                <h2>농장리스트 쫘르륵</h2>
            
            {/* <FarmerListComponent></FarmerListComponent> */}
            <FooterComponent></FooterComponent>
        </div>

     );
     
}
 
export default FarmerListPage;