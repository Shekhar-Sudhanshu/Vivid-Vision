import "./About.scss";
import { NavLink } from "react-router-dom";

const About = () => {
    return <div className="about-container">
        <div className="text">
            <p>Welcome to Vivid Vision, where innovation meets accessibility. We specialize in cutting-edge control systems that transform how you interact with technology. Our two primary products—Hand Gesture Control System and Eye Control System—are designed to create seamless, intuitive experiences for users of all abilities.
            <br /><br />
            Our Hand Gesture Control System leverages advanced sensors and machine learning algorithms to interpret your hand movements with precision. Whether you're navigating applications, playing games, or controlling smart devices, our system allows for effortless interaction without the need for traditional input methods. With a focus on user-friendly design, our technology empowers you to control your digital environment with simple gestures, enhancing productivity and making technology more accessible.
            <br /><br />
            Imagine controlling your devices simply by looking at them. Our Eye Control System utilizes state-of-the-art eye-tracking technology to translate your gaze into commands. This revolutionary system is particularly beneficial for individuals with mobility challenges, providing a new level of independence. Whether you’re composing emails, browsing the web, or controlling smart home features, our Eye Control System ensures you stay connected and in control.
            <br /><br />
            At Vivid Vision, our mission is to break down barriers and create more inclusive technology. We believe everyone should have the ability to engage with their digital world, regardless of physical limitations. Through our innovative products, we aim to enhance the way people interact with technology, making it more intuitive and accessible.
            <br /><br />
            Explore the future of interaction with our Hand Gesture and Eye Control Systems. We invite you to join us on this journey towards a more connected, user-friendly world. For more information or to request a demo, please contact us today!
            </p>
        </div>
        <div className="side-container">
            <div className="products">
                <p><NavLink to="/category/">Our Products</NavLink></p>
            </div>
            <div className="tutorials">
                <p><NavLink to="/howto/">Tutorials</NavLink></p>
            </div>
        </div>
    </div>;
}

export default About;