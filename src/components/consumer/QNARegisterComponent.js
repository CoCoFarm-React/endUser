import { useRef, useState } from "react";
import { postConsumer } from "../../api/ConsumerAPI";

const initState ={
  title: "",
  content: "",
  images: []
}

const QNARegisterComponent = ({moveList}) => {

  //react에서 id값 대신 사용 가능한 속성
  const fileRef = useRef()

  const [board, setBoard] = useState({...initState})

  const handleChange = (e) => {
    board[e.target.name] = e.target.value
    setBoard({...board})
  }

  const handleClickSave = (e) => {

    const formdata = new FormData();

    formdata.append("title", board.title)
    formdata.append("content", board.content)
    formdata.append("cateno", 1)

    formdata.append("mno" , )

    formdata.append("images", board.images)
    console.dir(fileRef.current)

    const arr = fileRef.current.files

    for (let file of arr) {
      formdata.append("files", file)
    }

    postConsumer(formdata).then(data => {
      const bno = data.result
      alert(`${bno}번 상품이 등록 되었습니다.`)
      moveList()
    })

    setBoard({...initState})
  }
  /*
  멀티파트폼데이터를 사용하면 데이터를 보내는 방식이 완전 달라짐
  */

  //첨부파일은 상태로 처리하는게 아니라 ref를 이용해서 처리함
  const handleClickClear = (e) => {
    fileRef.current.value = ""
  }

  return (
    <div>
      <ul>
        <li className="py-5 border-b">
          <div className="my-5 text-2xl font-medium">
            Name
          </div>
          <input
            type="text" name="title" value={board.title} onChange={handleChange}
            className="w-full h-12 px-3 border"
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
          <input
            type="file" ref={fileRef} name="images" multiple onChange={handleChange}
            className="w-full h-12 px-3 py-2 border"
          />
        </li>
      </ul>
      <div className="flex justify-end">
        <button
          className="h-10 px-3 text-white bg-[#063] rounded mt-3 mr-3"
          onClick={handleClickSave}
        >
          SAVE
        </button>
        <button
          className="h-10 px-3 text-white bg-[#777] rounded mt-3"
          onClick={handleClickClear}
        >
          CLEAR FILES
        </button>
      </div>
    </div>
  );
}

export default QNARegisterComponent;