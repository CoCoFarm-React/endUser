import { useEffect, useState } from "react";
import { getFarmerList } from "../../api/ConsumerAPI";
import PageComponent from "./PageComponent";
import { getFarmerOne } from "../../api/FarmerAPI";


const initState = {
    dtoList:[],
    end:0,
    start:0,
    next:false,
    prev:false,
    pageNums:[],
    page:0,
    size:0,
    requestDTO:null
}


const ParmerListComponent = ({queryObj, movePage, moveRead2}) => {

    const [listData, setListData] = useState(initState)

    useEffect(() => {

      getFarmerOne(queryObj).then(data => {
            console.log("====================")
            console.log(data)
            setListData({...data})
        })

    }, [queryObj])

    return ( 
        <div>
            <div className="m-auto text-center">
                FARMERLIST COMPONENT
                
                <table className="w-[1200px] items-center justify-center container">
                    <thead>
                        <tr className="h-12 bg-blue-300">
                            <th className="w-1/12">NO.</th>
                            <th className="w-5/12">TITLE</th>
                            <th className="w-1/12">WRITER</th>
                            <th className="w-1/12">NICKNAME</th>
                            <th className="w-1/12">REGDATE</th>
                            <th className="w-1/12">ReplyCnt</th>   
                        </tr>
                    </thead>

                    <tbody>
                        {listData.dtoList.map(({bno,title,writer,nickname,replyCount,regDate,rcnt}) => 
                            <tr 
                            className="border-b-2 h-20 text-center"
                            key={bno}
                            onClick={() => moveRead2(bno)}>
                                <td>{bno}</td>
                                <td className="text-left hover:underline hover:cursor-pointer">
                                    {title}&nbsp;&nbsp;[{replyCount}]
                                </td>
                                <td>{writer}</td>
                                <td>{nickname}</td>
                                <td>{regDate}</td>
                                <td>{rcnt}</td>
                            </tr>
                        )}
                    </tbody>             
                </table>

            </div>
            <PageComponent movePage={movePage} {...listData}></PageComponent>
        </div>
    );
}
 
export default ParmerListComponent;