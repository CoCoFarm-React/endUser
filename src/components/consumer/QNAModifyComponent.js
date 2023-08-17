import { useEffect, useRef, useState } from "react";


const initState = {
  bno:0,
  title:'',
  content:'',
  nickname:'',
  regDate:'',
  modDate:'',
  images: []
}

const QNAModifyComponent = ({bno, moveList, moveRead}) => {

  const fileRef = useRef()
  
  const [board, setBoard] = useState(initState)

  const handleChange = (e) => {
    board[e.target.name] = e.target.value
    setBoard({...board})
  }

  // useEffect(() => {

  //   getCunsumerOne(bno).then(data => {
  //     setBoard(data)
  //   })

  // }, [bno])

  // const handleClickDelete = () => {
  //   deleteCunsumer(bno).then(data => {
  //     alert("상품이 삭제 되었습니다.")
  //     moveList()
  //   })
  // }

  const handleClickModify = () => {
    const formdata = new FormData();

    formdata.append("bno", board.bno)
    formdata.append("title", board.title)
    formdata.append("content", board.content)
    
    if(board.images){
      for (let pi of board.images){
        formdata.append("images", pi)
      }
    }

    const arr = fileRef.current.files

    for (let file of arr) {
      formdata.append("files", file)
    }

    // putConsumer(formdata).then(data => {
    //   alert("수정 되었습니다.")
    //   moveRead(bno)
    // }).catch(e => {
    //   alert("실패")
    // })
  }

  const handleClickDeleteImg = (fname) => {

    //파라미터로 받은 파일명과 다른것만 추출
    //filter로 다른 이미지 명만 배열로 나옴
    const newArr = board.images.filter(ele => ele !== fname)

    board.images = newArr

    setBoard({...board})
  }

  return (
    <div>
      <ul>
        <li className="py-5 border-b">
          <div className="my-5 text-2xl font-medium">
            Title
          </div>
          <input
            className="w-full h-12 px-3 border"
            type="text"
            name="title"
            value={board.title}
            onChange={handleChange}
          />
        </li>
        <li className="py-5 border-b">
          <div className="my-5 text-2xl font-medium">
            Content
          </div>
          <textarea
            name="content"
            cols={4}
            value={board.content}
            onChange={handleChange}
            className="w-full p-3 border resize-none"
          >
            {board.content}
          </textarea>
        </li>
        <li className="py-5 border-b">
          <div className="my-5 text-2xl font-medium">
            File
          </div>
          <input type="file" ref={fileRef} name="images" multiple/>
        </li>
      </ul>
      <div className="mt-5 p-5 border">
        <ul className="flex">
          {board.images && board.images.map( (fname, idx) => 
            <li
              key={idx}
              className="relative px-3 first:pl-0"
            >
              <img className="inline-block" src={`http://localhost/s_${fname}`}/>
              <button
                className="w-8 h-8 absolute right-[-3px] top-[-10px] bg-[#aaa] rounded-full text-white"
                onClick={() => handleClickDeleteImg(fname)}
              >
                X
              </button>
            </li>
          )}
        </ul>
      </div>
      <div className="flex justify-end">
        <button
          className="h-10 px-3 text-white bg-[#063] rounded mt-3 mr-3"
          onClick={handleClickModify}
        >
          Modify
        </button>
        <button
          className="h-10 px-3 text-[#1e3932] border-2 border-[#1e3932] bg-white rounded mt-3 mr-3"
          //onClick={handleClickDelete}
        >
          Delete
        </button>
        <button
          className="h-10 px-3 text-white bg-[#777] rounded mt-3"
          onClick={moveList}
        >
          List
        </button>
      </div>
    </div>
  );
}

export default QNAModifyComponent;