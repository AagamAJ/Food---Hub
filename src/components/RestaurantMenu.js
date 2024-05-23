import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const { resId } = useParams();
    console.log(resId);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    if (resInfo == null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
    console.log(cards);

    const clickFunc = (event) => {
        const titleHead = event.currentTarget;
        const icon = titleHead.querySelector(".icon");
        const content = titleHead.nextElementSibling;

        /*
        if (icon.classList.contains("active")) {
            icon.classList.remove("active");
            content.classList.remove("open");
            // content.style.maxHeight = null;
        } else {
            icon.classList.add("active");
            content.classList.add("open");
            // content.style.maxHeight = content.scrollHeight + "px";
        }
        */

        icon.classList.toggle("active");
        content.classList.toggle("open");
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
    };

    return (
        <div className="menu">
            <div className="res-name-line">
                Welcome To <p className="res-name">{name}</p>
            </div>
            <div className="res-cuisines">
                {cuisines.join(", ")} - <p className="cuisines-price">{costForTwoMessage}</p>
            </div>
            <h1 className="res-menu">Menu Offered -</h1>

            <ul className="menu-cont">
                {cards.map((tit, index) => (
                    <>
                        {/* we have used empty tag here, and not a <div> tag, because, we are getting some empty data from our API, which we ignore later using ternary operator, but that leaves an empty div tag in our UI, which looks ugly */}
                        {tit.card.card.itemCards ? (
                            <span className="menu-small-cont">
                                <div
                                    className="title-head"
                                    onClick={clickFunc}
                                >
                                    <h2 className="menu-title">{tit.card.card.title}</h2>
                                    <i className="icon fa-solid fa-caret-down"></i>
                                </div>
                                <ul className="title-content">
                                    {tit.card.card.itemCards.map((item) => (
                                        <li
                                            className="menu-item"
                                            key={item.card.info.id}
                                        >
                                            <div className="menu-item-name">{item.card.info.name}</div>
                                            <div className="menu-item-price">Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</div>
                                        </li>
                                    ))}
                                </ul>
                            </span>
                        ) : null}
                    </>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
