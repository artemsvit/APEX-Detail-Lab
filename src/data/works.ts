import { Work } from '@/types/work';

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