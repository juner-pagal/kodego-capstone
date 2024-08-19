import Marquee from "react-fast-marquee";
import image1 from "../assets/images/marquee/one.png";
import image2 from "../assets/images/marquee/two.png";
import image3 from "../assets/images/marquee/three.png";
import image4 from "../assets/images/marquee/four.png";
import image5 from "../assets/images/marquee/five.png";
import image6 from "../assets/images/marquee/six.png";
import image7 from "../assets/images/marquee/seven.png";
import image8 from "../assets/images/marquee/eight.png";
import image9 from "../assets/images/marquee/nine.png";
import image10 from "../assets/images/marquee/ten.png";

function MarqueeSection() {
    return (
        <>
            <Marquee className="marquee-style mt-4 mb-5" play>
                <img src={image1} alt="..."/>
                <img src={image2} alt="..."/>
                <img src={image3} alt="..."/>
                <img src={image4} alt="..."/> 
                <img src={image5} alt="..."/>
                <img src={image6} alt="..."/>
                <img src={image7} alt="..."/>
                <img src={image8} alt="..."/>
                <img src={image9} alt="..."/>
                <img src={image10} alt="..."/>
            </Marquee>
        </>
    )
}

export default MarqueeSection;