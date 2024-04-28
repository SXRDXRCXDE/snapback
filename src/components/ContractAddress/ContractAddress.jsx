import React, {useRef, useState} from "react";
import style from "./style.module.css";
import logo from "../../assets/img/Logo.png";
import { MdOutlineContentCopy } from "react-icons/md";
import {IoMdCheckmark} from "react-icons/io";
import {message} from "antd";

export default function ContractAddress() {
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

    return (
        <div className={style.container}>
            <div className={'w-full h-full relative flex items-center'}>
                <img src={logo} className={'max-[1400px]:w-[80px] max-[1400px]:h-[80px] w-[120px] h-[120px] object-contain absolute -left-14 max-[950px]:hidden '}/>
                <div className={'flex items-center gap-4 max-[950px]:ml-2 max-[1400px]:ml-8 ml-20'}>
                    {
                        isCopy? <IoMdCheckmark className={'max-[1400px]:text-2xl text-3xl cursor-pointer'} onClick={copyText} /> :
                            <MdOutlineContentCopy className={'max-[1400px]:text-2xl text-3xl cursor-pointer'} onClick={copyText} />
                    }


                    {/* Use ref to access the address text */}
                    <span ref={addressRef} className={style.address}></span>
                </div>
            </div>
        </div>
    );
}
