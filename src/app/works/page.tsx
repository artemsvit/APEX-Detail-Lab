'use client';

import Link from 'next/link';
import Image from 'next/image';

const works = [
  {
    id: 1,
    title: 'Luxury SUV Transformation',
    description: 'Complete interior and exterior detailing of a Range Rover',
    image: '/work1.jpg',
    category: 'Full Detail',
  },
  {
    id: 2,
    title: 'Sports Car Paint Correction',
    description: 'Paint correction and ceramic coating on a Porsche 911',
    image: '/work2.jpg',
    category: 'Exterior Detail',
  },
  {
    id: 3,
    title: 'Classic Car Restoration',
    description: 'Interior restoration of a vintage Mercedes',
    image: '/work3.jpg',
    category: 'Interior Detail',
  },
  // Add more works as needed
];

export default function Works() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Our Works</h1>
      <p className="text-gray-400">
        Browse through our portfolio of completed detailing projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work) => (
          <Link
            href={'/works/' + work.id}
            key={work.id}
            className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
          >
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gray-700" />
              {/* Add actual images here */}
            </div>
            <div className="p-4">
              <span className="text-sm text-blue-400">{work.category}</span>
              <h2 className="text-xl font-semibold mt-2">{work.title}</h2>
              <p className="text-gray-400 mt-2">{work.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
