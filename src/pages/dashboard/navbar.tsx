import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo-hdbank.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/login");
  };

  return (
    <nav className="bg-white text-black shadow-md relative h-20 px-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full relative">
        
        <Link to="/" className="absolute left-4 top-1/2 transform -translate-y-[52%] z-10">
            <img
                src={logo}
                alt="HDBank Logo"
                className="w-64 lg:w-72 object-contain"
            />
        </Link>

        {/* Menu desktop */}
        <div className="ml-auto hidden md:flex items-center gap-6">
          <Link to="/" className="hover:underline">
            Trang Chủ
          </Link>
          <Link to="/contact" className="hover:underline">
            Liên Hệ
          </Link>
          <button
            onClick={handleLogout}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-1 rounded-md font-medium"
          >
            Đăng Xuất
          </button>
        </div>

        {/* Toggle menu mobile */}
        <button className="md:hidden ml-auto z-10" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-2 px-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Trang Chủ
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Liên Hệ
          </Link>
          <button
            onClick={() => {
              setMenuOpen(false);
              handleLogout();
            }}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-md font-medium"
          >
            Đăng Xuất
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
