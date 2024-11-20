'use client';

const teamMembers = [
  {
    name: 'John Smith',
    role: 'Master Detailer',
    image: '/team1.jpg',
    description: '15+ years of experience in luxury car detailing',
  },
  {
    name: 'Sarah Johnson',
    role: 'Paint Correction Specialist',
    image: '/team2.jpg',
    description: 'Certified in ceramic coating and paint protection',
  },
  {
    name: 'Mike Wilson',
    role: 'Interior Specialist',
    image: '/team3.jpg',
    description: 'Expert in leather restoration and upholstery care',
  },
];

export default function About() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">About Premium Detail</h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          With over 15 years of experience, we have built our reputation on
          delivering exceptional car detailing services with attention to every
          detail.
        </p>
      </section>

      {/* Our Story */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Founded in 2008, Premium Detail started with a simple mission: to
              provide the highest quality car detailing services in the area. What
              began as a small operation has grown into a full-service detailing
              center.
            </p>
            <p>
              Our commitment to excellence and attention to detail has earned us a
              loyal customer base and numerous accolades in the automotive care
              industry.
            </p>
          </div>
        </div>
        <div className="relative h-96">
          <div className="absolute inset-0 bg-gray-700 rounded-lg" />
          {/* Add actual image here */}
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-800 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Quality',
              description:
                'We never compromise on the quality of our work or the products we use.',
            },
            {
              title: 'Integrity',
              description:
                'We believe in transparent pricing and honest communication with our clients.',
            },
            {
              title: 'Excellence',
              description:
                'We continuously strive to exceed our customers expectations.',
            },
          ].map((value) => (
            <div key={value.title} className="text-center">
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gray-700" />
                {/* Add actual team member image here */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-blue-400 mt-1">{member.role}</p>
                <p className="text-gray-400 mt-4">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold">Our Certifications</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            'IDA Certified',
            'Ceramic Pro Certified',
            'XPEL Certified',
            '3M Certified',
          ].map((cert) => (
            <div
              key={cert}
              className="bg-gray-800 p-6 rounded-lg flex items-center justify-center"
            >
              <span className="font-semibold">{cert}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
