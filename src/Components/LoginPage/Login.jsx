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
    const [errors, setErrors] = useState('');
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
        setErrors('');
    
        await signIn(email, password)
            .then(() => {
                Swal.fire("LogIn Successfully");
                setFormData({ email: '', password: '' });
                navigate("/");
            })
            .catch(error => {
                console.error(error);
                setErrors('Invalid email or password. Please try again.');
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Invalid email or password. Please try again.',
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#93cabe]/20 p-6 md:p-0">
            <div className="flex w-full overflow-hidden rounded-xl shadow-md md:w-[80%] lg:w-[60%]">
                {/* Side with image */}
                <div className="hidden md:flex md:w-[50%] lg:w-[40%] bg-[#82e0cc] relative">
                    <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-br from-white via-[#88ebd5] to-[#52c9af]"></div>
                    <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br from-white via-[#88ebd5] to-[#52c9af]"></div>
                    <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-[#88ebd5] to-[#52c9af] transition-all"></div>
                    <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full bg-gradient-to-br from-white via-[#88ebd5] to-[#52c9af]"></div>
                    <div className="flex flex-col justify-center items-center space-y-2 text-center text-white">
                        <h2 className="text-3xl font-medium ml-10">Welcome Back</h2>
                        <p className="animate-pulse text-sm ml-10">Please Enter Your Information</p>
                    </div>
                </div>
                {/* Input side */}
                <div className="w-full bg-white py-10 md:w-[50%] lg:w-[60%]">
                    <h2 className="pb-8 text-center text-3xl font-bold text-[#82e0cc]">Login Here</h2>
                    <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
                        <input 
                        className="w-[80%] md:w-[60%] rounded-lg border border-[#82e0cc] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#a3ddd1]/50" 
                        value={formData.name} 
                        onChange={handleChange} 
                        type="email" 
                        placeholder="Email" 
                        name="email" />
                        <div className="relative w-[80%] md:w-[60%]">
                            <input
                                className="w-full rounded-lg border border-[#82e0cc] px-6 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#a3ddd1]/50 block outline-none text-black"
                                id="_password"
                                type={!passwordShow ? 'text' : 'password'}
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                min={5}
                                required
                            />
                            {password && (
                                <span
                                    onClick={() => setPasswordShow(!passwordShow)}
                                    className="absolute top-3 right-2 cursor-pointer text-[14px] text-black text-2xl "
                                >
                                    {passwordShow ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            )}
                        </div>
                        <Link to='/signUp' className="text-center text-sm text-gray-400">Don't have an account? <span className="text-[#82e0cc]">Create one</span></Link>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-[80%] md:w-[60%] rounded-lg bg-[#82e0cc] px-6 py-2 font-medium text-white ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                    {/* Divider */}
                    <div className="my-8 flex items-center px-8">
                        <hr className="flex-1" />
                        <div className="mx-4 text-gray-400">OR</div>
                        <hr className="flex-1" />
                    </div>
                    {/* Sign with Google */}
                    <div className="flex justify-center">
                        <div className="flex items-center justify-center h-[50px] w-[200px] overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow mx-2">
                            <div className="flex items-center justify-center h-full w-[50%] bg-[#82e0cc] text-sm text-white">Sign With</div>
                            <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#82e0cc] group-hover:hidden"></span>
                            <span className="text-4xl font-bold text-[#82e0cc]">G+</span>
                        </div>
                        <div className="flex items-center justify-center h-[50px] w-[200px] overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow mx-2">
                            <div className="flex items-center justify-center h-full w-[50%] bg-[#82e0cc] text-sm text-white">Sign With</div>
                            <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#82e0cc] group-hover:hidden"></span>
                            <span className="text-4xl font-bold text-[#82e0cc]">Git</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
