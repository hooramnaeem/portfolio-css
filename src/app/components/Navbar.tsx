'use client'
import Link from "next/link";
import { FaUserTie, FaHome, FaEnvelopeOpenText, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Title */}
        <div className="logo">
          <span className="logo-text">
            <span className="logo-highlight">C</span>ode
            <span className="logo-highlight-secondary">C</span>anvas
          </span>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger-container md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="hamburger">
            <FaBars />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="desktop-menu hidden md:flex">
          <li className="menu-item">
            <Link href="/">
              <FaHome className="icon" /> Home
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/about">
              <FaUserTie className="icon" /> About
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/contact">
              <FaEnvelopeOpenText className="icon" /> Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="menu active md:hidden">
          <li>
            <Link href="/">
              <FaHome className="icon" /> Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              <FaUserTie className="icon" /> About
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <FaEnvelopeOpenText className="icon" /> Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

