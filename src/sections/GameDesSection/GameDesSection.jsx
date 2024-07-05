import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomEase from 'gsap/CustomEase';
import gsap from 'gsap';
import './GameDesSection.css';
import { useRef, useEffect } from 'react';
import SplitType from 'split-type';
import fb from '../../assets/bg.webp'


gsap.registerPlugin(ScrollTrigger);


const GameDesSection = () => {
    const borderRef = useRef();

    useEffect(() => {
        if (!borderRef.current) return;
        
        const path = borderRef.current.querySelector('path');
        let pathLength = path.getTotalLength();
    
        path.style.strokeDasharray = pathLength + ' ' + pathLength;
        path.style.strokeDashoffset = pathLength;
    
        gsap.fromTo(path, 
          { strokeDashoffset: pathLength },
          {
            strokeDashoffset: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: '.game-des-container',
              start: 'top bottom',
              end: 'center center',
            //   markers: true,
              scrub: true,
              onLeaveBack: () => {
                  const des = document.querySelector('.des-content-container');
                  des.classList.remove('done');
                }
            },
            onComplete: () => {
                const des = document.querySelector('.des-content-container')
                des.classList.add('done');
            },
          },
        );
      }, []);

      useEffect(() => {
        const hOneElements = document.querySelector('.des-head-container h1');
        const desParaElements = document.querySelector('.des-content-container p');
    
        if (hOneElements && desParaElements) {
          const hOne = new SplitType(hOneElements);
          const desPara = new SplitType(desParaElements);
    
          const desTimeLine = gsap.timeline({
            scrollTrigger: {
              trigger: '.des-content-container',
            //   markers: true,
            }
          });
    
          desTimeLine.fromTo(
            hOne.words,
            {
              y: '100px',
              rotate: 145,
              opacity: 0
            },
            {
              opacity: 1,
              y: 0,
              rotate: 0,
              duration: 1,
              stagger: 0.3,
              ease: CustomEase.create("custom", "M0,0 C0.126,0.382 0.084,1.138 0.243,1.286 0.434,1.466 0.818,1.001 1,1 ")
            }
          ).fromTo(
            desPara.lines,
            {
              opacity: 0,
            },
            {
              opacity: 1,
              duration: 1,
              stagger: 0.3
            },
            '-=0.5'
          );
        }
      }, []);

    return(
        <section className="game-des-container">
            <div className="des-head-container">
                <h1>Idlis, Dosas, and Biriyanis!!!</h1>
            </div>
            <div className="des-content-container">
            <p>
                Venba is a narrative cooking game where you play as an Indian mom who immigrates to Canada with her family in the 1980s. Players will cook various dishes and restore lost recipes, hold branching conversations and explore in this story about family, love, loss and more.
            </p>
            <svg ref={borderRef} viewBox="0 0 120 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className='border-svg'>
                <path d="
                    M 5 0
                    H 115 
                    A 5 5 0 0 1 120 5
                    V 115 
                    A 5 5 0 0 1 115 120
                    H 5 
                    A 5 5 0 0 1 0 115
                    V 5 
                    A 5 5 0 0 1 5 0
                    Z" 
                    fill="none" />
            </svg>
            </div>

            <iframe className='des-if' src="https://www.youtube.com/embed/fM6qjSc-G2w?controls=0" frameborder="0" >
            </iframe>
        </section>
    )
};


export default GameDesSection;