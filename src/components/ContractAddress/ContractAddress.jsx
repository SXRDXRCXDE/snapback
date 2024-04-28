import React from "react";
import style from "./style.module.css";
import logo from "../../assets/img/Logo.png";
import {MdOutlineContentCopy} from "react-icons/md";

export default function ContractAddress() {

    return<>
        <div className={style.container}>

            <div className={'w-full h-full relative flex items-center'}>

                <img src={logo} className={'max-[1400px]:w-[80px] max-[1400px]:h-[80px] w-[120px] h-[120px] object-contain absolute -left-14 max-[950px]:hidden '}/>

                <div className={'flex items-center gap-4 max-[950px]:ml-2 max-[1400px]:ml-8 ml-20'}>

                    <MdOutlineContentCopy className={'max-[1400px]:text-2xl text-3xl'} />

                    <span className={style.address}></span>

                </div>

            </div>

        </div>
    </>

}