

const FarmerListComponent = () => {
  return ( 

    <div className="justify-center items-center container mt-3">

      <div className="w-full h-[100px] flex justify-center items-center ">
        <div className="items-center justify-center flex">
          <input className="rounded-sm border-2 p-2"/>          
          <button type="submit" className="border-2 p-2 w-20 hover:bg-black hover:text-white">검색</button>
        </div>
      </div>      
      
      <table className="w-[1200px] items-center justify-center container">

        <tr className="border-b-2 border-gray-300 text-center h-12">
          <td className="w-1/12">No</td>
          <td className="w-8/12">Title</td>
          <td className="w-1/12">Writer</td>
          <td className="w-1/12">Duedate</td>
          <td className="w-1/12">Count</td>          
        </tr>

        <tr className="border-b-2 border-gray-300 text-center h-12">
          <td className="w-1/12">1</td>
          <td className="w-5/12 text-left">Title</td>
          <td className="w-2/12">아이언맨</td>
          <td className="w-2/12">2023.8.3</td>
          <td className="w-2/12">2322</td>          
        </tr>

        <tr className="border-b-2 border-gray-300 text-center h-12">
          <td className="w-1/12">1</td>
          <td className="w-5/12 text-left">Title</td>
          <td className="w-2/12">아이언맨</td>
          <td className="w-2/12">2023.8.3</td>
          <td className="w-2/12">2322</td>          
        </tr>

        <tr className="border-b-2 border-gray-300 text-center h-12">
          <td className="w-1/12">1</td>
          <td className="w-5/12 text-left">Title</td>
          <td className="w-2/12">아이언맨</td>
          <td className="w-2/12">2023.8.3</td>
          <td className="w-2/12">2322</td>          
        </tr>

        <tr className="border-b-2 border-gray-300 text-center h-12">
          <td className="w-1/12">1</td>
          <td className="w-5/12 text-left">Title</td>
          <td className="w-2/12">아이언맨</td>
          <td className="w-2/12">2023.8.3</td>
          <td className="w-2/12">2322</td>          
        </tr>

        <tr className="border-b-2 border-gray-300 text-center h-12">
          <td className="w-1/12">1</td>
          <td className="w-5/12 text-left">Title</td>
          <td className="w-2/12">아이언맨</td>
          <td className="w-2/12">2023.8.3</td>
          <td className="w-2/12">2322</td>          
        </tr>

      </table>

    </div>

   );
}
 
export default FarmerListComponent;