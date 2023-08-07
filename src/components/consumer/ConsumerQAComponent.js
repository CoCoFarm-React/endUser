
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


const ConsumerQAComponent = ({queryObj, movePage, moveRead}) => {

    const [listData, setListData] = useState(initState)

    useEffect(() => {

        getList(queryObj).then(data => {
          console.log("ConsumerListComponent: " + data)
          setListData(data)
        })
      },[queryObj])



    return ( 
        
        <div className="justify-center items-center container mt-3">

        {/* <div className="w-full h-[100px] flex justify-center items-center ">
          <div className="items-center justify-center flex">
            <input className="rounded-sm border-2 p-2"/>          
            <button type="submit" className="border-2 p-2 w-20 hover:bg-black hover:text-white">검색</button>
          </div>
        </div>       */}
        
        <table className="w-[1200px] items-center justify-center container">
  
          <thead>
            <tr className="border-b-2 border-gray-300 text-center h-12">
              <td className="w-1/12">No</td>
              <td className="w-7/12">Title</td>
              <td className="w-1/12">Nickname</td>
              <td className="w-2/12">Duedate</td>
              <td className="w-1/12">ReplyCnt</td>          
            </tr>
          </thead>
  
          <tbody>
            {listData.dtoList.map( ({bno,title,writer,regDate,replyCount,nickname,rcnt}) => 
              <tr className="border-b-2 border-gray-300 text-center h-12"
                  key={bno}
                  onClick={() => moveRead(bno)}
              >
                <td>{bno}</td>
                <td className="text-left hover:underline hover:cursor-pointer">{title}</td>
                <td>{nickname}</td>
                <td>{regDate}</td>
                <td>{rcnt}</td>
              </tr>
            
            )}
          </tbody>
        </table>
  
        <ConsumerPageComponent movePage={movePage}{...listData}></ConsumerPageComponent>
  
      </div>
  
    );
    
}
 
export default ConsumerQAComponent;