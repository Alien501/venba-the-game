import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './HeroSection.css';
import heroImg from '../../assets/hero-art.webp';
import heroLogo from '../../assets/venba-logo.webp';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {

    useEffect(() => {
        gsap.to('.hero-logo', {
            y: -50,
            scrollTrigger: {
                trigger: '.hero-section-wrapper',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });

        gsap.to('.hero-bg', {
            y: 50,
            scrollTrigger: {
                trigger: '.hero-section-wrapper',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });

        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const deltaX = (clientX - centerX) / 100;
            const deltaY = (clientY - centerY) / 100;

            gsap.to('.hero-logo', {
                x: -deltaX,
                y: -deltaY,
                duration: 0.5
            });

            gsap.to('.hero-bg', {
                x: deltaX,
                y: deltaY,
                duration: 0.5
            });
        };

        const heroSection = document.querySelector('.hero-section-wrapper');
        heroSection.addEventListener('mousemove', handleMouseMove);

        return () => {
            heroSection.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // intial Animation
    useGSAP(() => {
        const tl = gsap.timeline({ duration: .8 });

        tl.fromTo(
            '.hero-bg',
            {
                top: '-50vh'
            },
            {
                top: 0,
                duration: 1
            }
        ).fromTo(
            '.hero-logo-wrapper',
            {
                left: '-100vw'
            },
            {
                left: 0,
                ease: 'sine.inOut'
            }
        )
    })

    return(
        <section className="hero-section-wrapper">
            <img src={heroImg} alt="Hero Background" className="hero-bg" />
            <div className="hero-logo-wrapper">
                <img src={heroLogo} alt="Hero Logo" className="hero-logo" />
            </div>
        </section>
    )
};

export default HeroSection;
