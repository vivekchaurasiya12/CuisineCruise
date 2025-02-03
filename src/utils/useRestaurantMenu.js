import { useEffect, useState } from "react";

const useRestaurantMenu = () => {
    // State to store the fetched restaurant menu data
    const [resInfo, setResInfo] = useState();

    useEffect(() => {
        // Fetch data when the component using this hook mounts
        fetchData();
    }, []); // Empty dependency array ensures it runs only once

    const fetchData = async () => {
        try {
            // Fetch API URL is missing; replace with actual API endpoint
            const data = await fetch("API_URL_HERE");
            const json = await data.json();
            
           // console.log(json); // Debugging: Log fetched data to check its structure
            setResInfo(json); // Update state with fetched data
        } catch (error) {
            console.error("Error fetching data:", error); // Handle fetch errors
        }
    };

    return resInfo; // Return fetched data so it can be used in a component
};

export default useRestaurantMenu;

/*
📌 Important Notes:
- This is a **custom React Hook** for fetching restaurant menu data.
- `useState` is used to store fetched data.
- `useEffect` ensures data is fetched only when the component mounts.
- The `fetchData` function is asynchronous and needs a valid API URL.
- The hook returns `resInfo`, which can be used in any component.
- Proper error handling (`try...catch`) is added to handle API failures.
*/
