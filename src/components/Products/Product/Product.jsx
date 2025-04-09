import "./Product.scss";
import { NavLink } from "react-router-dom";

const Product = (prop) => {
    return <div className="product-card">
        <div className="thumbnail">
            <NavLink to={prop.redirect}>
                <img src={prop.image} alt="" id={prop.id} />
            </NavLink>
        </div>

        <div className="product-details">
            <span className="name">{prop.name}</span>
            {/* <span className="price">₹ Product Price</span> */}
        </div>
    </div>;
};

export default Product;
