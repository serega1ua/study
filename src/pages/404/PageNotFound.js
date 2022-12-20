import {NavLink} from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="font-semibold mb-5 text-3xl">404 Page Not Found</h1>
            <NavLink to="/" className="text-white ml-4 rounded bg-lightred uppercase px-14 py-4">Go to home</NavLink>
        </div>
    )
}

export default PageNotFound;
