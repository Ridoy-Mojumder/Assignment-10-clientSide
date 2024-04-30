import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {

    const { user, logOut, loadingState } = useContext(AuthContext);

    if (loadingState) {
        return <span className="loading loading-spinner text-info"></span>;
    }







    const items = <>
        <NavLink className="group flex cursor-pointer flex-col">
            <span className="flex font-bold text-[#52c9af]">Home</span> <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#278f7d] transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
        <NavLink to="/allArtAndCrafts" className="group flex cursor-pointer flex-col">
            <span className="flex font-bold text-[#52c9af]">AllArt&crafts</span> <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#278f7d] transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
        <NavLink to='/addCraft' className="group flex cursor-pointer flex-col">
            <span className="flex font-bold text-[#52c9af]">AddArt&Craft</span> <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#278f7d] transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
        <NavLink to='/myArtAndCraftList' className="group flex cursor-pointer flex-col">
            <span className="flex font-bold text-[#52c9af]">MyArt&CraftList</span>  <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#278f7d] transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
    </>
    return (
        <div>
            <div>
                <nav className="flex items-center justify-between bg-[] px-4 py-2 text-white">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden text-sky-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-1 shadow bg-base-100 rounded-box w-44 font-bold flex items-center justify-between gap-10 text-black">
                                {items}
                            </ul>
                        </div>
                        <div className="hidden md:flex justify-start items-start ">
                            <div className="text-black p-2 flex justify-center items-center gap-2 mt-[-20px]">
                                <img src="https://i.ibb.co/Bn8t4D7/acc1b5c8-3d02-4fd2-bd04-b6380df06e0e.jpg" className="w-[75px] h-[75px] rounded-full " alt="" />
                            </div>
                        </div>

                    </div>
                    <div className=" flex md:items-center md:justify-between gap-16">
                        <div className="hidden md:flex md:items-center md:justify-between gap-16">
                            <ul className="flex items-center justify-between gap-10">
                                {items}
                            </ul>
                        </div>
                        <div className="navbar-end gap-4">
                            {user ? (
                                <div className="flex items-center">
                                    <div className="relative inline-block">
                                        
                                        <div className="pointer group relative mx-auto  flex h-10 w-max justify-center">
                                            <img
                                                src={user.photoURL}
                                                alt="User Profile"
                                                className="h-12 w-12  rounded-full cursor-pointer border border-[#278f7d] "
                                            />
                                            {/* Hover Text */}
                                            <div className="absolute -bottom-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-bottom-16 group-hover:opacity-100  ">
                                                <p className="rounded-md bg-[#278f7d] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#278f7d]"> {user.displayName}</p>
                                                <span className="absolute -top-2 left-[50%] h-0 w-0 -translate-x-1/2 -rotate-[45deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#278f7d] shadow-[0px_0px_10px_0px_#278f7d]"></span>
                                            </div>
                                            {/* Hover button */}
                                        </div>
                                    </div>
                                    <button
                                        className='ml-4 p-2 text-white text-[14px] font-semibold rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all duration-300 bg-gradient-to-r from-red-400 to-red-500'
                                        onClick={logOut}
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <div className="flex gap-3">
                                    <div className="flex items-center justify-between gap-5">
                                        <NavLink to='/logIn'>
                                            <button className="rounded-full bg-[#52c9af] px-6 py-2 transition-all duration-300 hover:scale-90 font-bold text-white">LogIn</button>
                                        </NavLink>
                                        <NavLink to='/signUp'>
                                            <button className="rounded-full bg-[#52c9af] px-6 py-2 transition-all duration-300 hover:scale-90 font-bold text-white">Register</button>
                                        </NavLink>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;