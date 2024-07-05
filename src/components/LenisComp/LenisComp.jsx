import ReactLenis from "lenis/react";


const LenisComp = ({ children }) => {
    return(
        <ReactLenis root options={
            {
                lerp: 1.5,
                duration: 3.5,
                smoothTouch: true,
            }
        }   >
            {
                children
            }
        </ReactLenis>
    )
};

export default LenisComp;