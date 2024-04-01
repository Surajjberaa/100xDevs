import Image from "next/image";
import { Inter } from "next/font/google";
import VideoCard from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/AppBar";
import { SideBar } from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="overflow-auto scrollbar-hide">
      {/* <VideoCard 
      title="The Fall of Coding: Is programming dead in 2024?"
      author="Harkirat Singh"
      views="10M views"
      timestamp="2 weeks ago"
      thmub="\photo.jpg"
      logo="\logo.jpg"

      />       */}
      {/* <SideBar>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </SideBar> */}
      <AppBar/>
      <VideoGrid/>
    </div>
  );
}
