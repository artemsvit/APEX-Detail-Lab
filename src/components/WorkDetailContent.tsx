'use client';

import Image from 'next/image';
import { Work } from '@/types/work';
import { getImagePath } from '@/utils/paths';

export default function WorkDetailContent({ work }: { work: Work }) {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="space-y-4">
        <span className="text-violet-400">{work.category}</span>
        <h1 className="text-4xl font-bold">{work.title}</h1>
        <p className="text-gray-400">Completed on {work.completionDate}</p>
      </div>

      <div className="relative h-96">
        <Image
          src={getImagePath(work.image)}
          alt={work.title}
          fill
          className="object-cover rounded-lg"
          unoptimized
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
                    src={getImagePath(img)}
                    alt={`Before ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                    unoptimized
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
                    src={getImagePath(img)}
                    alt={`After ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                    unoptimized
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
