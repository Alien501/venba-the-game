import Marquee from "react-fast-marquee"

import img0 from '../../assets/header.webp'
import img1 from '../../assets/1.webp'
import img2 from '../../assets/2.webp'
import img3 from '../../assets/3.webp'
import img4 from '../../assets/4.webp'
import img5 from '../../assets/5.webp'
import img6 from '../../assets/6.webp'
import img7 from '../../assets/7.webp'
import img8 from '../../assets/8.webp'
import img9 from '../../assets/9.webp'

import './Slider.css';

const Slider = () => {

    const imList = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9];

    return(
        <div className="slider-container">
            <Marquee autoFill pauseOnClick pauseOnHover speed={40}>
                {
                    imList.map((i, k) => 
                        <img src={i} key={k} className="slider-image" />
                    )
                }
            </Marquee>
        </div>
    )
}

export default Slider;