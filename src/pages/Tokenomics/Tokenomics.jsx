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
            title:`NO PRESALE`
        },
        {
            title:`LP BURNED`
        },
        {
            title:`100% LP`
        },
        {
            title:`NO TAX`
        },
        {
            title:`OWNERSHIP REVOKED`
        },
        {
            title:`TOKENBURN INCOMING`
        },
    ]

    const dispatch = useDispatch();
    const isVideo = useSelector((state)=> state.videoPlay.videoPlay)

    return<>
        <div onClick={()=>dispatch(setVideo(!isVideo))} className={style.container}>

            <div onClick={(e)=>e.stopPropagation()} className={'w-[550px] h-[500px] bg-[#72D360] rounded-2xl px-[92px] pt-[42px] flex flex-col gap-20 items-center z-50 relative max-[950px]:hidden translate-y-36'}>

                <div data-aos="zoom-out" style={{fontFamily:`Russo One`}} className={'w-[400px] h-auto flex flex-col items-center relative gap-[13px]'}>

                    {SUPPLIES.map((value, index)=> <div key={index} className={`h-[50px] rounded-xl flex items-center justify-center  bg-white uppercase  text-[28px] ${index > 3? 'w-full' : 'w-[70%]'}  ${index%2===0?'text-black':'text-[#0A9CAB]'}`}>
                        {value.title}
                    </div>)}

                </div>

                <Link to={"/"} style={{boxShadow:`3px 3px 1px 0 #b0a6a5`}} className={'w-[58px] h-[55px] rounded-lg bg-white flex items-center justify-center absolute bottom-5 right-5'}>
                    <IoMdClose className={'text-4xl opacity-65'} />
                </Link>

            </div>

            <div className={'w-full h-auto flex flex-col items-center min-[950px]:hidden  mt-1'}>

                <div style={{fontFamily:`Russo One`}} className={'w-full h-auto flex flex-col items-center text-[18px] mt-2'}>

                    <div className={'flex flex-col items-center relative w-[250px] -translate-y-1 my-36 rounded-xl bg-white py-2 '}>

                        {SUPPLIES.map((value, index)=> <div key={index} className={` ${index===5? `rounded-b-xl` :``}  w-[168px] h-[26px] text-[14px] bg-white flex items-center justify-center  uppercase  `}>
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