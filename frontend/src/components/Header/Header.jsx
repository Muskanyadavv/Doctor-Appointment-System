
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo (1).png";
import { BiMenu } from "react-icons/bi";
import { useRef, useEffect, useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/doctors", display: "Find a Doctor" },
  { path: "/services", display: "Services" },
  { path: "/contact", display: "Contact" },
];

const Header = () => {
  const headerRef = useRef(null);
  const { user, role, token } = useContext(authContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (headerRef.current) {
        const isSticky =
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80;
        headerRef.current.classList.toggle("sticky__header", isSticky);
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []); // Empty dependency array ensures this runs only once


  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="Logo" />
          </div>

          {/* Main Navigation (hidden on smaller screens) */}
          <div className="navigation hidden md:flex">
            <ul className="menu flex items-center gap-[2.2rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => // Use isActive from NavLink
                      isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right-Side Elements */}
          <div className="flex items-center gap-4">
            {token && user ? (
              <Link
                to={`${role === "doctor" ? "/doctors/profile/me" : "/users/profile/me"}`}
              >
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={user?.photo} className="w-full rounded-full" alt="" />
                </figure>
              </Link>
            ) : (
              <Link to="/login" className="hidden md:block">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] hover:bg-primaryColor-dark transition duration-300 shadow-md hover:shadow-lg active:shadow-none">
                  Login
                </button>
              </Link>
            )}

            {/* Hamburger Menu Icon (only on smaller screens) */}
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-[50vw] h-full bg-white z-50 transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="container py-8">
<button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-600 text-2xl"> &times; </button>

          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((link, index) => (
              <li key={index} onClick={toggleMenu}>
                <NavLink
                   to={link.path}
                  className={({ isActive }) => // Use isActive
                    isActive
                      ? "text-primaryColor text-[18px] font-[600]"
                      : "text-textColor text-[18px] font-[500] hover:text-primaryColor"
                  }
                >
                  {link.display}
                </NavLink>
              </li>
            ))}
            {!token && !user && (
              <li onClick={toggleMenu}>
                <Link to="/login">
                  <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] hover:bg-primaryColor-dark transition duration-300 shadow-md hover:shadow-lg active:shadow-none">Login</button>
                </Link>
              </li>
            )}
          </ul>

        </div>
      </div>
    </header>
  );
};

export default Header;


