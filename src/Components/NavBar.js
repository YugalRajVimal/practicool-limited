import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Products', to: '/products' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' }
]

// Animated underline for both desktop and mobile
const underlineBase =
  "relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:h-[2.5px] after:bg-gold after:rounded-full after:transition-all after:duration-300 after:ease-in-out";
const underlineInactive =
  "after:w-0 hover:after:w-full";
const underlineActive =
  "after:w-full text-gold";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);

  // Close mobile nav if window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileOpen]);

  // Trap focus within mobile menu when open (accessibility improvement)
  useEffect(() => {
    if (!mobileOpen) return;
    const menuEl = menuRef.current;
    if (!menuEl) return;
    const focusableSelectors = 'a,button,[tabindex]:not([tabindex="-1"])';
    const focusableEls = menuEl.querySelectorAll(focusableSelectors);
    if (!focusableEls.length) return;

    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];

    function trapFocus(e) {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }

    menuEl.addEventListener('keydown', trapFocus);
    setTimeout(() => firstEl.focus(), 150); // focus first link

    return () => menuEl.removeEventListener('keydown', trapFocus);
  }, [mobileOpen]);

  return (
    <nav className="w-full fixed py-2 top-0 z-50 bg-white border-b shadow-lg transition-all">
      <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between h-20 relative">
        {/* Brand with logo */}
        <Link to="/" className="flex items-center gap-3 group hover:scale-105 transition-transform" tabIndex={mobileOpen ? -1 : 0}>
          <img
            src="/logo.png"
            alt="Practicool logo"
            className=" h-20 object-contain"
            style={{ minWidth: 40, minHeight: 40 }}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 lg:gap-7 ml-10">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `font-body px-4 py-2 transition-all duration-200 text-base font-medium border-none  shadow-none rounded-none 
                ${underlineBase} ${isActive ? underlineActive : "text-navy/90 hover:text-gold/90 " + underlineInactive}`
              }
              end={link.to === '/'}
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-4 bg-zinc-800 text-white text-base px-6 py-2 shadow-lg hover:-translate-y-1 transition-transform font-bold rounded-xl drop-shadow-md tracking-wide"
          >
            <span className="">Get&nbsp;Quote</span>
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center text-navy hover:text-gold text-4xl focus:outline-none rounded-full p-2 transition shadow-md bg-white hover:bg-gold/10"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navbar-menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {/* Plain overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black/50 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Nav Menu */}
      <aside
        ref={menuRef}
        id="mobile-navbar-menu"
        className={`fixed top-0 right-0 h-full w-11/12 max-w-[360px] bg-white z-[110] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col pt-24 px-7 space-y-2 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        tabIndex={mobileOpen ? 0 : -1}
        style={{
          boxShadow: '0 2px 32px 0 rgba(201,164,71,0.13)',
          transitionProperty: 'box-shadow,transform',
          overflowY: 'auto', // Allow overflow for scroll if content exceeds viewport
        }}
        role="menu"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        {/* Cross icon to close mobile nav */}
        <button
          className="absolute top-4 right-4 text-4xl text-navy hover:text-gold p-2 rounded-full transition bg-white shadow-lg focus:outline-none"
          style={{ zIndex: 111 }}
          aria-label="Close navigation"
          onClick={() => setMobileOpen(false)}
          tabIndex={mobileOpen ? 0 : -1}
        >
          <HiX />
        </button>
        {navLinks.map(link => (
          <NavLink
            key={link.name}
            to={link.to}
            className={({ isActive }) =>
              `block py-3 px-3 font-body text-xl font-semibold transition-all mb-1 border-none  shadow-none rounded-none 
              ${underlineBase} ${isActive ? underlineActive : "text-navy hover:text-gold " + underlineInactive}`
            }
            end={link.to === '/'}
            onClick={() => setMobileOpen(false)}
            tabIndex={mobileOpen ? 0 : -1}
            style={{
              outline: "none"
            }}
          >
            {link.name}
          </NavLink>
        ))}
        <Link
          to="/contact"
          className="bg-black text-white text-lg mt-6 w-full  text-center shadow-md font-bold py-3 rounded-xl tracking-wider"
          onClick={() => setMobileOpen(false)}
          tabIndex={mobileOpen ? 0 : -1}
        >
          Get Quote
        </Link>
        <div className="mt-8 h-2 w-2/3 mx-auto rounded-full bg-white" />
        <div className="text-center pt-6 text-xs text-navy/40 font-body tracking-wider">
          &copy; {new Date().getFullYear()} Practicool Ltd
        </div>
      </aside>
    </nav>
  )
}

export default NavBar