import React, {useEffect, useRef, useState} from "react";
import style from "./style.module.css";
import {setVideo} from "../../store/actions/videoPlayAction";
import banner from "../../assets/img/Banner_putin.png";
import {Link} from "react-router-dom";
import {IoMdClose} from "react-icons/io";
import memewar from "../../assets/videos/final edit 4.mp4";
import {FaPause, FaPlay} from "react-icons/fa";
import ContractAddress from "../../components/ContractAddress/ContractAddress";
import {useDispatch, useSelector} from "react-redux";
import putin_coin from "../../assets/img/Putin-Coin 1.png";

export default function BurnEarn() {

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


    const dispatch = useDispatch();
    const isVideo = useSelector((state)=> state.videoPlay.videoPlay)

    return<>
        <div onClick={()=>dispatch(setVideo(!isVideo))} className={style.container}>

            <div onClick={(e)=>e.stopPropagation()} data-aos="zoom-out" className={'w-[1000px] h-[644px] bg-[#72D360] rounded-2xl px-[92px] pt-[42px] flex flex-col items-center z-50 relative max-[950px]:hidden'}>

                <img src={banner} className={'w-full max-w-[900px] h-fit max-h-[291px] object-contain'}/>


                <div className={'w-full flex items-start gap-2 mt-[30px]'}>

                    <div className={'w-56 h-auto relative'}>

                        <div style={{fontFamily:`Russo One`}} className={'text-[69px] tracking-[2px] absolute -rotate-90 -left-[88px] top-[85px]'}>PUTIN</div>

                    </div>

                    <div className={'w-auto h-auto text-start'}>

                        <p style={{fontFamily:`Russo One`}} className={'text-[28px] leading-[29px] translate-y-2 uppercase'}>
                            burn $buffy worth at least 1 sol and receive 3 times the amount of putin coins.<br/><br/>

                            example: burn 200,000 $buffy = 1 sol and get 600,000 $putin coins.<br/><br/>

                            putin coin: no pre sale, no tax, lp burned and direct launch at 2-3k market cap!
                        </p>

                    </div>

                </div>

                <Link to={'/'} style={{boxShadow:`3px 3px 1px 0 #b0a6a5`}} className={'w-[58px] h-[55px] rounded-lg bg-white flex items-center justify-center absolute bottom-5 right-5'}>
                    <IoMdClose className={'text-4xl opacity-65'} />
                </Link>

            </div>

            <div onClick={(e)=>e.stopPropagation()} className={'min-[950px]:hidden flex flex-col items-center '}>

                <div className={'flex items-center justify-center w-[110px] h-10 mt-3 rounded-lg relative bg-[#014CAE] translate-x-4 '}>

                    <img src={putin_coin} className={'w-[60px] h-[60px] object-contain absolute -left-12'}/>
                    <span style={{fontFamily:`Russo One`}} className={'uppercase text-[18px]'}>$putin</span>

                </div>

                <div data-aos="zoom-out" style={{fontFamily:`Russo One`}} className={'mt-[170px] max-w-[300px] w-full h-auto p-2 text-start leading-[17px] text-[14px] uppercase bg-white rounded-xl min-[950px]:hidden'}>
                    Burn $BUFFY worth at least 1 SOL and receive 3 times the amount of Putin Coins.<br/><br/>

                    Example: Burn 200,000 $BUFFY = 1 SOL -> Get 600,000 Putin Coins.<br/><br/>

                    Putin Coin: No presale, No tax, LP burned -> Direct launch at approximately 2-3k market cap
                </div>

                <div className={'min-[950px]:hidden mt-4'}>
                    <ContractAddress/>
                </div>

            </div>


        </div>
    </>
}