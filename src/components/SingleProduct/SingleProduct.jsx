import { useParams } from "react-router-dom";
import handImg from "../../assets/products/hand_gesture_img.jpg"
import eyeImg from "../../assets/products/eye gesture.png"
import RelatedProducts from "./RelatedProducts/RelatedProducts";

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import { useEffect, useState } from "react";

const fetchFromId = (id) => {
    var data = {};
    if(id === "handGesture"){
        data["name"] = "Hand Gesture Control System";
        data["price"] = "";
        data["desc"] = "The Hand Gesture Control System allows users to interact with devices effortlessly using intuitive hand gestures. With advanced gesture recognition technology, it offers a seamless experience for smart home automation, gaming, and more, enhancing accessibility and productivity without the need for physical controls. Embrace the future of interaction at your fingertips!"
        data["imageURL"] = handImg;
        data["imgId"] = "handGestureId"
    }
    else if(id === "eyeMotion"){
        data["name"] = "Eye Motion Control System";
        data["price"] = "";
        data["desc"] = "The Eye Motion Control System enables users to interact with devices simply by using their eye movements. With advanced tracking technology, it allows for hands-free control in various applications, enhancing accessibility and convenience. Experience the power of your gaze and transform how you engage with technology!"
        data["imageURL"] = eyeImg;
        data["imgId"] = "eyeMotionId"
    }

    return JSON.stringify(data);
}

const SingleProduct = () => {
    const {id} = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            const JSONdata  = fetchFromId(id);
            var data = JSON.parse(JSONdata);
            setData(data);
        }

        fetchData();
    }, [id]);

    if (!data) {
        return <p>Loading...</p>;
    }

    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={data.imageURL} alt="" id={data.imgId}/>
                </div>
                <div className="right">
                    <span className="name">{data.name}</span>
                    <span className="price">{data.price}</span>
                    <span className="description">{data.desc}</span>

                    <div className="cart-buttons">
                        <button className="add-to-cart-button">
                            <FaCartPlus size={20}/>
                            Download
                        </button>
                    </div>

                    <span className="divider" />

                    <div className="info-item">
                        <span className="text-bold">Category:
                            <span> Software</span>
                        </span>
                        <span className="text-bold">Share :
                            <span className="social-icons">
                                <FaFacebookF size={16}/>
                                <FaTwitter size={16} />
                                <FaInstagram size={16}/>
                                <FaLinkedinIn size={16}/>
                                <FaPinterest size={16}/>
                            </span>
                        </span>
                        
                    </div>
                </div>
            </div>
            <RelatedProducts/>
        </div>
    </div>;
};

export default SingleProduct;

