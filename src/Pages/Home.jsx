import logo from 'src/Assets/Images/logo.png'
import { Link } from 'react-router-dom';


function Home(){
    return (
        <div className='flex flex-col items-center justify-center gap-40 h-[100vh] bg-gray-100'>
            <div className='h-40 w-50'>
                <img className='w-full h-full'
                    src={logo} 
                    alt="logo"
                />
            </div >
            <div className='flex justify-around items-center gap-16'>
                <div className='w-2/4 text-center font-semibold text-3xl basis-1/2'>
                    <h1 className='text-5xl tracking-widest leading-normal text-black'>
                        BookShelf <br></br>
                        <span className='text-red-400'>Your Personal library and social network for bookworms</span>
                    </h1>
                </div>

                <div>
                    <Link to='/signup'>
                        <button className='bg-blue-500 text-white py-2 px-4 rounded text-xl cursor-pointer'>
                            Register
                        </button>
                    </Link>
                    <Link to='/signin'>
                        <button className='bg-green-500 text-white mx-3 py-2 px-4 rounded text-xl cursor-pointer'>
                            Login
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Home;
