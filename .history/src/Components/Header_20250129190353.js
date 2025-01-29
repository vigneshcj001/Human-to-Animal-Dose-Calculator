import { Link } from "react-router-dom";
import H2ALOGO from "../../images/logo.jpg";
const Header = () => {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/contactus", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-blue-600 font-bold text-2xl w-4/12">
          <img src={H2ALOGO} />
        </Link>
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-gray-700 font-medium text-lg transition-colors duration-300 hover:text-blue-600 focus:text-blue-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
