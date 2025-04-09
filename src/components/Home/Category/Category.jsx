import "./Category.scss";
import cat1 from "../../../assets/category/1.png"
import cat2 from "../../../assets/category/2.png"
import cat3 from "../../../assets/category/3.png"
import cat4 from "../../../assets/category/4.png"
const Category = () => {
    return <div className="shop-by-category">
        <div className="categories">
            <div className="category">
                <img src={cat1} alt="" />
            </div>
            <div className="category">
                <img src={cat2} alt="" />
            </div>
            <div className="category">
                <img src={cat3} alt="" />
            </div>
            <div className="category">
                <img src={cat4} alt="" />
            </div>
        </div>
    </div>;
};

export default Category;
