import { Routes, Route } from "react-router-dom"
import NotFound from "src/Pages/NotFound"
import Home from "src/Pages/Home";

function MainRoutes(){
    return(
        <Routes>
            <Route path ="/" element={<Home />} />
            <Route path = "*" element = {<NotFound />}></Route>
        </Routes>
    )
}

export default MainRoutes;