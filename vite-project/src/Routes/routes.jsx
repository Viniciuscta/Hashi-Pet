
import Home from "../Pages/Home/Home"
import Aplicativo from "../Pages/aplicativo/aplicativo"
import Contato from "../Pages/Contato/Contato"
import { BrowserRouter, Route,Routes } from "react-router-dom";

 function AppRoutes() {
    return(
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/> }/>
            <Route path="/aplicativo" element={<Aplicativo/> }/>
            <Route path="/contato" element={<Contato/> }/>
        </Routes>
    </BrowserRouter>
    </>
    )
}
export default AppRoutes