import BookImage from 'src/Assets/Images/book_img.png'
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function BookCard({data}){

    const navigate = useNavigate();
    return(
        <div className="mt-5 card md:card-side bg-gray-700 md:h-60 w-full shadow-md">
            <figure className='h-full'>
                <img className='h-1/5 md:h-full'
                src={BookImage}
                alt="Movie" />
            </figure>
            <div className="card-body ml-10">
                <h2 className="card-title text-white text-5xl">{data.title}</h2>
                <div className='mt-16 flex justify-between items-center gap-12 md:gap-4'>
                    <div className='flex flex-col text-white gap-2'>
                        <div className='text-xl flex justify-start gap-8 md:gap-5 items-center'>
                            <div>
                                <FaRegUserCircle />
                            </div>
                            <div>
                                {data.author?.name}
                            </div>
                        </div>
                        <div className='text-xl'>{data.description}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <button 
                        onClick={() => {
                            navigate(`/book/description`, {
                                state: {...data}
                            })
                        }}
                        className="btn btn-primary text-white">
                            More Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}