'use client';
import React, { useEffect, useState } from 'react';

export default function Bio() {
  const [text, setText] = useState('');
  const [appearance, setAppearance] = useState('');

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setText(data.text);
        setAppearance(data.appearance);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="bg-[#E5B0CE] bg-cover min-h-screen flex flex-col items-center justify-center p-8 font-bebas-neue text-white">
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
      <div className="max-w-4xl w-full px-4">
        <nav className="flex justify-center py-4">
          <a className="text-white hover:text-pink-600 font-bold" href="/">Home</a>
          <span className="px-2"></span> {/* Add a gap between the links */}
          <a className="text-white hover:text-pink-600 font-bold" href="/gallery">Gallery</a>
        </nav>
        <div className="bg-[#E5B0CE] bg-opacity-90 rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-3xl mb-4">Elysia</h2>
              <div className="mb-4">
                <h3 className="text-xl mb-2">Appearance</h3>
                <p>{appearance}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl mb-2">Personality</h3>
                <p>{text}</p>
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <img src="/elysia-image.png" alt="Elysia" className="rounded-lg shadow-md mb-4" />
              <ul className="list-disc pl-4">
                <li>Status: deceased</li>
                <li>Gender: female</li>
                <li>Spiecies: Mantis <br />Herrscher</li>
                <li>Height: 163cm</li>
                <li>Weight: 55kg</li>
                <li>Hair Color: Light Pink</li>
                <li>Eye Color: Light Blue <br /> Bright Purple (Herrscher Form)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
