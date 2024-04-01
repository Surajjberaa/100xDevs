import exp from "constants"
import VideoCard from "./VideoCard"
import { SideBar } from "./SideBar"

const VIDEOS = [
    {
        title:"The Fall of Coding: Is programming dead in 2024?",
        author:"Harkirat Singh",
        views:"10M views",
        timestamp:"2 weeks ago",
        thmub:"\photo.jpg",
        logo:"\logo.jpg"
    },
    {
        title:"The Fall of Coding: Is programming dead in 2024?",
        author:"Harkirat Singh",
        views:"10M views",
        timestamp:"2 weeks ago",
        thmub:"\photo.jpg",
        logo:"\logo.jpg"
    },
    {
        title:"The Fall of Coding: Is programming dead in 2024?",
        author:"Harkirat Singh",
        views:"10M views",
        timestamp:"2 weeks ago",
        thmub:"\photo.jpg",
        logo:"\logo.jpg"
    },
    {
        title:"The Fall of Coding: Is programming dead in 2024?",
        author:"Harkirat Singh",
        views:"10M views",
        timestamp:"2 weeks ago",
        thmub:"\photo.jpg",
        logo:"\logo.jpg"
    },
    {
        title:"The Fall of Coding: Is programming dead in 2024?",
        author:"Harkirat Singh",
        views:"10M views",
        timestamp:"2 weeks ago",
        thmub:"\photo.jpg",
        logo:"\logo.jpg"
    },
    {
        title:"The Fall of Coding: Is programming dead in 2024?",
        author:"Harkirat Singh",
        views:"10M views",
        timestamp:"2 weeks ago",
        thmub:"\photo.jpg",
        logo:"\logo.jpg"
    },
    {
        title:"The Fall of Coding: Is programming dead in 2024?",
        author:"Harkirat Singh",
        views:"10M views",
        timestamp:"2 weeks ago",
        thmub:"\photo.jpg",
        logo:"\logo.jpg"
    },
    {
        title:"The Fall of Coding: Is programming dead in 2024?",
        author:"Harkirat Singh",
        views:"10M views",
        timestamp:"2 weeks ago",
        thmub:"\photo.jpg",
        logo:"\logo.jpg"
    },
    {
        title:"The Fall of Coding: Is programming dead in 2024?",
        author:"Harkirat Singh",
        views:"10M views",
        timestamp:"2 weeks ago",
        thmub:"\photo.jpg",
        logo:"\logo.jpg"
    },
    {
        title:"The Fall of Coding: Is programming dead in 2024?",
        author:"Harkirat Singh",
        views:"10M views",
        timestamp:"2 weeks ago",
        thmub:"\photo.jpg",
        logo:"\logo.jpg"
    },
]

export const VideoGrid = () => {

    return(
        <div className="grid grid-cols-12">
            <div className="col-span-2 flex justify-center">
        <SideBar>
            <div className="pb-3 pl-3 pr-14 pt-3 rounded-xl bg-slate-800  ">Home</div>
            <div className="pb-3 pl-3 pr-14 pt-3 rounded-xl hover:bg-slate-800   ">Shorts</div>
            <div className="pb-3 pl-3 pr-14 pt-3 rounded-xl hover:bg-slate-800   ">Subscriptions</div>
            <div className="border-t border-slate-600 w-full"></div>
            <div className="pb-3 pl-3 pr-14 pt-3 rounded-xl hover:bg-slate-800   ">Your Channel</div>
            <div className="pb-3 pl-3 pr-14 pt-3 rounded-xl hover:bg-slate-800   ">Youtube Music</div>
            <div className="pb-3 pl-3 pr-14 pt-3 rounded-xl hover:bg-slate-800   ">History</div>
            <div className="pb-3 pl-3 pr-14 pt-3 rounded-xl hover:bg-slate-800  ">Playlist</div>
            <div className="border-t border-slate-600 w-full"></div>
            <div><b>Explore</b></div>
            <div className="pb-3 pl-3 pr-14 pt-3 rounded-xl hover:bg-slate-800  ">Trending</div>
            <div className="pb-3 pl-3 pr-14 pt-3 rounded-xl hover:bg-slate-800  ">Shopping</div>
            <div className="pb-3 pl-3 pr-14 pt-3 rounded-xl hover:bg-slate-800  ">Music</div>
            <div className="pb-3 pl-3 pr-14 pt-3 rounded-xl hover:bg-slate-800  ">Movies</div>
            <div className="pb-3 pl-3 pr-14 pt-3 rounded-xl hover:bg-slate-800  ">Live</div>
            <div className="pb-3 pl-3 pr-14 pt-3 rounded-xl hover:bg-slate-800  ">Gaming</div>
            <div className="pb-3 pl-3 pr-14 pt-3 rounded-xl hover:bg-slate-800  ">News</div>
            <div className="pb-3 pl-3 pr-14 pt-3 rounded-xl hover:bg-slate-800  ">Sports</div>
            <div className="pb-3 pl-3 pr-14 pt-3 rounded-xl hover:bg-slate-800  ">Courses</div>
            <div className="pb-3 pl-3 pr-14 pt-3 rounded-xl hover:bg-slate-800  ">Fashion</div>
            <div className="pb-3 pl-3 pr-14 pt-3 rounded-xl hover:bg-slate-800  ">Podcast</div>
        </SideBar>
        </div>
        <div className="col-span-10 grid grid-cols-5 md:grid-cols-2 lg:grid-cols-3 ">
            {VIDEOS.map(video => <div className="p-2">
                <VideoCard 
                title= {video.title}
                author= {video.author}
                views= {video.views}
                timestamp= {video.timestamp}
                thmub={video.thmub}
                logo={video.logo}
                     />
            </div>)}
        </div>
        </div>
    
    )

}