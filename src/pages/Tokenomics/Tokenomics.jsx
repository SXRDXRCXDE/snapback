import React from "react";
import style from "./style.module.css";
import {IoMdClose} from "react-icons/io";
import diagramm from "../../assets/img/Diagramm.png";
import ContractAddress from "../../components/ContractAddress/ContractAddress";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setVideo} from "../../store/actions/videoPlayAction";

export default function Tokenomics() {

    const SUPPLIES = [
        {
            title:`1,000,000,000`
        },
        {
            title:`8% cex listings`
        },
        {
            title:`9.2% liquidity`
        },
        {
            title:`6.2% Unlocked`
        },
        {
            title:`10% Kols`
        },
        {
            title:`57% sale`
        },
        {
            title:`5% team`
        },
        {
            title:`4.5% private`
        },
    ]

    const dispatch = useDispatch();
    const isVideo = useSelector((state)=> state.videoPlay.videoPlay)

    return<>
        <div onClick={()=>dispatch(setVideo(!isVideo))} className={style.container}>

            <div onClick={(e)=>e.stopPropagation()} className={'w-[1000px] h-[644px] bg-[#72D360] rounded-2xl px-[92px] pt-[42px] flex gap-20 items-center z-50 relative max-[950px]:hidden'}>

                <div data-aos="zoom-out" className={'w-[410px] h-auto'}>

                    <img src={diagramm} className={'w-full h-fit object-contain max-w-[400px] max-h-[400px]'}/>

                </div>

                <div data-aos="zoom-out" style={{fontFamily:`Russo One`}} className={'w-[300px] h-auto flex flex-col items-center relative gap-[13px]'}>

                    <div className={'w-[280px] h-[50px] flex items-center justify-center absolute -top-[45px] bg-[#0A9CAB] uppercase  text-[28px]'}>
                        total supply
                    </div>
                    {SUPPLIES.map((value, index)=> <div key={index} className={'w-full h-[50px] rounded-xl flex items-center justify-center  bg-white uppercase  text-[28px]'}>
                        {value.title}
                    </div>)}

                </div>

                <Link to={"/"} style={{boxShadow:`3px 3px 1px 0 #b0a6a5`}} className={'w-[58px] h-[55px] rounded-lg bg-white flex items-center justify-center absolute bottom-5 right-5'}>
                    <IoMdClose className={'text-4xl opacity-65'} />
                </Link>

            </div>

            <div className={'w-full h-auto flex flex-col items-center min-[950px]:hidden  mt-1'}>

                <div data-aos="zoom-out" className={'w-[200px] h-[200px]'}>

                    <img src={diagramm} className={'w-full h-fit object-contain max-w-[200px] max-h-[200px]'}/>

                </div>

                <div style={{fontFamily:`Russo One`}} className={'w-full h-auto flex flex-col items-center text-[18px] mt-2'}>

                    <div className={'w-[220px] h-10 bg-[#72D360] text-[14px] flex items-center justify-center uppercase '}>
                        total supply
                    </div>
                    <div className={'w-[220px] h-8 bg-[#0A9CAB] text-[14px] rounded-b-xl flex items-center justify-center uppercase '}>
                        1,000,000,000
                    </div>
                    <div className={'flex flex-col items-center relative w-full pt-6 -translate-y-1'}>

                        <div className={'w-[200px] h-[26px] bg-white text-[14px] flex items-center justify-center rounded-xl uppercase absolute -top-0 '}>
                            8% cex listings
                        </div>

                        {SUPPLIES.slice(2,8).map((value, index)=> <div key={index} className={` ${index===5? `rounded-b-xl` :``} w-[168px] h-[26px] text-[14px] bg-white flex items-center justify-center  uppercase  `}>
                            {value.title}
                        </div>)}

                    </div>
                    <div className={'min-[950px]:hidden mt-2'}>
                        <ContractAddress/>
                    </div>

                </div>

            </div>

        </div>

    </>
}