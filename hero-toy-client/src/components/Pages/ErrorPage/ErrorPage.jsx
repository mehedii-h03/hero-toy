import Lottie from "lottie-react";
import Error from '../../../assets/404-error.json'
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <Lottie className="w-2/4 mx-auto" animationData={Error} loop={true} />
            <Link to='/' className="btn btn-wide border-0 hover:bg-orange-600 bg-orange-500 text-white font-semibold rounded-lg shadow-md">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;