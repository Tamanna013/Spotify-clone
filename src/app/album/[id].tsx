"use client";
import { useRouter } from 'next/router';
import Image from 'next/image';
import React from 'react';
import { FaPlay } from 'react-icons/fa';

const AlbumPage = () => {
  const router = useRouter();
  const { id } = router.query; // Get the album ID from the URL

  // Sample data based on the album ID
  const albumData = {
    title: "Daily Mix 1",
    artists: ["Ariana Grande", "Bruno Mars", "Doja Cat", "and more"],
    songs: [
      { title: "Side To Side", artist: "Ariana Grande, Nicki Minaj", duration: "3:46" },
      { title: "Talking to the Moon", artist: "Bruno Mars", duration: "3:38" },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
      {/* Left Side - Album Details */}
      <div className="flex-1 p-5">
        <h1 className="text-4xl font-bold mb-2">{albumData.title}</h1>
        <p className="text-lg mb-4">{albumData.artists.join(", ")}</p>
        <div className="flex items-center mb-6">
          <button className="flex items-center bg-green-500 text-black p-3 rounded-full">
            <FaPlay className="mr-2" />
            Play
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">Track List</h2>
        <div className="space-y-2">
          {albumData.songs.map((song, index) => (
            <div key={index} className="flex justify-between p-2 bg-zinc-800 rounded-lg">
              <div>
                <p className="font-semibold">{song.title}</p>
                <p className="text-gray-400">{song.artist}</p>
              </div>
              <p className="text-gray-400">{song.duration}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - About the Artist */}
      <aside className="hidden md:block w-80 bg-zinc-900 p-5">
        <h2 className="text-xl font-bold mb-4">About the Artist</h2>
        <div className="relative w-full h-40 rounded-lg overflow-hidden">
          <Image src="/artist-image.jpg" alt="Artist" layout="fill" objectFit="cover" className="opacity-50" />
        </div>
        <p className="mt-2 text-gray-400">Learn more about the artist and their music.</p>
      </aside>
    </div>
  );
};

export default AlbumPage;
