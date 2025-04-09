import { useEffect, useState } from "react";
import "./Header.scss";
import Search from "./Search/Search";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "./Header.scss";
const Header = () => {
    const[scrolled,setScrolled] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const handleScroll = () =>{
        const offset = window.scrollY;
        if(offset>200){
            setScrolled(true);
        }
        else{
            setScrolled(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
    },[]);

    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : ' '}`}>
                <div className="header-content">
                    <ul className="left">
                        <NavLink to="/">Home</NavLink>
                        {/* <li>Home</li> */}
                        <NavLink to="/about/">About</NavLink>
                        {/* <li>About</li> */}
                        <NavLink to="/category/">Categories</NavLink>
                        {/* <li>Categories</li> */}
                        <NavLink to="/howto/">How To</NavLink>
                        {/* <li>How To</li> */}
                    </ul>
                    <div className="center">VIVID VISION</div>
                    <div className="right">
                        <FaRegUserCircle />
                    </div>
                </div> 
            </header>
            {
                showSearch && <Search setShowSearch={setShowSearch}/>
            }
        </>
    );
};

export default Header;
