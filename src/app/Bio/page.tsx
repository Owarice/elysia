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
    <main className="flex min-h-screen flex-col bg-[#E5B0CE] items-center justify-between p-24">
      <div>
        <h2>Personality</h2>
        <p>{text}</p>
      </div>
    </main>
  );
}
