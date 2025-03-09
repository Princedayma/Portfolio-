import React from 'react';
import Home from './components/home';
import Chatbot from './components/Chatbot/Chatbot';

const HomeSection = () => {
  return (
    <section className="bg-white text-black dark:bg-black dark:text-white flex flex-row items-center justify-center min-h-screen space-x-10 p-4 bg-gray-100">
      <div className="w-full max-w-2xl">
        <Home />
      </div>
      <div className="w-full max-w-2xl">
        <Chatbot />
      </div>
    </section>
  );
};

export default HomeSection;
