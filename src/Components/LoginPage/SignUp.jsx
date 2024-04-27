import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState('');
    const [passwordShow, setPasswordShow] = useState(false);
    const [password, setPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        photoURL: '',
        email: '',
        password: ''
    });

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

    const handleSignUpSubmit = (e) => {
        e.preventDefault();

        const { name, photoURL, email, password } = formData;

        if (!name || !photoURL || !email || !password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all fields.',
            });
            return;
        }




        if (password.length < 6) {
            setRegisterError('Password should be 6 characters or longer.');
            return;
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password)) {
            setRegisterError('Password must be at least 8 and at most 15 characters, and contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character.');
            return;
        }

        setRegisterError('');

        createUser(email, password, { displayName: name, photoURL: photoURL })
            .then(result => {
                setPasswordShow(false);
                setPassword(false)
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoURL
                })
                    .then(() => {
                        Swal.fire("Registration Successfully");
                        console.log("profile updated")
                    })
                    .catch(error => {
                        console.log(error);
                    })
                setFormData({
                    name: '',
                    photoURL: '',
                    email: '',
                    password: ''
                });
                navigate("/");
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
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
                        <h2 className="text-3xl font-medium">Welcome to Our Site</h2>
                        <p className="animate-pulse text-sm">Please Register Here</p>
                    </div>
                </div>
                {/* Input side */}
                <div className="w-full bg-white py-10 md:w-[50%] lg:w-[60%]">
                    <h2 className="pb-8 text-center text-3xl font-bold text-[#82e0cc]">Register Here</h2>
                    {registerError && <h1 className="text-xl font-bold mb-4 text-red-500 text-center">{registerError}</h1>}
                    <form className="flex flex-col items-center gap-4" onSubmit={handleSignUpSubmit}>
                        <input
                            className="w-[80%] md:w-[60%] rounded-lg border border-[#82e0cc] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#a3ddd1]/50"
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            className="w-[80%] md:w-[60%] rounded-lg border border-[#82e0cc] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#a3ddd1]/50"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            className="w-[80%] md:w-[60%] rounded-lg border border-[#82e0cc] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#a3ddd1]/50"
                            type="text"
                            placeholder="Photo URL"
                            name="photoURL"
                            value={formData.photoURL}
                            onChange={handleChange}
                        />
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
                        <Link to='/logIn' className="text-center text-sm text-gray-400">Already have an account? <span className="text-[#82e0cc] ">Log In</span></Link>
                        <button className="w-[80%] md:w-[60%] rounded-lg bg-[#82e0cc] px-6 py-2 font-medium text-white" type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
