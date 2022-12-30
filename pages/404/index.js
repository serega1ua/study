import Link from "next/link";

const PageNotFound = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="font-semibold mb-5 text-3xl">404 Page Not Found</h1>
            <Link href="/" className="text-white ml-4 rounded bg-lightred uppercase px-14 py-4">Go to home</Link>
        </div>
    )
}

export default PageNotFound;
