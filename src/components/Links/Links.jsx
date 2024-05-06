import React from "react";
import style from "./style.module.css";

import twitter from "../../assets/img/twitter-x-logo-42562 2.svg";
import telegram from "../../assets/img/Telegram-icon-on-transparent-background-PNG 3.svg";
import birdeye from "../../assets/img/images2 2.svg";
import dextools from "../../assets/img/Vector.svg";
import eagle from "../../assets/img/661375b92a7e161501f4b5e5_dexscreener 3.svg";
import solscan from "../../assets/img/Group 705.svg";
import wolf from "../../assets/img/spaces_ENLYuVD3ykKAyXENrA58_uploads_6Jo9FZ8IdIjqWkcMDSHq_Logo Solpad 1.svg";
import dinosaur from "../../assets/img/CoinGecko_logo 2.svg";
import umma from "../../assets/img/coinmarketcap-icon 2.svg";

export default function Links() {

    const Links = [
        {
            img:<img src={twitter} className={style.img} alt={'twitter'}/>,
            url:`https://twitter.com/Buffy_Solana`
        },
        {
            img:<img src={telegram} className={style.img} alt={'telegram'}/>,
            url:`https://t.me/BUFFY_Solana`
        },
        {
            img: <img src={birdeye} className={style.img} alt={'birdeye'}/>,
            url:``
        },
        {
            img: <img src={dextools} className={style.img} alt={'dextools'}/>,
            url:``
        },
        {
            img:<img src={eagle} className={style.img} alt={'eagle'}/>,
            url:``
        },
        {
            img:<img src={solscan} className={style.img} alt={'solscan'}/>,
            url:``
        },
        {
            img:<img src={dinosaur} className={style.img} alt={'dinosaur'}/>,
            url:``
        },
        {
            img:<img src={umma} className={style.img} alt={'umma'}/>,
            url:``
        },
    ]

    return<>
        <div data-aos="zoom-out" className={'flex flex-col items-center max-[1400px]:gap-[10px] gap-[24px] fixed top-[90px] right-12 z-50 max-[950px]:hidden'}>

            {Links.map((value, index)=>   <a key={index} href={value.url} target="_blank" rel="noopener noreferrer" className={` ${value.url || index < 6 ? `bg-white`:`bg-[#201919]`} hover:bg-[#72D360] duration-300 cursor-pointer max-[1400px]:w-[45px] max-[1400px]:h-[45px] w-[65px] h-[65px] rounded-lg flex items-center justify-center`}>
                {value.img}
            </a>)}

        </div>
    </>

}