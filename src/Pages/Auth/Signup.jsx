import { Link } from "react-router-dom"
import { useState } from "react";

export default function Signup(){

    const [singupDetails, setSignupDetails] = useState({
            email: '',
            password: '',
            username: ''
        });
    
    function handleFormChange(e){
        const {name, value} = e.target;
        setSignupDetails({
            ...singupDetails,
            [name]: value
        })
    }

    function onFormSubmit(e){
        e.preventDefault();
        console.log(singupDetails)
    }

    return(
        <div className="h-[100vh] flex flex-col items-center justify-center">
            <div>
                <h1 className="text-3xl">Create account</h1>
            </div>
            <div className="mt-4">
                <p>
                    Already have an account ?
                    <Link to='/signin'>
                        <button className="btn bg-green-400 rounded-md px-2 py-1 m-2 hover:bg-green-600">
                        SingIn   
                        </button>
                    </Link>
                </p>    
            </div>
            <div className="w-full">
                <form onSubmit={onFormSubmit} className="flex flex-col justify-center items-center mx-auto w-3/4">
                    <div className="my-5 w-1/3">username
                        <input 
                            type="text"
                            placeholder="enter your username.."
                            className="px-8 py-3 w-full bg-gray-200"
                            autoComplete="off"
                            name="username"
                            value={singupDetails.username}
                            onChange={handleFormChange}
                        />
                    </div>
                    <div className="my-5 w-1/3">email
                        <input 
                            type="email"
                            placeholder="enter your email.."
                            className="px-8 py-3 w-full bg-gray-200"
                            autoComplete="off"
                            name="email"
                            value={singupDetails.email}
                            onChange={handleFormChange}
                        />
                    </div>
                    <div className="my-5 w-1/3">password
                        <input 
                            type="password"
                            placeholder="enter your password.."
                            className="px-8 py-3 w-full bg-gray-200"
                            autoComplete="off"
                            name="password"
                            value={singupDetails.password}
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
    )
};