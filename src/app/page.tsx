'use client';
import React, { useEffect, useState } from "react";
import Button from '@mui/material-next/Button';
import axios from 'axios';
import { API_KEY } from './config.js';

export default function Home() {
  const [latestVideo, setLatestVideo] = useState('');

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'id',
            channelId: 'UCko6H6LokKM__B03i5_vBQQ',
            maxResults: 1,
            order: 'date',
            type: 'video',
            key: API_KEY,
          },
        });

        const videoId = response.data.items[0]?.id?.videoId;
        if (videoId) {
          setLatestVideo(videoId);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchLatestVideo();
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#E5B0CE] items-center justify-between p-24">
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
      <h1 className="font-bebas-neue text-5xl">Welcome To Elysias Room</h1>
      <div className="container mx-auto text-2xl px-4 font-bebas-neue">
        <nav className="flex justify-center py-4 space-x-8">
          <a href="/gallery">gallery</a>
          <a href="/Bio">biography</a>
        </nav>
      </div>
      <p>go download Honkai Impact 3rd Today!</p>
      <Button color="secondary"
        disabled={false}
        size="large"
        variant="filled"
        href="https://honkaiimpact3.hoyoverse.com/global/en-us/fab"
      >
        Download
      </Button>
      {latestVideo && (
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${latestVideo}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      )}
    </main>
  );
}
