import "./Products.scss";
import Product from "./Product/Product";
import handImg from "../../assets/products/hand_gesture_img.jpg"
import eyeImg from "../../assets/products/eye gesture.png"
import comingSoonImg from "../../assets/products/coming_soon.jpg"

const Products = ({headingText}) => {
    return <div className="products-container">
        <div className="sec-heading">{headingText}</div>
        <div className="products">
            <Product redirect = "/product/handGesture" image = {handImg} id="hand" name="Hand Gesture System Control System" />
            <Product redirect = "/product/eyeMotion" image = {eyeImg} id="eye" name="Eye Motion Control System"/>
            <Product image = {comingSoonImg} />
            {/* <Product/> */}
        </div>
    </div>;
};

export default Products;
