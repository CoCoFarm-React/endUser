import farmImage01 from "../../public/farmerImage01.jpg"

const FarmerHomeComponent = () => {
  

  
  return ( 

    <div className="flex container h-[200px] mt-3">
        
      <div className=" w-[300px] flex justify-center items-center">
        <img src={farmImage01} alt="farmImage01" 
        className="rounded-[50%] object-cover w-[180px] h-[180px] justify-center flex">

        </img>
      </div>

      <div className="w-full flex">
        <div className="m-3 w-full ">
            <div className="mt-5 ">
              <span className="text-3xl font-semibold">마리오 농장</span>
              <button 
                className="border-gray-400 ml-28 p-1 border-2 rounded-md
                hover:bg-black hover:text-white text-center text-sm">
                프로필수정
              </button>
            </div>
            <div className="mt-2">
              <span className="">@farmer1004</span>
              <span className="ml-5">구독자 1.2만명</span>
              <span className="ml-5">게시글 120개</span>
            </div>
            <div className="mt-3">
              <div>
                안녕하세요 마리오 농장입니다.<br/>
                저희 농장 페이지를 방문해 주셔서 감사합니다.<br/>
                구입문의 farmer1004@gamil.com
                
              </div>
            </div>
        </div>
      </div>

    </div>  

   );
}
 
export default FarmerHomeComponent;