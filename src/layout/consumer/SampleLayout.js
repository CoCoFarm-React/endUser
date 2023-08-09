//import styles from "../../styles.css";

import FooterComponent from "../../components/consumer/FooterComponent";
import HeaderComponent from "../../components/consumer/HeaderComponent";


const SampleLayout = () => {

    return ( 
        
        <div className="container mx-[auto] w-[1280px] bg-oy-01">
            <div>
                <HeaderComponent></HeaderComponent>
                <h3 className="h-50">나와라11111</h3>
                <h3 className="h-50">나와라22222</h3>
                <h3 className="h-50">나와라33333</h3>
                <h3 className="h-50">나와라44444</h3>
                <h3 className="h-50">나와라55555</h3>
                
            </div>
        </div>
       
     );

}
 
export default SampleLayout;