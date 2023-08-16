import FooterComponent from "../../../components/consumer/FooterComponent";
import ModifyComponent from "../../../components/consumer/ModifyComponent";
import SampleNav from "../../../layout/consumernav/SampleNav";

const ModifyPage = () => {
  return ( 
    <div>
      <div className="container mx-[auto] w-[1280px] ">
            <SampleNav></SampleNav>
            <h2 className="font-size-16px font-serif text-center p-12">MODIFY</h2>
            <div>
                <ModifyComponent></ModifyComponent>
            </div>
            
            
            <FooterComponent></FooterComponent>
        </div>

    </div>
  );
}
 
export default ModifyPage;