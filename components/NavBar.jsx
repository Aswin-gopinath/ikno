import { Button } from "@mui/material";

export default function NavBar(){
    return (
        <div className="flex p-6 px-18 items-center justify-between gap-5">
            <div>
                <p className="text-[#192E40] texr-lg font-bold">ABC <br/> PROPERTIES</p>
            </div>
            <div className="flex gap-3 text-sm text-[#192E40]">
                <div className="flex gap-4 mr-4">
                    <p className="font-medium text-[15px] text-[#45525E]">Buy</p>
                    <p className="font-medium text-[15px] text-[#FF5721]">Rent</p>
                </div>
                <div className="flex gap-4">
                    <p className="font-medium text-[15px] text-[#45525E]">Navigator's Edge</p>
                    <p className="font-medium text-[15px] text-[#45525E]">Our Agents</p>
                    <p className="font-medium text-[15px] text-[#45525E]" >Blogs & Insights</p>
                    <p className="font-medium text-[15px] text-[#45525E]">New Launches</p>
                    <p className="font-medium text-[15px] text-[#45525E]">About us</p>
                    <p className="font-medium text-[15px] text-[#45525E]">Help & Support</p>
                </div>
            </div>
            <div>
            <Button 
  style={{
    background: "#FEF8E7", 
    borderRadius: "30px", 
    color: "black", 
    fontSize: "15px",
    fontWeight:"600px",
    textTransform: "none",
    width:"138px",
    height:"50px"
  }} 
  variant="contained"
>
  Sell Property
</Button>
            </div>
        </div>
    )
}