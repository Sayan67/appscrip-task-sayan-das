"use client";

import { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import { Inter } from "next/font/google";
import {
  ArrowDown2,
  Element4,
  HamburgerMenu,
  Heart,
  Profile,
  SearchNormal1,
  ShoppingBag,
} from "iconsax-reactjs";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const navLinks = [
  {
    name: "SHOP",
    href: "/shop",
  },
  {
    name: "SKILLS",
    href: "/skills",
  },
  {
    name: "STORIES",
    href: "/stories",
  },
  {
    name: "ABOUT",
    href: "/about",
  },
  {
    name: "CONTACT US",
    href: "/contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.topBar}>
        <Element4 size="20" color="#EB4C6B" />
        <p>Sale!! Upto 70% discount!!</p>
      </div>
      <div className={styles.navbarWrapper}>
        <div className={styles.navbar}>
          <div className={styles.navbarLeft}>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className={styles.menuButton}
            >
              <HamburgerMenu size="24" className={styles.icon} />
            </button>
            <Link href={'/'}>
              <Image
                src="/logos/Logo.svg"
                alt="Brand Logo"
                className={`${styles.icon} ${styles.brandLogo}`}
                width={36}
                height={36}
              />
            </Link>
          </div>

          <div className={`${styles.logo} ${inter.className}`}>LOGO</div>

          <div className={styles.navbarRight}>
            <SearchNormal1 size={24} className={styles.icon} />
            <Heart size={24} className={styles.icon} />
            <ShoppingBag size={24} className={styles.icon} />
            <Profile size={24} className={`${styles.icon} ${styles.profile}`} />
            <div className={`${styles.languageSelector}`}>
              <p>ENG</p>
              <ArrowDown2 size="20" className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.navbarLinksWrapper}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`${styles.navbarLink}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Drawer */}
      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)}>
          <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            <ul className={styles.menuList}>
              <li>Home</li>
              <li>Shop</li>
              <li>Wishlist</li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
