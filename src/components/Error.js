import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err); // this will print the actual error encountered

    return (
        <div>
            <h1>Oops!!!</h1>
            <h2>Something Went Wrong....!!</h2>
        </div>
    );
};

export default Error;
