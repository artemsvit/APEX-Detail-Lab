'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsBookingOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handlePopupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBookingOpen(false);
  };

  return (
    <main className="relative">
      {/* Booking Popup */}
      {isBookingOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-black/90 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold">Book Your Service</h2>
                <button 
                  onClick={() => setIsBookingOpen(false)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Contact Form */}
              <form onSubmit={handlePopupSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="popup-name" className="block text-white/80 mb-2">Name</label>
                    <input
                      type="text"
                      id="popup-name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7554A3] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="popup-email" className="block text-white/80 mb-2">Email</label>
                    <input
                      type="email"
                      id="popup-email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7554A3] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="popup-vehicle" className="block text-white/80 mb-2">Vehicle Details</label>
                  <input
                    type="text"
                    id="popup-vehicle"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7554A3] transition-colors"
                    placeholder="Year, Make, Model"
                  />
                </div>
                <div>
                  <label htmlFor="popup-message" className="block text-white/80 mb-2">Message</label>
                  <textarea
                    id="popup-message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7554A3] transition-colors"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#7554A3] text-white px-8 py-4 rounded-lg hover:bg-[#674099] transition-colors text-lg font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tighter">
                <span className="text-gradient">APEX</span>
                <span className="text-white"> Detail Lab</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#gallery" className="text-white/80 hover:text-white">Gallery</Link>
              <Link href="#services" className="text-white/80 hover:text-white">Services</Link>
              <Link href="#process" className="text-white/80 hover:text-white">Process</Link>
              <Link href="#contact" className="text-white/80 hover:text-white">Contact</Link>
              <Link 
                href="#"
                onClick={handleBookNow}
                className="bg-[#7554A3] text-white px-6 py-2 rounded-full hover:bg-[#674099] transition-colors"
              >
                Book Now
              </Link>
            </div>
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/images/hero/hero-1.jpg"
          alt="Luxury Car"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Precision Beyond</span>{' '}
            <span className="text-gradient">Perfection</span>
          </h1>
          <p className="text-white/80 text-lg md:text-2xl mb-4">
            This is <span className="text-gradient font-semibold">APEX Detail Lab</span> — where automotive artistry
          </p>
          <p className="text-white/80 text-lg md:text-2xl mb-12">
            meets scientific precision in every detail
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="#"
              onClick={handleBookNow}
              className="bg-[#7554A3] text-white px-8 py-4 rounded-full hover:bg-[#674099] transition-colors text-lg flex items-center justify-center"
            >
              Schedule Service
            </Link>
            <Link 
              href="#"
              onClick={handleBookNow}
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-lg flex items-center justify-center"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 mx-auto w-fit animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
            <svg 
              className="w-6 h-6 text-[#7554A3]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="gallery" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-white/60 text-lg md:text-xl">Witness the transformation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg hover-scale"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-white/80 mt-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Premium Services</h2>
            <p className="text-white/60 text-lg md:text-xl">Elevate your vehicle to perfection</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-black/30 rounded-2xl overflow-hidden hover-scale"
              >
                <div className="aspect-[4/5]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 transform group-hover:border-blue-500/50 transition-colors duration-500">
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-white/80 mb-6 transform opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">{service.description}</p>
                      <Link 
                        href={service.link}
                        className="inline-flex items-center text-[#7554A3] hover:text-[#674099] transition-colors transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                      >
                        Learn more
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-white/60 text-lg md:text-xl">Meticulous attention to every detail</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative h-full">
                <div className="bg-card-gradient rounded-lg p-6 border border-white/10 hover:border-[#7554A3]/50 transition-colors h-full flex flex-col">
                  <span className="text-5xl font-bold text-[#7554A3]/30 absolute -top-6 left-4">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4 mt-4">{step.title}</h3>
                  <p className="text-white/60 flex-grow">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-[#7554A3]/20">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[#7554A3]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-white/60 text-lg md:text-xl">Transform your vehicle with APEX precision</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-black/30 p-8 rounded-2xl border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7554A3] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7554A3] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="vehicle" className="block text-white/80 mb-2">Vehicle Details</label>
                  <input
                    type="text"
                    id="vehicle"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7554A3] transition-colors"
                    placeholder="Year, Make, Model"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#7554A3] transition-colors"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#7554A3] text-white px-8 py-4 rounded-lg hover:bg-[#674099] transition-colors text-lg font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Location */}
              <div className="bg-black/30 p-8 rounded-2xl border border-white/10">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#7554A3]/10 rounded-lg">
                    <svg className="w-6 h-6 text-[#7554A3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                    <p className="text-white/60">123 Luxury Lane</p>
                    <p className="text-white/60">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-black/30 p-8 rounded-2xl border border-white/10">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#7554A3]/10 rounded-lg">
                    <svg className="w-6 h-6 text-[#7554A3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Contact</h3>
                    <p className="text-white/60">+1 (555) 123-4567</p>
                    <p className="text-white/60">info@apexdetaillab.com</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-black/30 p-8 rounded-2xl border border-white/10">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#7554A3]/10 rounded-lg">
                    <svg className="w-6 h-6 text-[#7554A3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Hours</h3>
                    <p className="text-white/60">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-white/60">Saturday: 10AM - 4PM</p>
                    <p className="text-white/60">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="relative py-32">
        <Image
          src="/images/hero/hero-2.jpg"
          alt="Contact Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Vehicle?</h2>
          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Experience the pinnacle of automotive detailing. Schedule your appointment today.
          </p>
          <Link
            href="#"
            onClick={handleBookNow}
            className="bg-[#7554A3] text-white px-8 py-4 rounded-full hover:bg-[#674099] transition-colors text-lg inline-flex items-center"
          >
            Get Started
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}

const projects = [
  {
    title: 'Porsche 911 GT3',
    description: 'Full exterior detail with ceramic coating',
    image: '/images/projects/porsche-911.jpg'
  },
  {
    title: 'Mercedes-AMG GT',
    description: 'Paint correction and interior restoration',
    image: '/images/projects/mercedes-amg.jpg'
  },
  {
    title: 'BMW M4 Competition',
    description: 'Complete protection package',
    image: '/images/projects/bmw-m4.jpg'
  },
  {
    title: 'Audi RS e-tron GT',
    description: 'New vehicle preparation',
    image: '/images/projects/audi-rs.jpg'
  },
  {
    title: 'Tesla Model S Plaid',
    description: 'Paint protection film installation',
    image: '/images/projects/tesla-s.jpg'
  },
  {
    title: 'Lamborghini Huracán',
    description: 'Show car preparation',
    image: '/images/projects/lambo.jpg'
  }
];

const services = [
  {
    title: 'Exterior Detailing',
    description: 'From paint correction to ceramic coating, our exterior detailing service restores and protects your vehicle\'s finish to a showroom-worthy state.',
    image: '/images/services/exterior.jpg',
    link: '/services/exterior'
  },
  {
    title: 'Interior Detailing',
    description: 'Experience luxury from within. Our interior detailing service deep cleans, conditions, and protects every surface of your vehicle\'s cabin.',
    image: '/images/services/interior.jpg',
    link: '/services/interior'
  },
  {
    title: 'Paint Correction',
    description: 'Remove swirls, scratches, and imperfections. Our paint correction service brings out the true depth and clarity of your vehicle\'s paint.',
    image: '/images/services/paint.jpg',
    link: '/services/paint-correction'
  }
];

const process = [
  {
    title: "Initial Assessment",
    description: "Thorough inspection and documentation of vehicle condition, paint readings, and specific areas requiring attention."
  },
  {
    title: "Surface Preparation",
    description: "Professional washing, clay bar treatment, and surface decontamination to ensure a perfectly clean canvas."
  },
  {
    title: "Paint Correction",
    description: "Multi-stage polishing process to remove imperfections and restore paint to its optimal condition."
  },
  {
    title: "Panel Inspection",
    description: "Detailed examination under specialized lighting to ensure uniform finish across all surfaces."
  },
  {
    title: "Protection Application",
    description: "Careful application of ceramic coating or paint protection film for long-lasting results."
  },
  {
    title: "Curing Process",
    description: "Controlled environment curing to ensure maximum bonding and protection effectiveness."
  },
  {
    title: "Final Detailing",
    description: "Meticulous attention to every detail including glass, trim, and wheels for complete perfection."
  },
  {
    title: "Quality Control",
    description: "Final inspection under various lighting conditions and comprehensive documentation of completed work."
  }
];
