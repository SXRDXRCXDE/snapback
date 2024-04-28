import React, {useEffect, useRef, useState} from "react";
import style from "./style.module.css";
import banner from "../../assets/img/Banner.png";
import {IoMdClose} from "react-icons/io";
import memewar from "../../assets/videos/final edit 4.mp4";
import {FaPause, FaPlay} from "react-icons/fa";

export default function About() {

    const [isPlay,setPlay] = useState(false);
    const videoRef = useRef(null); // Create a reference to the video element

    useEffect(() => {
        // Check if videoRef.current exists before accessing its properties
        if (videoRef.current) {
            // Play or pause the video based on the videoPlay state
            if (isPlay) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }, [isPlay]);

    return<>
        <div  className={style.container}>

            <div data-aos="zoom-out" className={'w-[1000px] h-[644px] bg-[#72D360] rounded-2xl px-[92px] pt-[42px] flex flex-col items-center z-50 relative max-[950px]:hidden'}>

                <img src={banner} className={'w-full max-w-[900px] h-fit max-h-[291px] object-contain'}/>


                <div className={'w-full flex items-start gap-2 mt-[30px]'}>

                    <div className={'w-56 h-auto relative'}>

                        <div style={{fontFamily:`Russo One`}} className={'text-[69px] tracking-[2px] absolute -rotate-90 -left-[88px] top-[85px]'}>BUFFY</div>

                    </div>

                    <div className={'w-auto h-auto text-start'}>

                        <p style={{fontFamily:`Russo One`}} className={'text-[28px] leading-[38px] translate-y-2'}>
                            $buffy, solana NATIVE DOG COIN, known to be vladimir putins dog. buffy just pretends, in reality he is the boss and putin is his dog.<br/><br/>

                            START A MEME COIN WAR now BLyaD!<br/><br/>

                            bow down or get rolled over!
                        </p>

                    </div>

                </div>

                <div style={{boxShadow:`3px 3px 1px 0 #b0a6a5`}} className={'w-[58px] h-[55px] rounded-lg bg-white flex items-center justify-center absolute bottom-5 right-5'}>
                    <IoMdClose className={'text-4xl opacity-65'} />
                </div>

            </div>

            <div className={'min-[950px]:hidden flex flex-col items-center '}>

                <div data-aos="zoom-out" className={'w-[300px] h-[210px] bg-[#0A9CAB]/30 rounded-xl flex flex-col items-center overflow-hidden p-[2px]'}>

                    <video  ref={videoRef} // Assign the reference to the video element
                            autoPlay={true} loop={true} preload={true} muted={true} className={'w-full h-[140px] object-cover rounded-xl '}>
                        <source src={memewar} type={'video/mp4'}/>
                    </video>

                    <div className={'flex items-center gap-3 mt-2'}>
                        <div onClick={()=>setPlay(true)} className={` ${isPlay?`bg-[#0A9CAB]` : `bg-[#72D360]`} px-6 py-3 text-xl rounded-lg duration-200 `}>
                            <FaPlay className={'translate-x-0.5 text-white'} />
                        </div>
                        <div onClick={()=>setPlay(false)} className={` ${isPlay? `bg-[#72D360]` : `bg-[#0A9CAB]`} px-6 py-3 text-xl rounded-lg duration-200 `}>
                            <FaPause className={' text-white'} />
                        </div>
                    </div>

                </div>

                <div data-aos="zoom-out" style={{fontFamily:`Russo One`}} className={'px-4 py-1 bg-[#72D360] mt-4 rounded-xl text-[21px] uppercase '}>
                    about $buffy
                </div>

                <div data-aos="zoom-out" style={{fontFamily:`Russo One`}} className={'mt-3 max-w-[300px] w-full h-auto p-2 text-start text-[18px] uppercase bg-white rounded-xl'}>
                    $buffy, solana NATIVE DOG COIN, known to be vladimir putins dog. buffy just pretends, in reality he is the boss and putin is his dog.<br/><br/>

                    START A MEME COIN WAR now BLyaD!<br/><br/>

                    bow down or get rolled over!
                </div>

            </div>


        </div>
    </>

}