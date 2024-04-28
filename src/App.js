import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import Links from "./components/Links/Links";
import ContractAddress from "./components/ContractAddress/ContractAddress";
import memewar from "./assets/videos/final edit 4.mp4";
import React, {useEffect, useRef} from "react";
import {useSelector} from "react-redux";
import About from "./pages/About/About";
import Tokenomics from "./pages/Tokenomics/Tokenomics";
import AOS from "aos";
import "aos/dist/aos.css";
import back_image from "./assets/img/imageBackground.png";

function App() {

    const videoRef = useRef(null); // Create a reference to the video element

    const videoPlay = useSelector((state) => state.videoPlay.videoPlay);

    useEffect(() => {
        // Check if videoRef.current exists before accessing its properties
        if (videoRef.current) {
            // Play or pause the video based on the videoPlay state
            if (videoPlay) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }

        AOS.init({duration: 1000});
    }, [videoPlay]); // Run this effect whenever videoPlay changes

    return (
        <div className="App">
            <Header/>
            <Links/>
            {window.innerWidth < 950? `` : <ContractAddress/> }

            <video data-aos="zoom-out" ref={videoRef} // Assign the reference to the video element
                   autoPlay={true} loop={true} preload={true} muted={true} className={'w-full h-screen max-[950px]:hidden object-cover absolute top-0 left-0 -z-10'}>
                <source src={memewar} type={'video/mp4'}/>
            </video>
            <img style={{height:`${window.innerHeight}px`}} className={'min-[950px]:hidden w-fit min-h-screen  object-cover object-center absolute top-0 left-0 -z-10'} src={back_image}/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/tokenomics'} element={<Tokenomics/>}/>
            </Routes>
        </div>
    );
}

export default App;
