import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";


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
        console.log(name, photoURL, email, password);
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
                console.log(result.user);
                setPasswordShow(false);
                setPassword(false)
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoURL
                })
                    .then(() => {
                        console.log("profile updated")
                    })
                    .catch(error => {
                        console.log(error);
                    })
                setFormData({
                    name: '',
                    photoURL: '',
                    email: '',
                    password: '',
                    agreement: false
                });
                navigate("/");
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
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
                            <h2 className="text-3xl font-medium text-white/80 ">Welcome to Our Site</h2>
                            <p className="animate-pulse text-sm text-white/90">Please Register in here</p>
                        </div>
                    </div>
                    {/* input side  */}
                    <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
                        <h2 className="pb-8 text-center text-3xl font-bold text-[#82e0cc]">Register Here</h2>
                        {registerError && <h1 className="text-xl font-bold mb-4 text-red-500 text-center">{registerError}</h1>}
                        <form className="flex w-full flex-col items-center justify-center gap-4" onSubmit={handleSignUpSubmit}>
                            <input
                                className="w-[80%] rounded-lg border border-[#82e0cc] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#a3ddd1]/50 md:w-[60%]"
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                className="w-[80%] rounded-lg border border-[#82e0cc] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#a3ddd1]/50 md:w-[60%]"
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                className="w-[80%] rounded-lg border border-[#82e0cc] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#a3ddd1]/50 md:w-[60%]"
                                type="text"
                                placeholder="Photo URL"
                                name="photoURL"
                                value={formData.photoURL}
                                onChange={handleChange}
                            />

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
                            <Link to='/logIn'>
                                <p className="text-[14px] text-gray-400">Already have an account? <span className="text-[#82e0cc] ">Log In</span></p>
                            </Link>
                            <input
                                className="w-[80%] rounded-lg bg-[#82e0cc] px-6 py-2 font-medium text-white md:w-[60%]"
                                type="submit"
                            />
                        </form>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;