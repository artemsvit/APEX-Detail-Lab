const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Premium Detail</h3>
            <p className="text-sm">
              Professional car detailing services with attention to every detail.
              Making your vehicle look its absolute best.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>📍 123 Detail Street, City</li>
              <li>📱 (555) 123-4567</li>
              <li>✉️ info@premiumdetail.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <ul className="space-y-2 text-sm">
              <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 5:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Premium Detail. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
