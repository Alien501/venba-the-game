import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { useEffect } from 'react';

import './GameDesCard.css';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

const GameDesCard = ({headingText, pngImage, videoSrc, hOneText, pText, no}) => {

    useGSAP(() => {
        gsap.to(
            `.gt-img-${no}`,
            {
                y: -30,
                scrollTrigger: {
                    trigger: `.card-${no}`,
                    // markers: true,
                    start: 'top center',
                    end: 'bottom top',
                    scrub: true
                }
            }
        )

        gsap.to(
            `.h-${no}`,
            {
                y: 30,
                scrollTrigger: {
                    trigger: `.card-${no}`,
                    // markers: true,
                    start: 'top center',
                    end: 'bottom top',
                    scrub: true
                }
            }
        )


    });

    return(
        <div className={`game-text-card-container card-${no}`}>
            <div className="game-text-title-container">
                <h1 className={`game-text-head h-${no}`}>
                    {headingText}
                </h1>
                <div className="game-text-image">
                    <img src={pngImage} alt="" className={`gt-img-${no}`} />
                </div>
            </div>
            <div className="game-text-content-wrapper">
                <div className="game-text-video-container">
                    <video autoPlay  muted loop src={videoSrc}></video>
                </div>
                <div className="game-text-text-container">
                    <h1>
                        {hOneText}
                    </h1>
                    <p>
                        {pText}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default GameDesCard;