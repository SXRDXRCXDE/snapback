import React, {useRef, useState} from "react";
import style from "./style.module.css";
import logo from "../../assets/img/Logo.png";
import {FaPause, FaPlay} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {setVideo} from "../../store/actions/videoPlayAction";
import {Link, useLocation} from "react-router-dom";
import {CgMenuRightAlt} from "react-icons/cg";
import {MdOutlineContentCopy} from "react-icons/md";
import umma from "../../assets/img/coinmarketcap-icon 2.svg";
import wolf from "../../assets/img/spaces_ENLYuVD3ykKAyXENrA58_uploads_6Jo9FZ8IdIjqWkcMDSHq_Logo Solpad 1.svg";
import twitter from "../../assets/img/twitter-x-logo-42562 2.svg";
import telegram from "../../assets/img/Telegram-icon-on-transparent-background-PNG 3.svg";
import birdeye from "../../assets/img/images2 2.svg";
import dextools from "../../assets/img/Vector.svg";
import eagle from "../../assets/img/661375b92a7e161501f4b5e5_dexscreener 3.svg";
import solscan from "../../assets/img/Group 705.svg";
import dinosaur from "../../assets/img/CoinGecko_logo 2.svg";
import {message} from "antd";
import {IoMdCheckmark} from "react-icons/io";

export default function Header() {

    const [isOpen,setOpen] = useState();
    const [activeLink,setActiveLink] = useState(``);

    const query = useLocation()

    const dispatch = useDispatch();
    const videoPlay = useSelector((state)=> state.videoPlay.videoPlay);


    const NAVBAR = [
        {
            title:"TOKENOMICS",
            to: '/tokenomics'
        },
        {
            title:"ABOUT BUFFY",
            to: '/about'
        },
        {
            title:"BUY NOW",
            to: '/buy_now'
        },
    ];

    const addressRef = useRef(null);
    const [isCopy,setCopy] = useState(false);

    const copyText = () => {
        setCopy(!isCopy)
        message.success("Successfully Copied")
        if (addressRef.current) {
            // Access the text content using the ref
            const addressText = addressRef.current.textContent;
            // Create a temporary input element
            const tempInput = document.createElement("textarea");
            tempInput.value = addressText;
            // Append the input element to the DOM
            document.body.appendChild(tempInput);
            // Select the text in the input element
            tempInput.select();
            tempInput.setSelectionRange(0, 99999); // For mobile devices
            // Copy the selected text
            document.execCommand("copy");
            // Remove the temporary input element
            document.body.removeChild(tempInput);
        }
    };

    return<>
        <div className={style.container}>

            <div data-aos="zoom-out" className={'w-full flex flex-col items-start justify-start pl-[56px] pt-[22px] max-[950px]:hidden '}>

                <div className={'w-full h-auto flex items-start max-[1400px]:gap-[100px] gap-[356px]'}>

                    {/*logo*/}
                    <div onClick={()=>window.location.reload()}>
                        <Link  to={'/'}>
                            <img  src={logo} className={'max-[1400px]:w-[60px] max-[1400px]:h-[60px] w-[90px] h-[90px] object-contain'}/>
                        </Link>
                    </div>


                    {/*navbar links*/}
                    <div className={'gap-[28px] flex items-center'}>

                        <Link to={`/tokenomics`}  className={` ${query.pathname===`/tokenomics`?`bg-[#0A9CAB]`:`bg-[#72D360]`} duration-200  ${style.nav_link}`}>TOKENOMICS</Link>
                        <Link to={`/about`} className={` ${query.pathname===`/about`?`bg-[#0A9CAB]`:`bg-[#72D360]`} duration-200  ${style.nav_link}`}>ABOUT BUFFY</Link>
                        <a href={``} className={` ${query.pathname===`/buy_now`?`bg-[#0A9CAB]`:`bg-[#72D360]`} duration-200  ${style.nav_link}`}>BUY NOW</a>
                        <div onClick={()=>dispatch(setVideo(true))} className={` ${videoPlay?`bg-[#0A9CAB]` : `bg-[#72D360]`} duration-200 active:translate-y-1 max-[1400px]:text-xl text-3xl rounded-2xl px-6 py-3 `}>
                            <FaPlay className={'translate-x-0.5 text-white'} />
                        </div>
                        <div onClick={()=>dispatch(setVideo(false))} className={`${videoPlay? `bg-[#72D360]` : `bg-[#0A9CAB]`} duration-200 active:translate-y-1 max-[1400px]:text-xl text-3xl rounded-2xl px-6 py-3 `}>
                            <FaPause className={' text-white'} />
                        </div>

                    </div>

                </div>

            </div>

            <div  className={'w-full h-full min-[950px]:hidden '}>
                <div data-aos="zoom-out" className={style.mob_header}>

                    <div onClick={()=>window.location.reload()}>
                        <Link to={'/'} className={'flex items-center '}>
                            <img  src={logo} className={'w-[60px] h-[60px] object-contain'}/>
                        </Link>
                    </div>

                    <div onClick={()=>window.location.reload()}>
                        <Link to={'/'} className={'flex items-center '}>
                            <span  style={{fontFamily:`Russo One`}} className={'text-[35px] '}>BUFFY</span>
                        </Link>
                    </div>




                    <CgMenuRightAlt onClick={()=>setOpen(!isOpen)} className={'text-[45px]'} />

                </div>

                <div className={`${isOpen? `bottom-0` : `-bottom-[450px]`} duration-200 w-full h-[450px] bg-[#413E39] fixed left-0 z-50`}>

                    <div className={'w-full h-full flex flex-col items-center  p-5'}>

                        <Link onClick={()=>setOpen(false)} to={'/about'} style={{fontFamily:`Russo One`}} className={` ${query.pathname===`/about`?`bg-[#0A9CAB]`:`bg-[#72D360]`} duration-200 w-[196px] py-1 mt-4 rounded-xl text-[21px] uppercase `}>
                            about $buffy
                        </Link>
                        <Link onClick={()=>setOpen(false)} to={'/tokenomics'} style={{fontFamily:`Russo One`}} className={` ${query.pathname===`/tokenomics`?`bg-[#0A9CAB]`:`bg-[#72D360]`} duration-200 w-[196px] py-1 mt-4 rounded-xl text-[21px] uppercase `}>
                            tokenomics
                        </Link>
                        <a onClick={()=>setOpen(false)} href={''} style={{fontFamily:`Russo One`}} className={` ${query.pathname===`/buy_now`?`bg-[#0A9CAB]`:`bg-[#72D360]`}  duration-200 w-[196px] py-1 mt-4 rounded-xl text-[21px] uppercase `}>
                            BUY NOW
                        </a>

                        <div className={'w-full max-w-[290px] flex items-center h-[40px] rounded-xl bg-[#72D360] mt-4 px-4'}>

                            {
                                isCopy? <IoMdCheckmark className={'max-[1400px]:text-2xl text-3xl cursor-pointer'} onClick={copyText} /> :
                                    <MdOutlineContentCopy className={'max-[1400px]:text-2xl text-3xl cursor-pointer'} onClick={copyText} />
                            }

                            <span style={{fontFamily:`Russo One`}} className={'text-[9px] ml-3'}></span>

                        </div>

                        <div className={'flex flex-col items-center w-full h-auto mt-4 '}>

                            <div>
                                <a href={'https://launchpad.solpad.io/'} target="_blank" rel="noopener noreferrer" className={'hover:bg-[#72D360] duration-300 cursor-pointer w-[55px] h-[55px] rounded-lg bg-white flex items-center justify-center'}>
                                    <img src={wolf} className={style.img} alt={'wolf'}/>
                                </a>
                            </div>

                            <div className={'flex items-center gap-2 mt-2 '}>

                                <a href={'https://twitter.com/Buffy_Solana'} target="_blank" rel="noopener noreferrer" className={'hover:bg-[#72D360] duration-300 cursor-pointer w-[55px] h-[55px] rounded-lg bg-white flex items-center justify-center'}>
                                    <img src={twitter} className={style.img} alt={'twitter'}/>
                                </a>
                                <a href={'https://t.me/BUFFY_Solana'} target="_blank" rel="noopener noreferrer" className={'hover:bg-[#72D360] duration-300 cursor-pointer w-[55px] h-[55px] rounded-lg bg-white flex items-center justify-center'}>
                                    <img src={telegram} className={`w-[55px] h-[55px] object-contain`} alt={'telegram'}/>
                                </a>
                                <a href={''} target="_blank" rel="noopener noreferrer" className={'hover:bg-[#72D360] duration-300 cursor-pointer w-[55px] h-[55px] rounded-lg bg-white flex items-center justify-center'}>
                                    <img src={birdeye} className={style.img} alt={'birdeye'}/>
                                </a>
                                <a href={'https://launchpad.solpad.io/'} target="_blank" rel="noopener noreferrer" className={'hover:bg-[#72D360] duration-300 cursor-pointer w-[55px] h-[55px] rounded-lg bg-white flex items-center justify-center'}>
                                    <img src={dextools} className={style.img} alt={'dextools'}/>
                                </a>

                            </div>
                            <div className={'flex items-center gap-2 mt-2 '}>

                                <a href={''} target="_blank" rel="noopener noreferrer" className={'hover:bg-[#72D360] duration-300 cursor-pointer w-[55px] h-[55px] rounded-lg bg-white flex items-center justify-center'}>
                                    <img src={eagle} className={style.img} alt={'eagle'}/>
                                </a>
                                <a  href={''} target="_blank" rel="noopener noreferrer" className={'hover:bg-[#72D360] duration-300 cursor-pointer w-[55px] h-[55px] rounded-lg bg-white flex items-center justify-center'}>
                                    <img src={solscan} className={style.img} alt={'solscan'}/>
                                </a>
                                <a href={''} target="_blank" rel="noopener noreferrer" className={'hover:bg-[#72D360] duration-300 cursor-pointer w-[55px] h-[55px] rounded-lg bg-black flex items-center justify-center'}>
                                    <img src={dinosaur} className={`w-[45px] h-[45px] object-contain`} alt={'dinosaur'}/>
                                </a>
                                <a href={''} target="_blank" rel="noopener noreferrer" className={'hover:bg-[#72D360] duration-300 cursor-pointer w-[55px] h-[55px] rounded-lg bg-black flex items-center justify-center'}>
                                    <img src={umma} className={`w-[45px] h-[45px] object-contain`} alt={'umma'}/>
                                </a>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    </>

}