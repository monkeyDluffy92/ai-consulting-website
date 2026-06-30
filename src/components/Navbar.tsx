"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Toggle state based on scroll position (e.g. past 50px)
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.logoContainer} style={{textDecoration: 'none'}}>
        {/* The 'x' bounces in, and stays visible */}
        <span className={styles.logoX}>x</span>
        
        {/* The 'e' slides in, and stays visible */}
        <span className={styles.logoE}>e</span>
        
        {/* The 'lement' slides in, but collapses when scrolled */}
        <span className={styles.logoLement}>lement</span>
      </Link>
      
      {/* Desktop Links */}
      <div className={styles.navLinks}>
        <Link href="/services" className={`${styles.navLink} ${pathname === '/services' ? styles.active : ''}`} style={{textDecoration: 'none'}}>Services</Link>
        <Link href="/case-studies" className={`${styles.navLink} ${pathname === '/case-studies' ? styles.active : ''}`} style={{textDecoration: 'none'}}>Case Studies</Link>
        <Link href="/about" className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`} style={{textDecoration: 'none'}}>About</Link>
        <Link href="/#contact" className={styles.navLink} style={{textDecoration: 'none'}}>Contact</Link>
      </div>

      {/* Hamburger Icon */}
      <div 
        className={styles.hamburger} 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className={`${styles.bar} ${isMobileMenuOpen ? styles.open : ""}`}></div>
        <div className={`${styles.bar} ${isMobileMenuOpen ? styles.open : ""}`}></div>
        <div className={`${styles.bar} ${isMobileMenuOpen ? styles.open : ""}`}></div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/services" className={`${styles.mobileLink} ${pathname === '/services' ? styles.activeMobile : ''}`} onClick={() => setIsMobileMenuOpen(false)} style={{textDecoration: 'none'}}>Services</Link>
          <Link href="/case-studies" className={`${styles.mobileLink} ${pathname === '/case-studies' ? styles.activeMobile : ''}`} onClick={() => setIsMobileMenuOpen(false)} style={{textDecoration: 'none'}}>Case Studies</Link>
          <Link href="/about" className={`${styles.mobileLink} ${pathname === '/about' ? styles.activeMobile : ''}`} onClick={() => setIsMobileMenuOpen(false)} style={{textDecoration: 'none'}}>About</Link>
          <Link href="/#contact" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)} style={{textDecoration: 'none'}}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
