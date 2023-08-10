import FooterComponent from "../../components/consumer/FooterComponent";
import SampleLayout from "../../layout/consumer/SampleLayout";

const MyPage = () => {

    return ( 

        <div className="container mx-[auto] w-[1280px] ">
            <SampleLayout></SampleLayout>
            <h2>MY PAGE</h2>
            <h2>구매리스트</h2>
            <h2>장바구니</h2>
            <h2>즐겨찾기</h2>
            <FooterComponent></FooterComponent>
        </div>

     );
     
}
 
export default MyPage;