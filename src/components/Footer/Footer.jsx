import './Footer.css';

import company from '../../assets/company.webp';


const Footer = () => {
    return(
        <footer>
            <div className="comapny-logo-container">
                <img src={company} className="comp" />
            </div>
            <div className="cop-text">
                <p>
                    &#169; 2024 Visai games
                </p>
            </div>
            <div className="social-link-container">
                <a href="https://venbagame.com/press/" target='_' className="social-link">
                    Presskit
                </a>
                <a href="https://twitter.com/venbaGame" target='_' className="social-link">
                    X
                </a>
                <a href="https://www.tiktok.com/@venbagame" target='_' className="social-link">
                    Tiktok
                </a>
                <a href="https://store.steampowered.com/app/1491670/Venba/" target='_' className="social-link">
                    Steam
                </a>
            </div>
        </footer>
    )
};

export default Footer;