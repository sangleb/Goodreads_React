import { Link } from "react-router-dom"

export default function Signin(){
    return(
        <div className="h-[100vh] flex flex-col items-center justify-center">
            <div>
                <h1 className="text-3xl">Login to your account</h1>
            </div>
            <div className="mt-4">
                <p>
                    Don't have an account ?
                    <Link to='/signup'>
                        <button className="btn bg-green-400 rounded-md px-2 py-1 m-2 hover:bg-green-600">
                        SingUp
                        </button>
                    </Link>
                </p>    
            </div>
            <div className="w-full">
                <form className="flex flex-col justify-center items-center mx-auto w-3/4">
                    <div className="my-5 w-1/3">email
                        <input 
                            type="email"
                            placeholder="enter your email.."
                            className="px-8 py-3 w-full bg-gray-200"
                            autoComplete="off"
                        />
                    </div>
                    <div className="my-5 w-1/3">password
                        <input 
                            type="password"
                            placeholder="enter your password.."
                            className="px-8 py-3 w-full bg-gray-200"
                            autoComplete="off"
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