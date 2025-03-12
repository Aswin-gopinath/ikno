import Image from "next/image"
import LuxuryImage from "../public/luxuryImage.png"
export default function LuxurySection(){
    return (
        <div className="w-[1520px]">
            <Image src={LuxuryImage} alt="luxuryImage" className="w-full h-auto object-cover"
            />
        </div>
    )
}