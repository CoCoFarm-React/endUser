

const FarmerBoardComponent = () => {


  const farmers = [
    {
      name: "게시글1",
      farmName: "이 게시글의 설명은 이곳에 입력됩니다",
      image: "https://images.pexels.com/photos/73640/pexels-photo-73640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      reviews: 12,
      rating: 4.5,
    },
    {
      name: "게시글2",
      farmName: "이 게시글의 설명은 이곳에 입력됩니다",
      image: "https://images.pexels.com/photos/2694393/pexels-photo-2694393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      reviews: 12,
      rating: 4.5,
    },
    {
      name: "게시글3",
      farmName: "이 게시글의 설명은 이곳에 입력됩니다",
      image: "https://images.pexels.com/photos/17406430/pexels-photo-17406430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      reviews: 12,
      rating: 4.5,
    },
    {
      name: "게시글4",
      farmName: "이 게시글의 설명은 이곳에 입력됩니다",
      image: "https://images.pexels.com/photos/73640/pexels-photo-73640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      reviews: 12,
      rating: 4.5,
    },
    {
      name: "게시글5",
      farmName: "이 게시글의 설명은 이곳에 입력됩니다",
      image: "https://images.pexels.com/photos/73640/pexels-photo-73640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      reviews: 12,
      rating: 4.5,
    },
    {
      name: "게시글6",
      farmName: "이 게시글의 설명은 이곳에 입력됩니다",
      image: "https://images.pexels.com/photos/2694393/pexels-photo-2694393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      reviews: 12,
      rating: 4.5,
    },
    {
      name: "게시글7",
      farmName: "이 게시글의 설명은 이곳에 입력됩니다",
      image: "https://images.pexels.com/photos/2694393/pexels-photo-2694393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      reviews: 12,
      rating: 4.5,
    },
    {
      name: "게시글8",
      farmName: "이 게시글의 설명은 이곳에 입력됩니다",
      image: "https://images.pexels.com/photos/17406430/pexels-photo-17406430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      reviews: 12,
      rating: 4.5,
    },
    {
      name: "게시글9",
      farmName: "이 게시글의 설명은 이곳에 입력됩니다",
      image: "https://images.pexels.com/photos/17406430/pexels-photo-17406430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      reviews: 12,
      rating: 4.5,
    },
    {
      name: "게시글10",
      farmName: "이 게시글의 설명은 이곳에 입력됩니다",
      image: "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MjdfMjU3/MDAxNTg3OTU0Mzk2NDIx.19AzVkM9-bWazLwBw2nON1C0A-NjHdvo2P1HVyu9Zm8g.bFBOOQssIda5snENXIq3aoDA3ijxt3kUcGW7XvvTBcEg.JPEG.shrinkles/2020_04_%EC%A7%81%EC%97%85_01_023_%EB%86%8D%EB%B6%801.jpg?type=w800",
      reviews: 12,
      rating: 4.5,
    }
    

  ];

  return (

    <div className="flex container h-[1000px] mt-3 ">

      <ul className="flex flex-wrap container justify-center mt-2 h-[500px] ">

        
          {farmers.map((farmer, index) => (
            <li className="w-1/6 h-[220px] bg-white m-2 p-2 rounded-md border-2 
            border-gray-400 items-center justify-center flex"            
            key={index}>
              
              <div className="w-36 items-center justify-center">
                {/* <div className="text-red-500 font-extrabold">No. {index + 1}</div> */}
                
                <div className="flex items-center justify-center hover:cursor-pointer ">
                  <img src={farmer.image} alt={farmer.name} className="w-32 h-28"></img>
                </div>

                <div className="text-center text-gray-700 font-extrabold mt-3">
                  {/* <div className="font-bold text-xl hover:cursor-pointer">{farmer.name}</div> */}
                  <div className="text-red-500">{farmer.farmName}</div>
                  <div>리뷰 {farmer.reviews} 평점 {farmer.rating}</div>
                </div>

              </div>


            </li>

          ))}
        

      </ul>

    </div>

  );
}

export default FarmerBoardComponent;