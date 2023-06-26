'use client';
import React, { useEffect, useState } from 'react';

export default function Page() {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setText(data.text))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#E5B0CE] items-center justify-between p-24 font-bebas-neue ">
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
      <div>
      <nav className="flex justify-center py-4 space-x-8 ">
      <a href="/">Home</a>
      </nav>
        <h2 className='text-xl font-bebas-neue'>Personality</h2>
        <p>{text}</p>
      </div>
    </main>
  );
}
