"use client";

import { useState } from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowDown2, ArrowUp, ArrowUp2 } from "iconsax-reactjs";

const collapsibleSections = [
  {
    title: "mēttā muse",
    links: [
      "About Us",
      "Stories",
      "Artisans",
      "Boutiques",
      "Contact Us",
      "EU Compliances Docs",
    ],
  },
  {
    title: "Quick Links",
    links: [
      "Orders & Shipping",
      "Join/Login as a Seller",
      "Payment & Pricing",
      "Return & Refunds",
      "FAQs",
      "Privacy Policy",
      "Terms & Conditions",
    ],
  },
];

export default function Footer() {
  interface OpenSectionsState {
    [key: string]: boolean;
  }

  const [openSections, setOpenSections] = useState<OpenSectionsState>({});

  const toggleSection = (section: string): void => {
    setOpenSections((prev: OpenSectionsState) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div
          style={{
            display: "flex",
          }}
          className={styles.subscribe}
        >
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className={styles.form}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.contact}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
            }}
          >
            <h4>CONTACT US</h4>

            <div className={styles.contactDetails}>
              <p>+44 221 133 5360</p>
              <div
                style={{
                  width: ".5rem",
                  height: ".5rem",
                  backgroundColor: "#f0f0f0",
                  position: "relative",
                  transform: "rotate(45deg)",
                }}
                className={styles.star}
              ></div>
              <p>customercare@mettamuse.com</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
            }}
          >
            <h4>CURRENCY</h4>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                cursor: "pointer",
              }}
            >
              <Image
                src="/logos/payments/usd.png"
                alt="USD"
                width={24}
                height={24}
              />{" "}
              <div
                style={{
                  width: ".5rem",
                  height: ".5rem",
                  backgroundColor: "#f0f0f0",
                  display: "inline-block",
                  position: "relative",
                  transform: "rotate(45deg)",
                }}
              ></div>
              USD
            </div>
            <p
              style={{
                fontSize: "14px",
              }}
            >
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.bottom}>
        {collapsibleSections.map((section, index) => (
          <div key={index} className={styles.section}>
            <div
              className={styles.sectionHeader}
              onClick={() => toggleSection(section.title)}
            >
              <h4>{section.title}</h4>
              <span className={styles.arrow}>
                {openSections[section.title] ? <ArrowUp2 /> : <ArrowDown2 />}
              </span>
            </div>

            <div className={styles.sectionHeaderDesktop}>
              <h4>{section.title}</h4>
              <span className={styles.arrow}></span>
            </div>
            <ul
              className={`${styles.sectionList} ${
                openSections[section.title] ? styles.show : ""
              }`}
            >
              {section.links.map((link, i) => (
                <li key={i}>{link}</li>
              ))}
            </ul>
            <ul className={`${styles.sectionListDesktop}`}>
              {section.links.map((link, i) => (
                <li key={i}>{link}</li>
              ))}
            </ul>
          </div>
        ))}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <div className={styles.payment}>
            <h4>FOLLOW US</h4>
            <div className={styles.paymentIcons}>
              {["linkedin", "instagram"].map((icon) => (
                <Link
                  key={icon}
                  href={`https://www.${icon}.com/mettamuse`}
                  target="_blank"
                >
                  <Image
                    key={icon}
                    src={`/icons/${icon}.svg`}
                    alt={icon}
                    width={40}
                    height={28}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.payment}>
            <h4>metta muse ACCEPTS</h4>
            <div className={styles.paymentIcons}>
              {["gpay", "mastercard", "paypal", "amex", "applepay", "pay"].map(
                (icon) => (
                  <Image
                    key={icon}
                    src={`/logos/payments/${icon}.png`}
                    alt={icon}
                    width={56}
                    height={35}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copy}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
}
