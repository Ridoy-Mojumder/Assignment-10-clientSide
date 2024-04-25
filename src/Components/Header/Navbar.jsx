import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const items = <>
        <NavLink className="group flex cursor-pointer flex-col">
            <span className="flex font-bold text-[#52c9af]">Home</span> <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#278f7d] transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
        <NavLink to="/allArtAndCrafts" className="group flex cursor-pointer flex-col">
            <span className="flex font-bold text-[#52c9af]">AllArt&crafts</span> <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#278f7d] transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
        <NavLink to='/addCraft' className="group flex cursor-pointer flex-col">
            <span className="flex font-bold text-[#52c9af]">AddCraft</span> <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#278f7d] transition-all duration-300 group-hover:w-full"></span>
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
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-sky-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-1 shadow bg-base-100 rounded-box w-44 font-bold flex items-center justify-between gap-10 text-black">
                                {items}
                            </ul>
                        </div>
                        <div className="hidden md:flex justify-start items-start ">
                            <div className="bg-gray-200 p-2 rounded-full mt-[-20px]">
                                <img src="https://i.ibb.co/Bn8t4D7/acc1b5c8-3d02-4fd2-bd04-b6380df06e0e.jpg" className="w-[75px] h-[75px] rounded-full" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="hidden md:flex md:items-center md:justify-between gap-16">
                        <ul className="flex items-center justify-between gap-10">
                            {items}
                        </ul>
                        <div className="flex items-center justify-between gap-4">

                            <Link to='/logIn'>
                                <button className="rounded-full bg-[#52c9af] px-6 py-2 transition-all duration-300 hover:scale-90 font-bold text-white">LogIn</button>
                            </Link>
                            <Link to='/signUp'>
                                <button className="rounded-full bg-[#52c9af] px-6 py-2 transition-all duration-300 hover:scale-90 font-bold text-white">Register</button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;