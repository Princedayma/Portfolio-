import { AvatarGroup, Avatar } from '@mui/material';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { BrowseGalleryTwoTone, GitHub, Language, OpenInBrowser } from '@mui/icons-material';

export default function ProjectCard({ title, description, link, link2, date, avatars }) {
  const cardRef = useRef(null);
  const avatarsRef = useRef([]);
  avatarsRef.current = [];

  const addToAvatarsRef = (el) => {
    if (el && !avatarsRef.current.includes(el)) {
      avatarsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
    );

    gsap.fromTo(
      avatarsRef.current,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)', stagger: 0.1 }
    );
  }, []);

  return (
    <div ref={cardRef} className="border p-4 rounded shadow relative bg-white dark:bg-black">
      {/* Display Date */}
      <div className="absolute top-2 left-2 text-gray-500 text-sm">{date}</div>

      {/* Avatar Group */}
      <div className="flex justify-end mt-4">
        <AvatarGroup max={4}>
          {avatars.map((avatar, index) => (
            <Avatar  sx={{ width: 24, height: 24 }}
            key={index} ref={addToAvatarsRef}>
              <Image
                src={avatar}
                alt={`Avatar ${index + 1}`}
                width={60}
                height={60}
                className="rounded-full"
              />
            </Avatar>
          ))}
        </AvatarGroup>
      </div>

      {/* Title and Description */}
      <div className="mt-8">
        <h2 className="text-xl font-bold dark:text-white">{title}</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>

        {/* Links */}
        <div className="flex justify-end space-x-4 mt-4">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
          <GitHub/>
          </a>
          {link2 && (
            <a href={link2} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
            <Language/>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
