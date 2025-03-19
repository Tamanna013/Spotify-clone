"use client";
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import { FaHome, FaPlay, FaSearch, FaHeart } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import { BsPlayFill, BsSkipStartFill, BsSkipEndFill, BsShuffle, BsRepeat } from "react-icons/bs";
import { FiVolume2 } from "react-icons/fi";
import { MdQueueMusic, MdFullscreen } from "react-icons/md";
import Link from 'next/link';
import { useRouter } from 'next/router';
import dynamic from "next/dynamic";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const router = useRouter();

  const rectangularPlaylists = [
    { name: "Hurry Up Tomorrow", image: "/playlist1.jpg" },
    { name: "On Repeat", image: "/playlist2.jpg" },
    { name: "Daily Mix", image: "/playlist3.jpg" },
    { name: "New Jeans (Jersey Club - Remixes)", image: "/playlist4.jpg" },
    { name: "Liked Songs", image: "/playlist5.jpg" },
    { name: "Khamoshiyan (Original Motion Picture Soundtrack)", image: "/playlist6.jpg" },
  ];

  const sections = [
    "Your Daily Mixes",
    "Top Picks For You",
    "New Releases",
    "Trending Now",
    "Throwback Hits",
  ];

  const squarePlaylists = new Array(25).fill(null).map((_, i) => ({
    id: i,
    name: `Playlist ${i + 1}`,
    image: `/playlist${(i % 6) + 1}.jpg`,
  }));

  const songs = Array.from({ length: 6 }, (_, i) => ({
    name: `Song ${i + 1}`,
    image: `/song${i + 1}.jpg`,
  }));

  const updateProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 1 : 100));
  };

  useEffect(() => {
    const interval = setInterval(updateProgress, 1000);
    return () => clearInterval(interval);
  }, []);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleAlbumClick = (albumId) => {
    setSelectedAlbum(albumId); // Set the selected album
    router.push(`/album/${albumId}`); // Navigate to album page
  };

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

        {/* Rectangular Playlists */}
        <h2 className="text-2xl font-bold mb-4">Made For TashaMG</h2>
        <div className="flex flex-col space-y-3">
          {rectangularPlaylists.map((playlist, index) => (
            <div
              key={index}
              className="relative flex items-center bg-zinc-800 rounded-lg w-full max-w-3xl h-24 p-3 cursor-pointer hover:bg-zinc-700 transition"
              onClick={() => handleAlbumClick(index)} // Click to change album
            >
              <div className="flex items-center justify-center bg-green-500 p-2 rounded-full mr-3">
                <FaPlay className="text-black" size={16} />
              </div>
              <Image
                src={playlist.image}
                alt={playlist.name}
                width={100}
                height={100}
                className="rounded-md w-24 h-full object-cover"
              />
              <div className="ml-3">
                <p className="text-lg font-semibold">{playlist.name}</p>
                <p className="text-gray-400 text-sm">Spotify Playlist</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sections with Square Playlists */}
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mt-6">
            <h2 className="text-2xl font-bold mb-4">{section}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {squarePlaylists.slice(sectionIndex * 5, (sectionIndex + 1) * 5).map((playlist, index) => (
                <div
                  key={index}
                  className="relative bg-zinc-800 rounded-lg cursor-pointer hover:bg-zinc-700 transition p-3"
                  onClick={() => handleAlbumClick(playlist.id)} // Click to change album
                >
                  <Link href={`/album/${playlist.id}`}>
                    <Image
                      src={playlist.image}
                      alt={playlist.name}
                      width={150}
                      height={150}
                      className="rounded-md w-full h-full object-cover"
                    />
                  </Link>
                  <p className="mt-2 text-sm font-semibold text-center">{playlist.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Huge Cards Section */}
        <h2 className="text-2xl font-bold mt-8 mb-4">Featured Songs</h2>
        <div className="grid grid-cols-2 gap-4">
          {songs.map((song, index) => (
            <div key={index} className="p-6 bg-zinc-800 rounded-lg cursor-pointer transition transform hover:scale-105 flex items-center">
              <Image src={song.image} alt={song.name} width={200} height={200} className="rounded-md w-40 h-40 object-cover" />
              <p className="text-xl font-bold ml-4">{song.name}</p>
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
      <div className="fixed bottom-0 left-0 w-full bg-black p-4 flex items-center justify-between border-t border-gray-800">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <Image src="/sweater-weather.jpg" alt="Sweater Weather" width={50} height={50} className="rounded-md" />
          <div>
            <h3 className="text-white text-sm">Sweater Weather</h3>
            <p className="text-gray-400 text-xs">The Neighbourhood</p>
          </div>
        </div>

        {/* Center Controls */}
        <div className="flex items-center space-x-6">
          <BsShuffle size={20} className="cursor-pointer text-gray-400 hover:text-white" />
          <BsSkipStartFill size={24} className="cursor-pointer text-gray-400 hover:text-white" />
          <BsPlayFill size={32} className="cursor-pointer text-white" />
          <BsSkipEndFill size={24} className="cursor-pointer text-gray-400 hover:text-white" />
          <BsRepeat size={20} className="cursor-pointer text-gray-400 hover:text-white" />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <MdQueueMusic size={24} className="cursor-pointer text-gray-400 hover:text-white" />
          <FiVolume2 size={20} className="cursor-pointer text-gray-400 hover:text-white" />
          <input type="range" min="0" max="100" value={progress} className="w-24" />
          <MdFullscreen size={24} className="cursor-pointer text-gray-400 hover:text-white" />
        </div>
      </div>
    </div>
  );
}
