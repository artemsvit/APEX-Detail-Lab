import Link from 'next/link';

const packages = [
  {
    name: 'Basic Detail',
    price: 149,
    description: 'Essential detailing package for regular maintenance',
    features: [
      'Exterior hand wash',
      'Interior vacuum',
      'Dashboard and console cleaning',
      'Window cleaning',
      'Tire dressing',
    ],
  },
  {
    name: 'Premium Detail',
    price: 299,
    description: 'Comprehensive detailing package for thorough cleaning',
    features: [
      'All Basic Detail services',
      'Clay bar treatment',
      'One-step paint correction',
      'Interior deep cleaning',
      'Leather conditioning',
      'Engine bay cleaning',
    ],
    popular: true,
  },
  {
    name: 'Ultimate Detail',
    price: 499,
    description: 'Complete transformation with premium protection',
    features: [
      'All Premium Detail services',
      'Two-step paint correction',
      'Ceramic coating',
      'Interior sanitization',
      'Headlight restoration',
      'Paint sealant application',
    ],
  },
];

const addons = [
  { name: 'Ceramic Coating', price: 299 },
  { name: 'Paint Correction', price: 199 },
  { name: 'Headlight Restoration', price: 79 },
  { name: 'Engine Bay Detail', price: 89 },
];

export default function Prices() {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Packages</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Choose the perfect detailing package for your vehicle. All packages include
          our satisfaction guarantee.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={"bg-gray-800 rounded-lg p-6 " + 
              (pkg.popular ? 'ring-2 ring-blue-500' : '')}
          >
            {pkg.popular && (
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                Most Popular
              </span>
            )}
            <div className="mt-4">
              <h2 className="text-2xl font-bold">{pkg.name}</h2>
              <p className="text-gray-400 mt-2">{pkg.description}</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">${pkg.price}</span>
              </div>
              <ul className="mt-6 space-y-4">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-8 block w-full bg-blue-600 text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Add-on Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addons.map((addon) => (
            <div
              key={addon.name}
              className="bg-gray-800 p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold">{addon.name}</h3>
              <p className="text-2xl font-bold mt-2">${addon.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
