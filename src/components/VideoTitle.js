
const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-3/4">{overview}</p>
        <div>
            <button className="bg-white text-black p-4 px-10 text-xl rounded-lg hover:bg-opacity-90">▶ Play</button>
            <button className="mx-2 bg-gray-500 text-black p-4 px-14 text-xl rounded-lg">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle