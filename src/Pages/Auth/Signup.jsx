import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "src/Redux/Slices/AuthSlice";
import Layout from "src/Layouts/Layout";

export default function Signup(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state.auth);

    const [signupDetails, setSignupDetails] = useState({
            email: '',
            password: '',
            username: ''
        });
    
    function handleFormChange(e){
        const {name, value} = e.target;
        setSignupDetails({
            ...signupDetails,
            [name]: value
        })
    }

    function resetForm(){
        setSignupDetails({
            email: '',
            password: '',
            username: ''
        })
    }

    async function onFormSubmit(e){
        e.preventDefault();
        const response = await dispatch(signup(signupDetails));
        console.log(response);
        if(response?.payload?.data){
            navigate('/signin');
        }
        resetForm();
    }

    useEffect(() => {
        if(state.isLoggedIn){
            navigate('/dashboard');
        }
    }, [])

    return(
        <Layout>
            <div className="h-[100vh] flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-3xl">Create account</h1>
                </div>
                <div className="mt-4">
                    <p>
                        Already have an account ?
                        <Link to='/signin'>
                            <button className="btn bg-green-400 rounded-md px-2 py-1 m-2 hover:bg-green-600">
                            SignIn   
                            </button>
                        </Link>
                    </p>    
                </div>
                <div className="w-full">
                    <form onSubmit={onFormSubmit} className="flex flex-col justify-center items-center mx-auto w-3/4">
                        <div className="my-5 w-1/3 text-black">username
                            <input 
                                type="text"
                                placeholder="enter your username.."
                                className="px-8 py-3 w-full bg-gray-200"
                                autoComplete="off"
                                name="username"
                                value={signupDetails.username}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className="my-5 w-1/3 text-black">email
                            <input 
                                type="email"
                                placeholder="enter your email.."
                                className="px-8 py-3 w-full bg-gray-200"
                                autoComplete="off"
                                name="email"
                                value={signupDetails.email}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className="my-5 w-1/3 text-black">password
                            <input 
                                type="password"
                                placeholder="enter your password.."
                                className="px-8 py-3 w-full bg-gray-200"
                                autoComplete="off"
                                name="password"
                                value={signupDetails.password}
                                onChange={handleFormChange}
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