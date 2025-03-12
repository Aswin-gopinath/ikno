import Footer from "@/components/Footer";
import Guide from "@/components/Guide";
import Introduction from "@/components/Introduction";
import List from "@/components/List";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <div className="bg-gray-100">
        <SearchBar/>
        <Introduction />
        <List />
        <Guide />
        <Footer />
      </div>
    </div>
  );
}
