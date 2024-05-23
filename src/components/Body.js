import searchImg from "../utils/images/search.png";
import ResCard from "./ResCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    // using React-Hook State Variable
    const [resList, setResList] = useState([]);
    const [tempResList, setTempResList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", {
            headers: {
                "x-cors-api-key": "temp_1d102fa78c1e67ed49ea70a5daebc5ce",
            },
        });
        // this fetch function is provided to us by browsers, which returns a promise, so to resolve a promise, either we will use '.then(), .catch()', or we will use async-await, to resolve the promise.

        const json = await data.json(); // converting our data into JSON
        console.log(json);

        // Optional Chaining - it is a JavaScript opertor which allows you to access nested object properties or call back funcitons without checking if the object or function exists. If the object or function is undefined or NULL, then the expression returns undefined, instead of throwing an error
        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setTempResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // Conditional Rendering - Rendering of Components on the basis of conditions is known as Conditional Rendering
    if (resList.length == 0) {
        return <Shimmer />;
    }
    // if above condition is true, then 'Shimmer' will be rendered else the below component will be rendered. We can use this as a ternary operator also;

    return (
        <div className="body">
            <div className="search-filter">
                <div className="search">
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search Here.....🔎"
                        value={searchText}
                        onChange={(newValue) => {
                            setSearchText(newValue.target.value);
                        }}
                        // here we used 'onChange()' function, because. we have set the 'value' prop of the input to the useState() variable 'searchText', and the value intially is empty, so it will not allow to write anything inside search input, so to update the input value after writing, we use 'onChange' function, which will help in updating the 'searchText' to 'newValue'
                    ></input>
                    <img
                        className="searchImg"
                        src={searchImg}
                        onClick={() => {
                            console.log(searchText);

                            const searchedList = resList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            // we did it to lowercase to make our restaurant name and our searchText case in-sensitive, previously it was case sensitive(first letter should be capital)
                            setTempResList(searchedList);
                        }}
                    ></img>
                </div>

                {/* creating a button, which will filter our resList with only restaurants having rating more that 4.1 */}
                <div className="filter">
                    <div
                        className="filter-btn"
                        onClick={() => {
                            const filtredList = resList.filter((res) => res.info.avgRating >= 4.1);
                            setTempResList(filtredList);
                        }}
                    >
                        Top Rated Restaurant
                    </div>
                </div>
            </div>
            <div className="res-container">
                {tempResList.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        className="card-link"
                        to={"/restaurantmenu/" + restaurant.info.id}
                    >
                        <ResCard resData={restaurant} />
                    </Link>
                    // not using keys(not acceptable) <<< using index number as key <<< use unique 'id' as key (best practice)
                ))}
            </div>
        </div>
    );
};

export default Body;
