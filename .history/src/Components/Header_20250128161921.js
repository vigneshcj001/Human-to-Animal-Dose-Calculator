import { Link } from "react-router-dom";
const Header = () => {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/contactus", label: "Contact Us" },
  ];
  return (
    <header>
      <h3>LOGO</h3>
      <nav aria-label="Main Navigation" className="flex-grow p-5">
        <ul className="flex flex-col sm:flex-row items-center justify-end gap-6">
          {navItems.map((item) => (
            <li key={item.to} className="flex-shrink-0">
              <Link
                to={item.to}
                className="text-gray-700 font-medium text-lg transition-colors duration-300 hover:text-blue-500"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
