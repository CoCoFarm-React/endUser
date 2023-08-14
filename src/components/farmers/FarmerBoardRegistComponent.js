import { useRef } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCookies } from "../../util/cookieUtil"
import { registerProduct } from "../../api/productAPISong"
import useQueryObj from "../../hooks/farmers/useQueryObj"

const initState = {
	pname: '',
	pdesc: '',
	price: 0,
  procateno: 0,
  mno: 502,
  view: 0
}

const FarmerBoardRegistComponent = () => {

  const fileRef = useRef()    // 참조값 물기
    const [product, setProduct] = useState({...initState})
    const nav = useNavigate()
    
    const cookie = getCookies()
    const {moveHomeList} = useQueryObj()
    

    const handleChange = (e) => {

        product[e.target.name] = e.target.value
        setProduct({ ...product })
	}

    const handleClickSave = (e) => {

        const formData = new FormData()

        formData.append("pname", product.pname)
        formData.append("pdesc", product.pdesc)
        formData.append("price", product.price)
        formData.append("procateno", product.procateno)
        formData.append("mno", 502)
        formData.append("view", product.view)

        console.log(fileRef.current)
        console.log(product)

        const arr = fileRef.current.files

        for(let file of arr) {
            formData.append("files", file)
        }

        console.log(fileRef.current)
        console.log(product)

        registerProduct(formData).then(data => {
        moveHomeList()
        })
        
    }

  const handleClickClear = (e) => {
      
    fileRef.current.value = ''
  }

  return ( 
    <div className="m-2 p-2">
            
            <div className="m-2 p-2 border-2">
                <div className="text-orange-500 font-bold">상품이름</div>
                <input 
                type='text'
                name='pname' 
                value={product.pname}
                onChange={handleChange}
                className="border-2 mt-2 mb-2 h-10 w-full"
                >

                </input>
            </div>

            <div className="m-2 p-2 border-2">
                <div className="text-orange-500 font-bold">상품설명</div>
                <input 
                type='textarea' 
                name='pdesc' 
                value={product.pdesc} 
                onChange={handleChange}
                className="border-2 mt-2 mb-2 h-[20vh] w-full"
                >

                </input>
            </div>

            <div className="m-2 p-2 border-2">
                <div className="text-orange-500 font-bold">상품가격</div>
                <input 
                type='text' 
                name='price' 
                value={product.price} 
                onChange={handleChange}
                className="border-2 mt-2 mb-2 h-10">

                </input>
            </div>

            <div className="m-2 p-2 border-2">
              <div className="text-orange-500 font-bold">카테고리</div>
                <select value={product.procateno}
                        onChange={e => {
                        product.procateno = e.target.value
                        setProduct({...product})
                }}>
                  <option value={''}>---</option>
                  <option value={'1'}>곡류</option>
                  <option value={'2'}>채소</option>
                  <option value={'3'}>과일</option>
                  <option value={'4'}>곡류가공품</option>
                  <option value={'5'}>채소가공품</option>
                  <option value={'6'}>과일가공품</option>
                </select>
            </div>

            <div className="m-2 p-2 border-2">
              <div className="text-orange-500 font-bold">상품사진</div>                 
                <input 
                type='file' 
                ref={fileRef} 
                multiple 
                name='images' 
                onChange={handleChange}></input>
            </div>

            <div className="mt-2">
                <button 
                onClick={handleClickSave}
                className="bg-blue-600 rounded-md w-20 p-2 m-2 text-white"
                >Save
                </button>

                <button 
                onClick={handleClickClear}
                className="bg-orange-500 rounded-md w-auto p-2 m-2 text-white"
                >ClearFiles
                </button>

                <button 
                onClick={() => nav("/farmer/home/")}
                className="bg-gray-600 rounded-md w-20 p-2 m-2 text-white"
                >List
                </button>                
            </div>
        </div>
   );
}
 
export default FarmerBoardRegistComponent;