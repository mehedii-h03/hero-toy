import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import ironMan from '../../../../../assets/ironman.json'
import { useContext, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet';

const Registration = () => {
    const [error, setError] = useState("");
    const { createUser, profilePicUpdate, loginUserWithGoogle, loginUserWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();

    // create with email pass
    const handlerSingUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        if (password.length < 6) {
            setError("Password should be at least 6 characters!")
            return
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Account Created',
                    showConfirmButton: false,
                })
                // update profile pic
                profilePicUpdate(loggedUser, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                        //photo updated
                    })
                    .catch(error => {
                        if (error.message == "Firebase: Error (auth/email-already-in-use).") {
                            setError('Email already used')
                        }
                        console.log(error.message);
                    })

                navigate('/')
            })
            .catch(err => {
                console.log(err.message);
            })
        form.reset()
    }

    // with google
    const handlerSingUpWithGoogle = () => {
        loginUserWithGoogle()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Login with Google',
                    showConfirmButton: false,
                })
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }

    // with github
    const handlerSingUpWithGithub = () => {
        loginUserWithGithub()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Login with Github',
                    showConfirmButton: false,
                })
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="flex  bg-gray-100 lg:w-3/4 mx-auto mt-3 rounded-md">
            <Helmet>
                <title>HeroToy | Registration</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="hidden md:flex bg-[#f09743]  md:flex-col md:justify-center md:items-center md:w-1/2 md:relative md:bg-cover md:bg-center">
                <Lottie className="w-44 md:w-full" animationData={ironMan} loop={true} />
                <h2 className="text-4xl text-white font-bold text-center">Welcome to HeroToy!</h2>
                <p className='text-white mt-2'>Buy your favorite action hero toy.</p>
            </div>
            {/* Left side with form */}
            <div className="flex flex-col justify-center items-center py-4 px-6 lg:px-0 w-full md:w-1/2">
                <h1 className="text-3xl font-bold mt-3 mb-8">Sign Up</h1>
                <form onSubmit={handlerSingUp} className="w-full max-w-sm">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500" id="name" name='name' type="text" placeholder="Enter your name" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500" id="email" name='email' type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="photo">
                            Photo Url
                        </label>
                        <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500" id="photo" name='photo' type="text" placeholder="Enter your photo url" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-500" id="password" type="password" placeholder="Enter password" required />
                    </div>
                    <input
                        className="btn btn-sm bg-[#f09743] border-0 hover:bg-[#dc6a00]"
                        type="submit" value='Sign Up' />
                    <p className='mt-4 text-sm text-red-600'>{error}</p>
                    <p className='mt-4 text-sm text center'>Already have and account <Link to="/login" className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-700">
                        Login
                    </Link>
                    </p>
                </form>
                <div className="flex flex-col lg:flex-row  gap-3 lg:gap-5 items-center mt-4">
                    <button
                        onClick={handlerSingUpWithGoogle}
                        className="btn btn-sm border-0 bg-blue-600 hover:bg-blue-800"
                        type="button"
                    >
                        <FaGoogle className='me-2'></FaGoogle>Google Sign Up
                    </button>
                    <button
                        onClick={handlerSingUpWithGithub}
                        className="btn btn-sm bg-black hover:bg-gray-800">
                        <FaGithub className='me-2' />GitHub Sign Up
                    </button>
                    {/* <Toaster /> */}
                </div>
            </div>

        </div>
    );
};

export default Registration;