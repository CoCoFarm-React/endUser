import FooterComponent from "../../components/consumer/FooterComponent";
import SampleLayout from "../../layout/consumer/SampleLayout";

const MainPage = () => {

    return ( 

        <div className="container mx-[auto] w-[1280px]">
            <SampleLayout></SampleLayout>
            <h2>MAIN PAGE</h2>
            <FooterComponent></FooterComponent>
        </div>

     );
     
}
 
export default MainPage;