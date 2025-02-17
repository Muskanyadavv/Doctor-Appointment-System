


import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo (1).png";
import { BiMenu, BiUser } from "react-icons/bi";
import { useRef, useEffect, useState, useContext } from "react";
import { authContext } from "../../context/AuthContext";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/doctors", display: "Find a Doctor" },
  { path: "/services", display: "Services" },
  { path: "/contact", display: "Contact" },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Handle Sticky Header on Scroll
  useEffect(() => {
    const handleStickyHeader = () => {
      if (!headerRef.current) return;
      if (window.scrollY > 80) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    };

    window.addEventListener("scroll", handleStickyHeader);
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  // Handle Responsive Resizing
  useEffect(() => {
    const updateScreenWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  return (
    <header className="header flex items-center shadow-md p-4 bg-transparent z-50" ref={headerRef}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="w-[120px]" />
        </div>

        {/* Navigation Menu */}
        <nav
          ref={menuRef}
          className={`absolute md:static top-[60px] right-0 w-full md:w-auto md:flex md:items-center 
          bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:gap-6 text-headingColor p-4 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index} className="py-2 md:py-0">
                <NavLink
                  to={link.path}
                  className="text-[16px] leading-7 font-[500] hover:text-primaryColor transition duration-300"
                >
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Show Profile Image Inside Toggle Menu (Mobile Only) */}
          {isMenuOpen && screenWidth < 768 && token && user && (
            <div className="flex justify-center mt-4">
              <Link to={role === "doctor" ? "/doctors/profile/me" : "/users/profile/me"}>
                <figure className="w-[45px] h-[45px] rounded-full cursor-pointer flex items-center justify-center bg-gray-300">
                  {user?.photo ? (
                    <img src={user.photo} className="w-full rounded-full" alt="User Profile" />
                  ) : (
                    <BiUser className="w-6 h-6 text-gray-600" />
                  )}
                </figure>
              </Link>
            </div>
          )}
        </nav>

        {/* Navbar Right Section (Profile & Login) */}
        <div className="flex items-center gap-4">
          {/* Profile Icon (for Logged-in Users) */}
          {token && user && (
            <Link to={role === "doctor" ? "/doctors/profile/me" : "/users/profile/me"}>
              <figure className="w-[35px] h-[35px] rounded-full cursor-pointer flex items-center justify-center bg-gray-300">
                {user?.photo ? (
                  <img src={user.photo} className="w-full rounded-full" alt="User Profile" />
                ) : (
                  <BiUser className="w-6 h-6 text-gray-600" />
                )}
              </figure>
            </Link>
          )}

          {/* Login Button (ALWAYS VISIBLE) */}
          {!token && (
            <Link to="/login">
              <button
                className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center 
                justify-center rounded-[50px] hover:bg-primaryColor-dark transition duration-300 shadow-md hover:shadow-lg active:shadow-none"
              >
                Login
              </button>
            </Link>
          )}

          {/* Mobile Menu Toggle Button */}
          <span className="md:hidden" onClick={toggleMenu}>
            <BiMenu className="w-6 h-6 cursor-pointer" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
