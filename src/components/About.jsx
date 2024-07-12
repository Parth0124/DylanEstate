/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const About = () => {
  const initialDescription = `Mumbai, formerly known as Bombay, is the financial, commercial, and entertainment capital of India. It is a bustling metropolis known for its vibrant energy, historic landmarks, and diverse culture. Home to Bollywood, the Hindi film industry, Mumbai attracts artists, dreamers, and entrepreneurs from all over the country. Its skyline is dotted with skyscrapers juxtaposed against colonial-era architecture, showcasing its rich history and modern aspirations. From the iconic Gateway of India overlooking the Arabian Sea to the bustling markets of Colaba and the serene shores of Marine Drive, Mumbai offers a blend of old-world charm and cosmopolitan flair.`;

  const [expanded, setExpanded] = useState(false);
  const [description, setDescription] = useState(initialDescription);

  const handleShowMore = () => {
    setExpanded(true);
  };

  const handleShowLess = () => {
    setExpanded(false);
  };

  return (
    <div className='p-4 bg-white rounded shadow-md'>
      <h2 className='text-xl md:text-2xl p-4 font-bold mb-4'>About Mumbai</h2>
      <p className='mb-4 p-4 py-5 rounded shadow-sm'>{initialDescription}</p>
    </div>
  );
};

export default About;
