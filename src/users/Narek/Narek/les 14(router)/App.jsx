import { useEffect , useState } from "react";
import { Route , Routes } from "react-router";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import ROUTES from "./routes/ROUTES.JS";
import ErrorPage from "./pages/404";
import './index.scss'
import Album from "./pages/Album";

export default function App() {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path={ROUTES.HOME} element={<Home />}/>
                <Route path={ROUTES.ABOUT} element={<About />}/>
                <Route path='about/:id' element={<Album />}/>
                <Route path={ROUTES.ALBUM} element={<Album />}/>
                <Route path={ROUTES[404]} element={<ErrorPage />}/>
            </Routes>
            
            

        </div>
    )
}