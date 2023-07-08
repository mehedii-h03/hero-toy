import Lottie from "lottie-react";
import hero from '../../../../../assets/batman-.json'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";

const Login = () => {
    const [error, setError] = useState("");
    const { loginUser, loginUserWithGoogle, loginUserWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || "/"
    // email password
    const handlerLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError("Email address or password doesn't match")
                console.log(error);
            })
    }

    // google
    const handlerSingInWithGoogle = () => {
        loginUserWithGoogle()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    // github
    const handlerSingUpWithGithub = () => {
        loginUserWithGithub()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="flex items-center justify-center">
            <Helmet>
                <title>HeroToy | Login</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="p-10 w-[500px] bg-white shadow-lg rounded-lg">
                <div className="mx-auto w-40 h-40 border-2 border-[#f09743] rounded-full flex items-center justify-center">
                    <Lottie className="w-44 md:w-full" animationData={hero} loop={true} />
                </div>
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                <form onSubmit={handlerLogin}>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <input
                            className="btn btn-sm bg-[#f09743] border-0 hover:bg-[#dc6a00]"
                            type="submit" value='Login' />
                    </div>
                    <p className='mt-4 text-sm text-red-600'>{error}</p>
                    <p className='text-sm mt-1 text center'>Dont have an Account? <Link to="/registration" className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-700">
                        Sing Up
                    </Link>
                    </p>
                </form>
                <div className="flex justify-center mt-5 gap-2">
                    <button
                        onClick={handlerSingInWithGoogle}
                        className="btn btn-sm border-0 bg-blue-600 hover:bg-blue-800"
                        type="button"
                    >
                        <FaGoogle className='me-2'></FaGoogle>Google Login
                    </button>
                    <button
                        onClick={handlerSingUpWithGithub}
                        className="btn btn-sm bg-black hover:bg-gray-800">
                        <FaGithub className='me-2' />GitHub Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;