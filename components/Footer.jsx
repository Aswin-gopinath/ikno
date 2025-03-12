import Instgram from "../public/instagram.png"
import X from "../public/X.png"
import Discord from "../public/discord.png"
import Image from "next/image"
import House from "../public/House.png"
import Telephone from "../public/Telephone.png"
import Whatsapp from "../public/whasapp.png"
import { Button } from "@mui/material";

export default function Footer() {
    return (
        <div>

        <div className="px-18 py-8 flex w-full justify-around">
            <div className="flex flex-col gap-4 w-1/4 px-8">
                <p className="font-bold text-[18px] text-[#45525E]">Connect with us</p>
                <span className="flex gap-4">
                    <Image src={Instgram} alt="instagram" />
                    <Image src={X} alt="x" />
                    <Image src={Discord} alt="discord" />

                </span>
            </div>

            <div className="flex flex-col gap-4 w-1/4 px-8">
                <p className="font-bold text-[18px] text-[#45525E]">Get in touch</p>
                <span className="flex gap-4">
                    <Image src={House} alt="house" className="w-[25px] h-[25px]"/>
                    <p className="text-[16px] text-[#45525E]">DAMAC Smart Heights - Office No. 1501 - Barsha Heights - Dubai, UAE (Head Office)</p>
                </span>
                <span className="flex gap-4">
                    <Image src={Telephone} alt="telephone" />
                    <p className="text-[16px] text-[#45525E]">+971 52 975 8969</p>
                </span>
            </div>


            <div className="flex flex-col gap-4 w-1/4 px-8">
                <p className="font-bold text-[18px] text-[#45525E]">Services</p>
                <p className="text-[16px] text-[#45525E]">Rent Services</p>
                <p className="text-[16px] text-[#45525E]">Buy/Sell Property</p>
                <p className="text-[16px] text-[#45525E]">Home Services</p>
                <p className="text-[16px] text-[#45525E]">Property lawyers</p>
                <p className="text-[16px] text-[#45525E]">Design & Decor</p>
                <p className="text-[16px] text-[#45525E]">Property Services</p>
                <p className="text-[16px] text-[#45525E]">Agents</p>
            </div>


            <div className="flex flex-col gap-4 w-1/4 px-8">
                <span className="flex gap-4 items-center ">
                    <Image src={Whatsapp} alt="whatsapp" />
                    <p className="font-bold text-[18px] text-[#45525E]">Chat with us</p>
                </span>
                <p className="text-[16px] text-[#45525E]">We provide the most accurate information about the homes that you are looking for</p>
                <span className="flex items-center justify-start mt-2"><Button
                    style={{
                        background: "#38CA89",
                        borderRadius: "10px",
                        color: "white",
                        fontSize: "15px",
                        textTransform: "none",
                        width: "141px",
                        height: "51px"
                    }}
                    variant="contained"
                >
                    Chat now
                </Button></span>
            </div>
        </div>
        <hr style={{ width: "100%", borderTop: "1px solid #74788D57"}} />
        <div className="flex items-center justify-center gap-5 p-4">
                <p className="text-[16px] text-[#45525E]">About us</p>
                <p className="text-[16px] text-[#45525E]">Terms & Conditions</p>
                <p className="text-[16px] text-[#45525E]">Privacy policy</p>
        </div>
        <hr style={{ width: "100%", borderTop: "1px solid #74788D57"}} />
        <div className="flex items-center justify-center gap-5 p-5">
                <p className="text-[15px]  font-bold text-[#45525E]">BAHRAIN</p>
                <p className="text-[15px] font-bold  text-[#45525E]">DUBAI</p>
                <p className="text-[15px] font-bold text-[#45525E]">USA</p>
                <p className="text-[15px] font-bold text-[#45525E]">UAE</p>
                <p className="text-[15px] font-bold text-[#45525E]">UK</p>
                <p className="text-[15px] font-bold text-[#45525E]">SAUDI</p>
                <p className="text-[15px] font-bold text-[#45525E]">QATAR</p>
                <p className="text-[15px] font-bold text-[#45525E]">INDIA</p>
                <p className="text-[15px] font-bold text-[#45525E]">OMAN</p>
        </div>
        </div>
    )
}