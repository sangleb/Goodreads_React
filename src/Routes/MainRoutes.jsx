import { Routes, Route } from "react-router-dom"
import NotFound from "src/Pages/NotFound"
import Home from "src/Pages/Home";
import Signup from "src/Pages/Auth/Signup";
import Signin from "src/Pages/Auth/Signin";

function MainRoutes(){
    return(
        <Routes>
            <Route path ="/" element={<Home />} />
            <Route path ="/signup" element={<Signup />} />
            <Route path ="/signin" element={<Signin />} />
            <Route path = "*" element = {<NotFound />}></Route>
        </Routes>
    )
}

export default MainRoutes;