import { Link } from "react-router-dom";

const FarmerSiginComponent = () => {


return (  

    <div className="border-2 bg-gray-200 rounded-md ml-auto mr-auto mt-14 w-[600px] h-[450px]">

      <div className="text-2xl text-center text-green-500 m-5">생산자 로그인</div>

      <div className="m-2">
        <label className="text-gray-700 font-bold">Email</label>
        <div>
          <input type="text" name="email" 
          onChange={()=>{}}
          className="border-2 m-2 p-3 rounded-md w-[560px]">            
          </input>
        </div>
        
      </div>

      <div className="m-2">
        <label className="text-gray-700 font-bold">Password</label>
        <div>
          <input type="password" name="pw" 
          onChange={()=>{}}
          className="border-2 m-2 p-3 rounded-md w-[560px]">            
          </input>
        </div>        
      </div>

      <div className="h-[20vh] text-center">

      
        
          <button 
            className="bg-blue-400 font-semibold text-center mt-5 h-14 w-4/6 rounded-md" 
            onClick={() => {window.location.href = "http://localhost:3000/farmer/home"}}
            >
            LOGIN
          </button>   
        

      </div>



    </div>
        
        
        
        
        

    
);
}

export default FarmerSiginComponent;