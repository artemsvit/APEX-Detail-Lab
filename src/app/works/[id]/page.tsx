'use client';

import { notFound } from 'next/navigation';

// Mock data - in a real app, this would come from a database
const works = [
  {
    id: 1,
    title: 'Luxury SUV Transformation',
    description: 'Complete interior and exterior detailing of a Range Rover',
    fullDescription: 'This luxury SUV received our premium detailing package, including:\n' +
    '- Full exterior wash and clay bar treatment\n' +
    '- Paint correction and ceramic coating\n' +
    '- Interior deep cleaning and leather conditioning\n' +
    '- Engine bay detailing\n' +
    '- Wheel and tire detail',
    image: '/work1.jpg',
    category: 'Full Detail',
    beforeImages: ['/before1.jpg', '/before2.jpg'],
    afterImages: ['/after1.jpg', '/after2.jpg'],
    completionDate: '2023-10-15',
  },
  // Add more works as needed
];

export default function WorkDetail({ params }: { params: { id: string } }) {
  const work = works.find((w) => w.id === parseInt(params.id));

  if (!work) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <span className="text-blue-400">{work.category}</span>
        <h1 className="text-4xl font-bold">{work.title}</h1>
        <p className="text-gray-400">Completed on {work.completionDate}</p>
      </div>

      <div className="relative h-96">
        <div className="absolute inset-0 bg-gray-700 rounded-lg" />
        {/* Add actual image here */}
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold">Project Overview</h2>
        <p className="text-gray-300 whitespace-pre-line">{work.fullDescription}</p>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Before & After</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Before</h3>
            <div className="grid grid-cols-2 gap-4">
              {work.beforeImages.map((image, index) => (
                <div key={index} className="relative h-48">
                  <div className="absolute inset-0 bg-gray-700 rounded-lg" />
                  {/* Add actual before images here */}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">After</h3>
            <div className="grid grid-cols-2 gap-4">
              {work.afterImages.map((image, index) => (
                <div key={index} className="relative h-48">
                  <div className="absolute inset-0 bg-gray-700 rounded-lg" />
                  {/* Add actual after images here */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
