import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import logo from '../Images/logo.png'
import signIn from '../Images/signIn.png'
import GoogleLogo from '../Images/google.svg'
import { useEffect, useState } from 'react';
import auth from '../../Firebase/firebase.init';
import { BsEyeSlash } from "@react-icons/all-files/bs/BsEyeSlash";
import { TiDeleteOutline } from "@react-icons/all-files/ti/TiDeleteOutline";
import { toast, ToastContainer } from 'react-toastify';
import Spinner from '../Spinner/Spinner';
const SignIn = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        general: "",
    });
    const [loading, setLoading] = useState(false)
    const [showPass, setShowPass] = useState(false);
    const [signInWithEmail, user, signInLoading, hookError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleloading, googleError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, passwordResetError] = useSendPasswordResetEmail(
        auth
    )

    const handleEmail = (event) => {
        if (/\S+@\S+\.\S+/.test(event.target.value)) {
            setUserInfo({ ...userInfo, email: event.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Please provide a valid email" });
            setUserInfo({ ...userInfo, email: "" });
        }
    };
    const handlePassword = (event) => {
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(event.target.value)) {
            setUserInfo({ ...userInfo, password: event.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Wrong Password" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };
    const forgetPassword = async () => {
        if (userInfo.email) {
            await sendPasswordResetEmail(userInfo.email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address');
        };
    };

    const handleSignIn = (event) => {
        event.preventDefault();
        console.log(userInfo);
        signInWithEmail(userInfo.email, userInfo.password);
    };
    useEffect(() => {
        setLoading(true)
        const hookErrors = hookError || googleError || passwordResetError;
        if (hookErrors) {
            switch (hookErrors?.code) {
                case "auth/user-not-found":
                    toast("User Not Found");
                    break;
                default:
                    toast("Something went wrong");
            }
        }
        setLoading(false)
    }, [hookError, googleError, passwordResetError]);


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        setLoading(true)
        if (user) {
            navigate(from, { replace: true });
        }
        setLoading(false)
    }, [user]);

    return (
        <>
            {loading ? (
                <Spinner />
            ) :
                (<section className="bg-gray-200 py-20">
                    <div className="container mt-16 px-36">
                        <div className="flex justify-center items-center flex-wrap g-6 text-gray-800">
                            <div className="xl:w-10/12">
                                <div className="block bg-white shadow-lg rounded-3xl-lg">
                                    <div className="lg:flex lg:flex-wrap g-0">
                                        <div className="lg:w-6/12 px-4 md:px-0">
                                            <div className="md:p-12 md:mx-6">
                                                <div className="text-center">
                                                    <img
                                                        className="mx-auto w-35"
                                                        src={logo}
                                                        alt="logo"
                                                    />
                                                    <h4 className="text-xl font-semibold my-3 text-sky-800">QUANTA</h4>
                                                </div>
                                                <form onSubmit={handleSignIn} className='login'>
                                                    <h4 className="text-xl font-semibold my-3 text-sky-800 ml-2">SIGN IN</h4>
                                                    <div className="mb-6">
                                                        <input
                                                            onBlur={handleEmail}
                                                            type="email" id="email"
                                                            className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-900 focus:border-blue-900 block w-full p-2.5 " placeholder="Enter Your Email" required="" />
                                                        {errors?.email && <p className="flex items-center text-red-500 mt-4 ml-4 font-bold"><TiDeleteOutline className='mr-2 text-xl mt-1'> </TiDeleteOutline> {errors.email}</p>}
                                                    </div>
                                                    <div className="mb-6 relative">
                                                        <input
                                                            onBlur={handlePassword}
                                                            type={showPass ? "text" : "password"}
                                                            id="password"
                                                            className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5"
                                                            placeholder="Enter Your Password" required="" />
                                                        {errors?.password && <p className="flex text-red-500 mt-4 ml-4 font-bold"><TiDeleteOutline className='mr-2 text-2xl'> </TiDeleteOutline> {errors.password}</p>}
                                                        <p className="absolute top-3 right-5 cursor-pointer" onClick={() => setShowPass(!showPass)}><BsEyeSlash /></p>
                                                    </div>
                                                    <button type="submit" className="inline-block px-6 py-3 text-white font-medium text-xs leading-tight uppercase rounded-3xl shadow-md bg-sky-800 hover:bg-indigo-800 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3">Sign In</button>
                                                    <label htmlFor="terms" className="font-medium text-gray-900 dark:text-gray-300 ml-28"><button onClick={forgetPassword} className="text-blue-900 font-semibold hover:underline">Forget Password?</button></label>

                                                    <div className="flex items-center justify-between mt-4">
                                                        <p className="mb-0 mr-2">Already Have An Account?</p>
                                                        <Link to='/signUp' className='inline-block px-6 py-2 bg-sky-800 text-white font-medium text-xs leading-tight uppercase rounded-3xl hover:bg-indigo-800 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'> Sign Up</Link>

                                                    </div>
                                                    <div className='flex font-bold items-center my-3'>
                                                        <hr className='border-blue-900 h-px w-full mr-2 mt-1' />
                                                        <span>or</span>
                                                        <hr className='border-blue-900 h-px w-full ml-2 mt-1' />
                                                    </div>
                                                    <button onClick={() => signInWithGoogle()} className="flex items-center justify-center shadow-md bg-gray-50 border font-bold border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-900 focus:border-blue-900 w-full p-2.5"> <img className='w-6 pr-2' src={GoogleLogo} alt='' /> Continue with Google</button>
                                                </form>
                                                <ToastContainer></ToastContainer>
                                            </div>
                                        </div>
                                        <div
                                            className="lg:w-6/12 flex items-center lg:rounded-3xl-r-lg rounded-3xl-b-lg lg:rounded-3xl-bl-none mx-auto bg-sky-800"

                                        >
                                            <div className="bg-sky-800 px-4 py-6 md:pl-18 md:mx-6">
                                                <img src={signIn} alt="" srcSet="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>)}
        </>
    );
};

export default SignIn;