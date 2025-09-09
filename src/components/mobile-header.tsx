"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { mobile_menu_data } from "@/data/menu-data";

const MobileHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-header') && !target.closest('.mobile-menu-toggle')) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button 
        className="mobile-menu-toggle d-lg-none"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Mobile Header */}
      <div className={`mobile-header ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-header-top">
          <div className="mobile-logo">
            <Link href="/" onClick={closeMenu}>
              <Image 
                src="/assets/img/logo/logo.png" 
                alt="The X Media" 
                width={150} 
                height={50}
                priority
              />
            </Link>
          </div>
          <button 
            className="mobile-close-btn"
            onClick={closeMenu}
            aria-label="Close mobile menu"
          >
            <i className="fa-light fa-xmark"></i>
          </button>
        </div>

        {/* Mobile Navigation - Updated to use direct links */}
        <nav className="mobile-navigation">
          <ul className="mobile-menu">
            {mobile_menu_data.map((menu) => (
              <li key={menu.id} className="mobile-menu-item">
                <Link 
                  href={menu.link} 
                  onClick={closeMenu}
                  className="mobile-menu-link"

                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Contact Info */}
        <div className="mobile-contact-info">
          <div className="mobile-contact-item">
            <i className="fa-light fa-phone"></i>
            <a href="tel:+14372635601">+1 437 263 5601</a>
          </div>
          <div className="mobile-contact-item">
            <i className="fa-light fa-envelope"></i>
            <a href="mailto:contact@thexmedia.com">contact@thexmedia.com</a>
          </div>
          <div className="mobile-contact-item">
            <i className="fa-light fa-location-dot"></i>
            <span>Mississauga, Ontario, Canada</span>
          </div>
        </div>

        {/* Mobile CTA Button */}
        <div className="mobile-cta">
          <Link 
            href="/contact" 
            className="tp-btn tp-btn-2 w-100"
            onClick={closeMenu}

          >
            Get Free Consultation
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}></div>
      )}
    </>
  );
};

export default MobileHeader;
