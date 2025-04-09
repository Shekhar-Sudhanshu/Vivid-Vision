import React from "react";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa"
import "./Footer.scss";
import Payment from "../../assets/payments.png"


const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="fotcol">
                <div className="fottitle">About</div>
                <div className="fottext">We specialize in cutting-edge control systems that transform how you interact with technology</div>
            </div>
            <div className="fotcol">
                <div className="fottitle">Contact</div>
                <div className="c-items">
                    <FaLocationArrow/>
                    <div className="fottext">
                        Sadar, Near Kali Mandir, Jabalpur MP,482001
                    </div>
                </div>
                <div className="c-items">
                    <FaMobileAlt/>
                    <div className="fottext">
                        Phone : 1234567890
                    </div>
                </div>
                <div className="c-items">
                    <FaEnvelope/>
                    <div className="fottext">
                        Email : sample@gmail.com
                    </div>
                </div>
            </div>
            <div className="fotcol">
                <div className="fottitle">Categories</div>
                <span className="fottext">Hand Gesture</span>
                <span className="fottext">Eye Motion</span>
            </div>
            <div className="fotcol">
                <div className="fottitle">Pages</div>
                <span className="fottext">About Us</span>
                <span className="fottext">How To</span>
                <span className="fottext">Categories</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="fottext">
                    ©Vivid Vision, All Rights Reserved
                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </footer>;
};

export default Footer;
