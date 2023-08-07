

const FarmerPageComponent = ({ movePage, start, end, prev, next, pageNums, page }) => {

  const handleClickPage = (pageNum) => {
    movePage(pageNum)
  }


  return (
    
    <div className="flex mb-5 justify-center">
      <ul className="flex">

        {prev ? <li
                className="m-2 p-2 bg-sb-02 border-2  
                hover:underline hover:cursor-pointer rounded-md"
                onClick={() => handleClickPage(start - 1)}        
        
        > PREV </li> : <></>}

        {pageNums.map(num => 
          <li
            className="m-2 p-2 w-9 text-center border-2
                       font-bold hover:underline hover:cursor-pointer rounded-md"
            onClick={() => handleClickPage(num)}
            key={num}
          >
            {page === num ? <span className="underline">{num}</span> : <span>{num}</span>}

          </li>)}

          {next ? <li
            className="m-2 p-2 bg-sb-02 border-2   
            hover:underline hover:cursor-pointer rounded-md"
            onClick={() => handleClickPage(end + 1)}

          > NEXT </li> : <></>}

      </ul>

    </div>

    // <div className="flex mb-5 justify-center">
    //   <div className="border-2 border-gray-300 w-7 text-center p-1 mr-3">1</div>
    //   <div className="border-2 border-gray-300 w-7 text-center p-1 mr-3">2</div>
    //   <div className="border-2 border-gray-300 w-7 text-center p-1 mr-3">3</div>
    //   <div className="border-2 border-gray-300 w-7 text-center p-1 mr-3">4</div>
    //   <div className="border-2 border-gray-300 w-7 text-center p-1 mr-3">5</div>
    //   <div className="border-2 border-gray-300 w-7 text-center p-1 mr-3">6</div>
    //   <div className="border-2 border-gray-300 w-7 text-center p-1 mr-3">7</div>
    //   <div className="border-2 border-gray-300 w-7 text-center p-1 mr-3">8</div>
    //   <div className="border-2 border-gray-300 w-7 text-center p-1 mr-3">9</div>
    //   <div className="border-2 border-gray-300 w-7 text-center p-1 mr-3">10</div>
    //   <div className="border-2 border-gray-300 w-7 text-center p-1 mr-3">〉</div>

    // </div>
    
   );
}
 
export default FarmerPageComponent;