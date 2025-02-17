import BookImage from 'src/Assets/Images/book_img.png'
import { FaRegUserCircle } from "react-icons/fa";

export default function BookCard({title, author, description}){
    return(
        <div className="mt-5 card card-side bg-gray-700 h-60 w-9/12 shadow-md">
            <figure className='h-full'>
                <img
                src={BookImage}
                alt="Movie" />
            </figure>
            <div className="card-body ml-10">
                <h2 className="card-title text-white text-5xl">{title}</h2>
                <div className='mt-16 flex justify-between items-center'>
                    <div className='flex flex-col text-white gap-2'>
                        <div className='text-xl flex justify-start gap-3 items-center'>
                            <div>
                                <FaRegUserCircle />
                            </div>
                            <div>
                                {author}
                            </div>
                        </div>
                        <div className='text-xl'>{description}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary text-white">More Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}