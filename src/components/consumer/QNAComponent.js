import { useEffect, useState } from "react"
import { getCunsumerList} from "../../api/ConsumerAPI"
import ListPageComponent from "../common/ListPageComponent"


const initState = {
    dtoList:[],
    end:0,
    start:0,
    next:false,
    prev:false,
    pageNums:[],
    page:0,
    size:0,
    requestDTO:null,
    regDate:''
}


const QNAComponent = ({queryObj, movePage, moveRead, moveRegist}) => {

    const [listData, setListData] = useState(initState)


    useEffect(() => {
        getCunsumerList(queryObj).then(data => {
            console.log("----------=====----------")
            console.log(data)
            setListData({...data})
        })
    }, [queryObj])

    return ( 

        <div>
            <table className="w-[1200px] items-center justify-center container">
                <thead>
                    <tr className="border-b-2 text-center h-12 font-serif">
                        <td className="w-1/12">NO.</td>
                        <td className="w-5/12">TITLE</td>
                        <td className="w-1/12">NICKNAME</td>
                        <td className="w-1/12">REGDATE</td>
                                 
                    </tr>
                </thead>

                <tbody>
                    {listData.dtoList.map(({bno,title,nickname,replyCount,regDate,rcnt}) => 
                        <tr 
                        className="border-b-2 h-20 text-center"
                        key={bno}
                        onClick={() => moveRead(bno)}>
                            <td>{bno}</td>
                            <td className="text-left hover:underline hover:cursor-pointer">
                                {title}&nbsp;&nbsp;[{replyCount}]
                            </td>
                            <td>{nickname}</td>
                            <td>{regDate}</td>
                            
                        </tr>
                    )}
                </tbody>
            </table>
            <div>
                <button 
                    className="bg-white-400 border-2 m-2 p-2 text-black font-bold"
                    onClick={moveRegist}
                >
                    글쓰기
                </button>
            </div>
            <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>

        </div>
        
     );

}
 
export default QNAComponent;