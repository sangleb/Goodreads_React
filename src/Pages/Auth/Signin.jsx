import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import Layout from "src/Layouts/Layout";
import { signin } from "src/Redux/Slices/AuthSlice";

export default function Signin(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state.auth);

    const [signinDetails, setSigninDetails] = useState({
        email: '',
        password: '',
    });

    function handleFormChange(e){
        const {name, value} = e.target;
        setSigninDetails({
            ...signinDetails,
            [name]: value
        })
    }

    function resetForm(){
        setSigninDetails({
            email: '',
            password: '',
        })
    }

    async function onFormSubmit(e){
        e.preventDefault();
        console.log(signinDetails);
        const response = await dispatch(signin(signinDetails));
        if(response?.payload?.data){
            navigate('/dashboard');
        }
        resetForm();
    }

    useEffect(() => {
        if(state.isLoggedIn){
            navigate('/dashboard');
        }
    }, [])

    return(
        <Layout >
            <div className="h-[100vh] flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-3xl">Login to your account</h1>
                </div>
                <div className="mt-4">
                    <p>
                        Don't have an account ?
                        <Link to='/signup'>
                            <button className="btn bg-green-400 rounded-md px-2 py-1 m-2 hover:bg-green-600">
                            SignUp
                            </button>
                        </Link>
                    </p>    
                </div>
                <div className="w-full">
                    <form onSubmit={onFormSubmit} className="flex flex-col justify-center items-center mx-auto w-3/4">
                        <div className="my-5 w-1/3 text-black">email
                            <input 
                                type="email"
                                placeholder="enter your email.."
                                className="px-8 py-3 w-full bg-gray-200"
                                autoComplete="off"
                                name="email"
                                onChange={handleFormChange}
                                value={signinDetails.email}
                            />
                        </div>
                        <div className="my-5 w-1/3 text-black">password
                            <input 
                                type="password"
                                placeholder="enter your password.."
                                className="px-8 py-3 w-full bg-gray-200"
                                autoComplete="off"
                                name="password"
                                onChange={handleFormChange}
                                value={signinDetails.password}
                            />
                        </div>
                        <div className="my-5 w-1/3">
                            <button className = "w-full px-8 py-3 bg-green-400 rounded-md hover:bg-green-600" type="submit">
                                Submit
                            </button>
                        </div>                    
                    </form>
                </div>
            </div>
        </Layout>
    )
};