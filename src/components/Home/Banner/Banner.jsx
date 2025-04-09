import "./Banner.scss";
import PNGEGG from "../../../assets/AI.png"
import { NavLink } from "react-router-dom";


const Banner = () => {
    return (
    <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>Vivid Vision</h1>
                <p>
                    Begin your joumey with the digital world , enhance your speed of
                    and use the virtual tools to empower your journey with
                    technology.
                </p>
                <div className="ctas">
                    <div className="banner-cta">
                        <NavLink to="/about/" >About</NavLink>
                    </div>
                    <div className="banner-cta v2">
                    <NavLink to="/category/" >Categories</NavLink>
                    </div>
                </div>
            </div>
            <img className="banner-img" src={PNGEGG} alt="" />
        </div>
    </div>
    );
};

export default Banner;
