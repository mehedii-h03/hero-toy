import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handlerLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully Logout')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="lg:px-24 navbar mt-2 bg-base-100">
            <div className="navbar-start">
                {/* small device */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden border-0 px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/' className="hover:bg-inherit">Home</Link></li>
                        <li><Link to='/alltoys' className="hover:bg-inherit">All Toys</Link></li>
                        <li><Link to='/mytoys' className="hover:bg-inherit">My Toys</Link></li>
                        <li><Link to='/addtoys' className="hover:bg-inherit">Add Toys</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl border-0 px-2 hover:bg-inherit">
                    <img src="https://cdn0.iconfinder.com/data/icons/famous-character-vol-1-colored/48/JD-18-512.png" className="h-12" alt="" />
                    HeroToy
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li>
                        <Link to='/' className="hover:bg-inherit bg-transparent hover:text-[#f09743]">Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/alltoys' className="hover:bg-inherit bg-transparent hover:text-[#f09743]">All Toys
                        </Link>
                    </li>
                    <li>
                        <Link to='mytoys' className="hover:bg-inherit bg-transparent hover:text-[#f09743]">My Toys</Link>
                    </li>
                    <li>
                        <Link to='/addtoys' className="hover:bg-inherit bg-transparent hover:text-[#f09743]">Add Toys</Link>
                    </li>
                    <li>
                        <Link to='/blog' className="hover:bg-inherit bg-transparent hover:text-[#f09743]">Blog</Link>
                    </li>
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user && <li className="tooltip tooltip-bottom me-3" data-tip={user?.displayName}><a>{
                        user?.photoURL ?
                            <img className='rounded-full w-10 h-10' src={user.photoURL} alt="" /> :
                            <FaUserCircle className='text-3xl' />
                    }</a></li>
                }
                {
                    !user ?
                        <Link className="btn btn-sm bg-[#f09743] border-0 hover:bg-[#dc6a00]" to='/login'>Login</Link> :
                        <Link onClick={handlerLogOut} className="btn btn-sm bg-[#f09743] border-0 hover:bg-[#dc6a00]">Log Out</Link>
                }
                <Toaster />
            </div>
        </div>
    );
};

export default NavBar;