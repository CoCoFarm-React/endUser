import ConsumerQAComponent from "../../components/consumer/ConsumerQAComponent"




const QAPage = () => {

    const {queryObj, setSearch, moveRead} = useQueryObj()

    console.log("queryObj: " + queryObj)
  
    //페이지 번호 받는
    const movePage = (num) => {
      
      console.log("DiaryPage_Num: " + num)
      queryObj.page = num
      setSearch({...queryObj})
    }
  
    const moveSearch = (type, keyword) => {
      
      queryObj.page = 1
      queryObj.type = type
      queryObj.keyword = keyword
  
      setSearch({...queryObj})
    }
  
    const chgSize = (size) => {
  
      queryObj.size = size
  
      setSearch({...queryObj})
  
    }



    return ( 
        <div className="container mx-[auto] w-[1280px] ">
      
        <div>
          <TopNav></TopNav>
        </div>
        
        <div>
          <ConsumerSearchComponent
          moveSearch={moveSearch}
          queryObj={queryObj}
          chgSize={chgSize}
          ></ConsumerSearchComponent>
        </div>
  
        <div>
          <ConsumerQAComponent
          queryObj={queryObj}
          movePage={movePage}
          moveRead={moveRead}
          ></ConsumerQAComponent>
        </div>
  
  
      </div>
  
     );

}
 
export default QAPage;