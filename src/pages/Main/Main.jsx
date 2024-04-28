import React, {useEffect, useRef, useState} from "react";
import style from "./style.module.css";
import memewar from "../../assets/videos/final edit 4.mp4";
import {FaPause, FaPlay} from "react-icons/fa";
import AOS from "aos";
import ContractAddress from "../../components/ContractAddress/ContractAddress";

export default function Main() {

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
        <div className={style.container}>

            <div data-aos="zoom-out" className={'w-[300px] h-[210px] bg-[#0A9CAB]/30 rounded-xl flex flex-col items-center overflow-hidden p-[2px] min-[950px]:hidden'}>

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


            <div data-aos="zoom-out" style={{fontFamily:`Russo One`}} className={'px-4 py-1 bg-[#72D360] mt-4 rounded-xl text-[21px] uppercase min-[950px]:hidden '}>
                about $buffy
            </div>



            <div data-aos="zoom-out" style={{fontFamily:`Russo One`}} className={'mt-3 max-w-[300px] w-full h-auto p-2 text-start text-[14px] uppercase bg-white rounded-xl min-[950px]:hidden'}>
                $buffy, solana NATIVE DOG COIN, known to be vladimir putins dog. buffy just pretends, in reality he is the boss and putin is his dog.<br/>

                START A MEME COIN WAR now BLyaD!<br/>

                bow down or get rolled over!
            </div>

            <div className={'min-[950px]:hidden mt-4'}>
                <ContractAddress/>
            </div>

        </div>
    </>

}