
function VideoCard(props: any) {
  return (
    <>
    <img src={props.thmub} alt="" className="rounded-xl hover:cursor-pointer"/>
    <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1 rounded-full ">
            <img src={props.logo} alt="" className="rounded-full  w-20 h-19 hover:cursor-pointer" />
        </div>
        <div className="col-span-10 pl-5 hover:cursor-pointer ">
            <div>
            {props.title}
            </div>
            <div className="text-gray-400 text-base hover:cursor-pointer hover:text-gray-200">
                {props.author}
            </div>
            <div className="text-gray-400 text-base hover:cursor-pointer">
                {props.views} | {props.timestamp}
            </div>
        </div>
    </div>
    </>
  )
}

export default VideoCard