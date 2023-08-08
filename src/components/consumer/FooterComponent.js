//import styles from '../../styles.css';


const FooterComponent = () => {

    return ( 

        <footer className="h-20 w-full mt-auto bg-green-400">
            <div className="flex w-4/5 max-w-screen-lg h-full mx-0 my-auto items-center justify-center">
                <h2 className="font-semibold text-2xl">FOOTER</h2>
                <div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div></div>
                    <span className="p-1 ">상호명 : </span>
                    <span className="p-1 ">대표자 : </span>
                    <span className="p-1 ">사업자번호 : </span>
                    <span className="p-1 ">담당자메일 : </span>
                    <span className="p-1 ">고객센터 : </span>
                    <span className="p-1 ">주소 : </span>
                </div>
            </div>
        </footer>

     );

}
 

export default FooterComponent;