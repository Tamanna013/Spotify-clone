import Image from "next/image";
import { FaHome, FaSearch, FaHeart } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import { BsPlayFill, BsPauseFill, BsSkipStartFill, BsSkipEndFill } from "react-icons/bs";

export default function Home() {
  const playlists = [
    { name: "Hurry Up Tomorrow", image: "/playlist1.jpg" },
    { name: "On Repeat", image: "/playlist2.jpg" },
    { name: "Daily Mix 3", image: "/playlist3.jpg" },
    { name: "New Jeans (Jersey Club - Remixes)", image: "/playlist4.jpg" },
    { name: "Liked Songs", image: "/playlist5.jpg" },
    { name: "Khamoshiyan (Original Motion Picture Soundtrack)", image: "/playlist6.jpg" },
    { name: "Timeless", image: "/playlist7.jpg" },
    { name: "Aashiqui", image: "/playlist8.jpg" },
    { name: "Daily Mix 01", image: "/playlist9.jpg" },
    { name: "Daily Mix 02", image: "/playlist10.jpg" },
    { name: "Daily Mix 03", image: "/playlist11.jpg" },
    { name: "Daily Mix 04", image: "/playlist12.jpg" },
    { name: "Daily Mix 05", image: "/playlist13.jpg" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-full md:w-20 bg-zinc-900 p-5 flex md:flex-col items-center space-x-6 md:space-x-0 md:space-y-6 overflow-x-auto md:overflow-visible">
        <FaHome size={24} className="text-gray-300 hover:text-white cursor-pointer" />
        <FaSearch size={24} className="text-gray-300 hover:text-white cursor-pointer" />
        <MdLibraryMusic size={24} className="text-gray-300 hover:text-white cursor-pointer" />
        <FaHeart size={24} className="text-gray-300 hover:text-white cursor-pointer" />
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-5 overflow-y-auto h-screen">
        {/* Search Bar */}
        <div className="flex items-center bg-zinc-800 rounded-full p-2 px-4 mb-4">
          <FaSearch className="text-gray-400" />
          <input type="text" placeholder="What do you want to play?" className="bg-transparent outline-none text-white ml-2 w-full" />
        </div>

        {/* Rectangular Playlist Section */}
        <h2 className="text-2xl font-bold mb-4">Made For TashaMG - Rectangular</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {playlists.slice(0, 6).map((playlist, index) => (
            <div 
              key={index} 
              className="p-4 rounded-lg cursor-pointer transition transform hover:scale-105 w-full h-36"
            >
              <Image 
                src={playlist.image} 
                alt={playlist.name} 
                width={150} 
                height={150} 
                className="rounded-md w-full" 
              />
              <p className="text-sm mt-2 text-white truncate">{playlist.name}</p>
            </div>
          ))}
        </div>

        {/* Square Playlist Section */}
        <h2 className="text-2xl font-bold mb-4">Made For TashaMG - Square</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {playlists.slice(6).map((playlist, index) => (
            <div 
              key={index} 
              className="p-4 rounded-lg cursor-pointer transition transform hover:scale-105 w-36 h-36"
            >
              <Image 
                src={playlist.image} 
                alt={playlist.name} 
                width={150} 
                height={150} 
                className="rounded-md w-full" 
              />
              <p className="text-sm mt-2 text-white truncate">{playlist.name}</p>
            </div>
          ))}
        </div>
      </main>
      
      {/* Right Sidebar */}
      <aside className="hidden md:block w-80 bg-zinc-900 p-5">
        <h2 className="text-xl font-bold mb-4">Liked Songs</h2>
        <div className="relative w-full h-40 rounded-lg overflow-hidden">
          <Image src="/liked-songs.jpg" alt="Liked Songs" layout="fill" objectFit="cover" className="opacity-50" />
        </div>
      </aside>

      {/* Bottom Music Player */}
      <div className="fixed bottom-0 left-0 w-full bg-black p-4 flex flex-col md:flex-row items-center justify-between border-t border-gray-800">
        <div className="flex items-center space-x-4">
          <Image src="/sweater-weather.jpg" alt="Sweater Weather" width={50} height={50} className="rounded-md" />
          <div>
            <h3 className="text-white text-sm">Sweater Weather</h3>
            <p className="text-gray-400 text-xs">The Neighbourhood</p>
          </div>
        </div>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <BsSkipStartFill size={24} className="cursor-pointer text-gray-400 hover:text-white" />
          <BsPlayFill size={32} className="cursor-pointer text-white" />
          <BsSkipEndFill size={24} className="cursor-pointer text-gray-400 hover:text-white" />
        </div>
      </div>
    </div>
  );
}
