import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/Context";
import About from "./components/About/About";
import HowTo from "./components/HowTo/HowTo";

function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about/" element={<About/>} />
                    <Route path="/category/" element={<Category/>} />
                    <Route path="/howto/" element={< HowTo/>} />
                    <Route path="/product/:id" element={<SingleProduct/>} />
                </Routes>
                <Newsletter/>
                <Footer/>
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
