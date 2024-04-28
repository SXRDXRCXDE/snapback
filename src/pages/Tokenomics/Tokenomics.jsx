import React from "react";
import style from "./style.module.css";
import {IoMdClose} from "react-icons/io";
import diagramm from "../../assets/img/Diagramm.png";
import ContractAddress from "../../components/ContractAddress/ContractAddress";

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

    return<>
        <div className={style.container}>

            <div className={'w-[1000px] h-[644px] bg-[#72D360] rounded-2xl px-[92px] pt-[42px] flex gap-20 items-center z-50 relative max-[950px]:hidden'}>

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

                <div style={{boxShadow:`3px 3px 1px 0 #b0a6a5`}} className={'w-[58px] h-[55px] rounded-lg bg-white flex items-center justify-center absolute bottom-5 right-5'}>
                    <IoMdClose className={'text-4xl opacity-65'} />
                </div>

            </div>

            <div className={'w-full h-auto flex flex-col items-center min-[950px]:hidden  mt-4'}>

                <div data-aos="zoom-out" className={'w-[200px] h-[200px]'}>

                    <img src={diagramm} className={'w-full h-fit object-contain max-w-[200px] max-h-[200px]'}/>

                </div>

                <div style={{fontFamily:`Russo One`}} className={'w-full h-auto flex flex-col items-center text-[18px] mt-2'}>

                    <div className={'w-[240px] h-10 bg-[#72D360] flex items-center justify-center uppercase '}>
                        total supply
                    </div>
                    <div className={'w-[240px] h-10 bg-[#0A9CAB] rounded-b-xl flex items-center justify-center uppercase '}>
                        1,000,000,000
                    </div>
                    <div className={'flex flex-col items-center relative w-full pt-6'}>

                        <div className={'w-[200px] h-[36px] bg-white flex items-center justify-center rounded-xl uppercase absolute -top-3 '}>
                            8% cex listings
                        </div>

                        {SUPPLIES.slice(2,8).map((value, index)=> <div key={index} className={` ${index===5? `rounded-b-xl` :``} w-[168px] h-[36px] bg-white flex items-center justify-center  uppercase  `}>
                            {value.title}
                        </div>)}

                    </div>
                    <div className={'min-[950px]:hidden mt-4'}>
                        <ContractAddress/>
                    </div>

                </div>

            </div>

        </div>

    </>
}