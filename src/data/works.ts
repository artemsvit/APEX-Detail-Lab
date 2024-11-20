import { Work } from '@/types/work';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const works: Work[] = [
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
    image: `${basePath}/images/projects/mercedes-amg.jpg`,
    category: 'Full Detail',
    beforeImages: [
      `${basePath}/images/projects/bmw-m4.jpg`,
      `${basePath}/images/projects/audi-rs.jpg`
    ],
    afterImages: [
      `${basePath}/images/projects/porsche-911.jpg`,
      `${basePath}/images/projects/tesla-s.jpg`
    ],
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
    image: `${basePath}/images/projects/porsche-911.jpg`,
    category: 'Paint Correction',
    beforeImages: [
      `${basePath}/images/projects/audi-rs.jpg`,
      `${basePath}/images/projects/tesla-s.jpg`
    ],
    afterImages: [
      `${basePath}/images/projects/bmw-m4.jpg`,
      `${basePath}/images/projects/mercedes-amg.jpg`
    ],
    completionDate: '2023-11-20',
  },
];
