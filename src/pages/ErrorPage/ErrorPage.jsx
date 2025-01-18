import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    // ---useRouterError---
    const error = useRouteError();

    // ---Return---
    return (
        <div className="text-center my-96">
            {
                error.status === 404 ? <div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-red-600">Something went wrong 404</h2>
                    <div className="mt-14">
                        <Link to="/" className="text-xl text-black border border-solid border-slate-300 px-14 py-3 rounded-md cursor-pointer shadow-2xl mt-20"> Back to Home</Link>
                    </div>
                </div> : ""
            }
        </div>
    );
};

export default ErrorPage;