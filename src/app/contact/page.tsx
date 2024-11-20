'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="grid md:grid-cols-2 gap-16">
      {/* Contact Information */}
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-gray-400 mt-4">
            Get in touch with us for premium car detailing services. We'll get back to you as soon as possible.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <p className="text-gray-400">
              123 Detail Street
              <br />
              City, State 12345
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
            <div className="space-y-2 text-gray-400">
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@premiumdetail.com</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
            <div className="space-y-2 text-gray-400">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 5:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-800 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium mb-2">
              Service Interested In
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select a service</option>
              <option value="basic">Basic Detail</option>
              <option value="premium">Premium Detail</option>
              <option value="ultimate">Ultimate Detail</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
