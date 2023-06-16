import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#E5B0CE] items-center justify-between p-24">
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
      <h1 className="font-bebas-neue text-5xl">Welcome To Elysias Room</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/OxglpytZOuo"
        title="YouTube video player"
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </main>
  );
}