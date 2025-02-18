import { useLocation } from "react-router-dom";
import Layout from "src/Layouts/Layout";
import BookImage from 'src/Assets/Images/book_img.png';
import { FaRegUserCircle } from "react-icons/fa";

export default function BookDescription(){

    const {state} = useLocation();
    return (
        <Layout >
            {
                state && state._id ? (
                    <div className="my-5 flex items-start justify-center gap-3 flex-col md:flex-row">
                        <div className="basis-1/3">
                            <img className="w-full" src={BookImage} alt="book image" />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-10">
                            <div className="text-white text-4xl">
                                {state.title}
                            </div>
                            <div className="text-white text-xl w-3/4 text-yellow-400">
                                {state.description}
                            </div>
                            <div className='text-xl flex justify-start gap-3 items-center'>
                                <div>
                                    <FaRegUserCircle />
                                </div>
                                <div>
                                    {state.author?.name}
                                </div>
                            </div>
                            <div className="tabs tabs-boxed flex justify-start items-start flex-wrap gap-3">
                                {state.genres.map((genre) => {
                                    return <div key={genre._id} className="tab tab-active text-xl">{genre.name}</div>
                                })}
                            </div>
                            <div className="text-xl">
                                pages: <span className="text-yellow-400">{state.pages}</span>
                            </div>
                            <div className="text-xl">
                                Publish Date: <span className="text-yellow-400">{state.publishDate}</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-white text-center mt-10">
                        <p>No book data available</p>
                        <p>Please select a book from the list</p>
                    </div>
                )
            }
        </Layout>
    )
}