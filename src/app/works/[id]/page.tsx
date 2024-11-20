'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';

// Mock data - in a real app, this would come from a database
export const works = [
  {
    id: '1',
    title: 'Luxury SUV Transformation',
    description: 'Complete interior and exterior detailing of a Range Rover',
    fullDescription: 'This luxury SUV received our premium detailing package, including:\n' +
    '- Full exterior wash and clay bar treatment\n' +
    '- Paint correction and ceramic coating\n' +
    '- Interior deep cleaning and leather conditioning\n' +
    '- Engine bay detailing\n' +
    '- Wheel and tire detail',
    image: '/images/projects/mercedes-amg.jpg',
    category: 'Full Detail',
    beforeImages: ['/images/projects/bmw-m4.jpg', '/images/projects/audi-rs.jpg'],
    afterImages: ['/images/projects/porsche-911.jpg', '/images/projects/tesla-s.jpg'],
    completionDate: '2023-10-15',
  },
  {
    id: '2',
    title: 'Sports Car Excellence',
    description: 'Paint correction and ceramic coating for Porsche 911',
    fullDescription: 'This Porsche 911 underwent our signature paint correction process:\n' +
    '- Multi-stage paint correction\n' +
    '- Premium ceramic coating application\n' +
    '- Glass treatment and protection\n' +
    '- Wheel ceramic coating\n' +
    '- Final inspection and quality control',
    image: '/images/projects/porsche-911.jpg',
    category: 'Paint Correction',
    beforeImages: ['/images/projects/audi-rs.jpg', '/images/projects/tesla-s.jpg'],
    afterImages: ['/images/projects/bmw-m4.jpg', '/images/projects/mercedes-amg.jpg'],
    completionDate: '2023-11-20',
  },
];

export async function generateStaticParams() {
  return works.map((work) => ({
    id: work.id,
  }));
}

export default function WorkDetail({ params }: { params: { id: string } }) {
  const work = works.find((w) => w.id === params.id);

  if (!work) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="space-y-4">
        <span className="text-violet-400">{work.category}</span>
        <h1 className="text-4xl font-bold">{work.title}</h1>
        <p className="text-gray-400">Completed on {work.completionDate}</p>
      </div>

      <div className="relative h-96">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-semibold">Project Overview</h2>
        <p className="text-gray-300 whitespace-pre-line">{work.fullDescription}</p>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Before & After</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Before</h3>
            <div className="grid grid-cols-2 gap-4">
              {work.beforeImages.map((img, index) => (
                <div key={index} className="relative h-48">
                  <Image
                    src={img}
                    alt={`Before ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">After</h3>
            <div className="grid grid-cols-2 gap-4">
              {work.afterImages.map((img, index) => (
                <div key={index} className="relative h-48">
                  <Image
                    src={img}
                    alt={`After ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
