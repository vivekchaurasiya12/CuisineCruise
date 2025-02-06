import resList from "../utils/mockdata";
import ResturantCard,{withPromotedResturnat} from "./ResturantCard";
import { useState, useEffect } from "react"; 
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () =>{
       
const [listOfResturant,setListOfResturant] = useState(resList);
const [searchText,setSearchText] = useState("");
//console.log("body rendered");
const [filteredResturant,setfilteredResturant] = useState(resList); // this is used to store the filtered resturant data and it is updated by setfilteredResturant which re render the body and shows only filter cards and if we search again at same time this will search from reslist not updated list

const ResturantCardPromoted = withPromotedResturnat(ResturantCard);
// const allItemCards = resList.map(res => res?.info?.card?.itemCards)  // Extract itemCards arrays from each restaurant object                        
// console.log(allItemCards);
 

// const fetchData = async () => {
//   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

//   const json = await data.json(); 
//   console.log(json)
//   setListOfResturant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
//  };

//  useEffect(() =>{ 
//   fetchData();
//  },[])     

// checking online status

const onlineStatus = useOnlineStatus();
if(!onlineStatus){
  return <h1>Offline : Please check your internet connection</h1>
}
   
    return filteredResturant.length === 0 ? <Shimmer/> : (
          <div className="body ">
            <div className="search filter flex justify-center items-center gap-6 m-4">
  {/* Search Input */}
  <input type="text" placeholder="Search here..."  value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
    className="px-4 py-1.5 w-80 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
  />

  {/* Search Button */}
  <button
    onClick={() => {
      const filteredList = listOfResturant.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setfilteredResturant(filteredList);
      setSearchText("");
    }}
    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 font-serif"
  >
  
    Search
  </button>

  {/* Top Rated Restaurants Button */}
  <button
    className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300 hover:scale-105"
    onClick={() => {
      const filterdList = listOfResturant.filter((res) => res.info.avgRating > 4.5);
      setfilteredResturant(filterdList);
    }}
  >
    Top Rated Restaurants
  </button>
</div>

<div className="resturant-container flex flex-wrap justify-center gap-6 p-6">
  {filteredResturant.map((resturant) => ( 
    resturant.info.promoted ? <ResturantCardPromoted key={resturant.info.id} resData={resturant.info} /> : <ResturantCard key={resturant.info.id} resData={resturant.info} />
   // <ResturantCard key={resturant.info.id} resData={resturant.info} />
  ))}
</div>


          </div>
    )
};
 

export default Body;