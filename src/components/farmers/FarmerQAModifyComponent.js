import { useEffect, useState } from "react"
import { deleteBoard, getOne, putBoard } from "../../api/FarmerAPI"

const initState = {
  bno:0,
  title:'',
  content:'',
  writer:'',
  reg:'',
  modDate:'',
  nickname:'',
  email:''
  
}

const FarmerQAModifyComponent = ({bno, moveList, moveRead}) => {  

  const [board, setBoard] = useState(initState)
  // const fileRef = useRef()

  useEffect(() => {

    getOne(bno).then(data => {
      setBoard(data)

      console.log("ReadCom data:"+data)
    })
  },[bno])

    const handleClickDelete = () => {
        deleteBoard(bno).then(data => {
            alert("게시글이 삭제되었습니다.")

            
        })
    }

    const handleChange = (e) => {
        board[e.target.name] = e.target.value

        setBoard({...board})
    }

    const handleClickModify = () => {

        const formData = new FormData();

        formData.append("bno", board.bno)
        formData.append("nickname", board.nickname)
        formData.append("email", board.email)
        formData.append("title", board.title)
        formData.append("title", board.reg)
        formData.append("modDate", board.modDate)
        formData.append("content", board.content)

        // if(product.images){
        //     for (let pi of product.images) {
        //         formData.append("images", pi)
        //     }
        // }

        // const arr = fileRef.current.files

        // for(let file of arr){
        //     formData.append("files", file) // files : 컨트롤러에서 받을 때 이름
        // }

        putBoard(formData).then(data => {
            alert("수정되었습니다!")
            moveRead(bno)
        })
    }

    // // 파일 삭제버튼, 필터링 기능
    // const handleClickDelImg = (fname) => {
              
    //     const newArr = product.images.filter(ele => ele !== fname)

    //     product.images = newArr

    //     setProduct({...product})
    // }

  return ( 

    <div className="items-center justify-center container flex">

      <table className="w-[1200px] items-center justify-center mt-5">
        <thead className="">
          <tr className="bg-gray-200">
              <td className="border-2 font-medium w-32 text-center ">No</td>
              <td className="border-2">{board.bno}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium text-center">NickName</td>
              <td className="border-2">{board.nickname}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium text-center">Email</td>
              <td className="border-2">{board.email}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium text-center">RegDate</td>
              <td className="border-2">{board.reg}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium text-center">ModDate</td>
              <td className="border-2">{board.modDate}</td>
          </tr>

          <tr >
              <td className="border-2 font-medium h-10 text-center">Title</td>
              <td className="border-2">
                <input
                    className="border-2"
                    type="text" 
                    name="pdesc" 
                    value={board.title}
                    onChange={handleChange}
                ></input>
              </td>
          </tr>
          
          <tr >
              <td className="border-2 font-medium h-80 text-center">Content</td>
              <td className="border-2">
                <input
                    className="border-2"
                    type="text" 
                    name="pdesc" 
                    value={board.content}
                    onChange={handleChange}
                ></input>
              </td>             
          </tr>

            
        </thead>

        <div className="flex justify-start">
          <button 
            onClick={handleClickModify}
            className="bg-blue-600 rounded-md w-20 p-2 m-2 text-white"
            >Modify
          </button>

          <button 
            onClick={handleClickDelete} 
            className="bg-red-600 rounded-md w-20 p-2 m-2 text-white"
            >Delete
          </button>

          <button 
            onClick={moveList}
            className="bg-green-600 rounded-md w-20 p-2 m-2 ml-20 text-white"
            >List
          </button>


        </div>
    
      </table>
      
      

      
    </div>
   );
}
 
export default FarmerQAModifyComponent;