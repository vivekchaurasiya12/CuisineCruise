import resList from "../utils/mockdata";
import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react"; 
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () =>{
       
const [listOfResturant,setListOfResturant] = useState(resList);
const [searchText,setSearchText] = useState("");
//console.log("body rendered");
const [filteredResturant,setfilteredResturant] = useState(resList); // this is used to store the filtered resturant data and it is updated by setfilteredResturant which re render the body and shows only filter cards and if we search again at same time this will search from reslist not updated list

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
          <div className="body">
            <div className="search filter">
             <input type="text" placeholder="Search here" value={searchText} onChange={(e) => {
              setSearchText(e.target.value) 
             }}></input> 
             <button onClick={() => {
// showing updated cards and how to do : simple just update the listofresturant which rerender the component 
//here reslist is used because when we search for 2nd time then it will search from all data not on updated data if we write listofresturnat 
            const filteredList = listOfResturant.filter((res) =>res.info.name.toLowerCase().includes(searchText.toLowerCase()))  ;
            setfilteredResturant(filteredList);  setSearchText("");
            
  // we created a copy of listOfResturant which is filteredResturant which also stores reslist and filteredList stores value for filter resturant which user searches and it is updated by setfilteredResturant which re render the body and shows only filter cards and if we search again at same time this will search from reslist not updated list
             }} >Search</button>
            
            <button className="filter-btn" onClick={()=>{
              const filterdList = listOfResturant.filter((res) => res.info.avgRating > 4.5);
              setfilteredResturant(filterdList);
            }}>Top Rated Resturant</button>

            </div>
            <div className="resturant-container">
          {filteredResturant.map((resturant) =>(
             <ResturantCard key={resturant.info.id} resData = {resturant.info}/>
           ))}       
            </div>
          </div>
    )
};
 

export default Body;