import Navbar from "src/Components/Navbar/Navbar";
import Footer from "src/Components/Footer/Footer";


export default function Layout({children}){
    return(
        <>
            <Navbar />
                <div className="flex h-[90vh] items-start justify-center ">
                    <div className="w-9/12">
                        {children}
                    </div>
                </div>
            <Footer />
        </>
    )
}