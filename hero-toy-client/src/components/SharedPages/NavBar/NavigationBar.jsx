import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('Successfully Logout')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="navbar bg-base-100 lg:px-28 lg:mt-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/'><FaUserCircle className='text-3xl'></FaUserCircle></Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl lg:text-2xl font-semibold">Kitchen Explorer</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='list-none m-0 p-0"'><Link to='/'>Home</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    {
                        user && <li className="tooltip tooltip-bottom" data-tip={user?.displayName}><a>{
                            user?.photoURL ?
                                <img className='rounded-full w-10 h-10' src={user.photoURL} alt="" /> :
                                <FaUserCircle className='text-3xl' />
                        }</a></li>
                    }
                </ul>
            </div>
            <div className='ms-auto'>
                {
                    !user ?
                        <Link to="/login" className=" me-2 btn btn-sm ">Login</Link> :
                        <Link onClick={handleLogout} className=" me-2 btn btn-sm ">Log out</Link>
                }
                <Toaster />
            </div>
        </div>
    );
};

export default NavigationBar;