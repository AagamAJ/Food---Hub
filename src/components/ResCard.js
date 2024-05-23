import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
    const { resData } = props;

    // now, we are creating seperate const variables for each property inside our demoData
    const { cloudinaryImageId, name, avgRatingString, cuisines } = resData?.info; // the properties which are inside 'info' of resData

    const { deliveryTime } = resData?.info?.sla; // the properties which are inside 'sla', which is again inside 'info' of resData

    const { link } = resData?.cta; // the properties which are inside 'cta' of resData

    return (
        <div className="res-card">
            <div className="res-img">
                {/* <img alt={name} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img> */}
                {/* we will not use this CDN url in this way, this is a bad practice, instead, we can have a new folder for all these types of urls and images */}
                <img
                    alt={name}
                    src={CDN_URL + cloudinaryImageId}
                ></img>
            </div>
            <div className="name-rating">
                <span className="name">{name}</span>
                <span className="rating">
                    <i className="fa-solid fa-star icon"></i>
                    {avgRatingString}
                </span>
            </div>
            <div className="cuisines-time">
                <span className="cuisines">{cuisines.join(", ")}</span>
                <span className="time">{deliveryTime} mins</span>
            </div>
        </div>
    );
};

export default ResCard;
