import "./HowTo.scss";
import sampleVideo from "../../assets/videos/sampleVideo.mp4"
import samplePhoto from "../../assets/3306588.jpg"

const HowTo = () => {
    return <div className="container">
        <h2>How to use</h2>
        <div className="videos">
            <video controls poster={samplePhoto}>
                <source src={sampleVideo} type="video/mp4"/>
            </video>
            <video controls poster={samplePhoto}>
                <source src={sampleVideo} type="video/mp4"/>
            </video>
        </div>
    </div>;
}

export default HowTo;