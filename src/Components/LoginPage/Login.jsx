import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";


const Login = () => {



    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { signIn } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [password, setPassword] = useState(false);
    const navigate = useNavigate();
    const [passwordShow, setPasswordShow] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newPassword = e.target.value;
        setPassword(newPassword);
        setPasswordShow(newPassword !== '');
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;
        setLoading(true);
        setError('');
    
        await signIn(email, password)
            .then(() => {
                Swal.fire("LogIn Successfully");
                setFormData({ email: '', password: '' });
                navigate("/");
            })
            .catch(error => {
                console.error(error);
                setError('Invalid email or password. Please try again.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

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
                            <h2 className="text-3xl font-medium text-white/80 ">Welcome Back</h2>
                            <p className="animate-pulse text-sm text-white/60">Please Enter You Information</p>
                        </div>
                    </div>
                    {/* input side  */}
                    <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
                        <h2 className="pb-8 text-center text-3xl font-bold text-[#82e0cc]">Login Here</h2>{error && <p className="text-red-500 text-xs mt-2">{error}</p>}
                        <form className="flex  w-full flex-col items-center justify-center gap-4" onSubmit={handleSubmit}>
                            <input className="w-[80%] rounded-lg border border-[#82e0cc] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#a3ddd1]/50 md:w-[60%]" value={formData.name} onChange={handleChange} type="email" placeholder="Email" name="email" />
                            <div className="relative">
                                <input
                                    className="w-[80%] rounded-lg border border-[#82e0cc] px-6 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#a3ddd1]/50 md:w-[60%] p-3 block outline-none text-black"
                                    id="_password"
                                    type={!passwordShow ? 'text' : 'password'}
                                    name='password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder=".............."
                                    min={5}
                                    required
                                />
                                {password && (
                                    <span
                                        onClick={() => setPasswordShow(!passwordShow)}
                                        className=" absolute top-3 right-2 cursor-pointer text-[14px] text-black text-2xl "
                                    >
                                        {passwordShow ? <FaEye /> : <FaEyeSlash />}
                                    </span>
                                )}
                            </div>

                            <Link to='/signUp'>
                                <p className="text-[14px] text-gray-400">Do not have an account ? <a className="text-[#82e0cc] ">Create one</a></p>
                            </Link>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-[80%] rounded-lg bg-[#82e0cc] px-6 py-2 font-medium text-white md:w-[60%] ${loading ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {loading ? 'Signing Up...' : 'Sign Up'}
                            </button>
                        </form>
                        {/* divider  */}
                        <div className="my-8 flex items-center px-8">
                            <hr className="flex-1" />
                            <div className="mx-4 text-gray-400">OR</div>
                            <hr className="flex-1" />
                        </div>
                        {/* sign with google */}
                        <div className="flex">
                            <div className="mx-auto flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
                                <div className="flex h-full w-[50%] items-center bg-[#82e0cc] pl-4 text-sm text-white">Sign With</div>
                                <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#82e0cc] group-hover:hidden"></span>
                                <span className="pr-4 text-4xl font-bold text-[#82e0cc]">G+</span>
                            </div>
                            <div className="mx-auto flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
                                <div className="flex h-full w-[50%] items-center bg-[#82e0cc] pl-4 text-sm text-white">Sign With</div>
                                <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#82e0cc] group-hover:hidden"></span>
                                <span className="pr-4 text-4xl font-bold text-[#82e0cc]">Git</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;