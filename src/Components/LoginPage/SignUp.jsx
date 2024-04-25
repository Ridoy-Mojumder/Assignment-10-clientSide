import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div>
            <div className="flex h-screen items-center justify-center bg-[#93cabe]/20 p-6 md:p-0">
                <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md  md:h-[90%] md:w-[80%] lg:h-[80%]">
                    {/* register design side  */}
                    <div className="relative hidden h-full items-center justify-center bg-[#82e0cc] md:flex md:w-[60%] lg:w-[40%]">
                        <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-br  from-white via-[#88ebd5] to-[#52c9af]"></div>
                        <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br  from-white via-[#88ebd5] to-[#52c9af]"></div>
                        <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-[#88ebd5] to-[#52c9af] transition-all"></div>
                        <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full  bg-gradient-to-br from-white via-[#88ebd5] to-[#52c9af]"></div>
                        <div className="space-y-2 text-center">
                            <h2 className="text-3xl font-medium text-white/80 ">Welcome to Our Site</h2>
                            <p className="animate-pulse text-sm text-white/90">Please Register in here</p>
                        </div>
                    </div>
                    {/* input side  */}
                    <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
                        <h2 className="pb-8 text-center text-3xl font-bold text-[#82e0cc]">Register Here</h2>
                        <form className="flex  w-full flex-col items-center justify-center gap-4">
                            <input className="w-[80%] rounded-lg border border-[#82e0cc] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#a3ddd1]/50 md:w-[60%]" type="text" placeholder="Name" name="name" />
                            <input className="w-[80%] rounded-lg border border-[#82e0cc] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#a3ddd1]/50 md:w-[60%]" type="email" placeholder="Email" name="email" />
                            <input className="w-[80%] rounded-lg border border-[#82e0cc] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#a3ddd1]/50 md:w-[60%]" type="text" placeholder="Photo URL" name="photoURL" />
                            <input className="w-[80%] rounded-lg border border-[#82e0cc] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#a3ddd1]/50 md:w-[60%]" type="password" placeholder="Password" name="password" />
                            <Link to='/logIn'>
                                <p className="text-[14px] text-gray-400">Already have an account? <span className="text-[#82e0cc] ">Log In</span></p>
                            </Link>
                            <input className="w-[80%] rounded-lg bg-[#82e0cc] px-6 py-2 font-medium text-white md:w-[60%]" type="submit" />
                        </form>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;