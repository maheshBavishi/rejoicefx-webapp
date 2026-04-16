import React, { useState, useEffect, useRef } from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import Button from "../button";
import RightLgArrow from "../icons/rightLgArrow";
import Right from "../icons/right";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import MobileHeader from "../mobileHeader";
import AuthModal from "../authModal";
import { useAppContext } from "../../context/AppContext";
import { ChevronDown, UserCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Logo = "/assets/logo/logo.svg";

const menuItems = [
  {
    title: "Products",
    submenu: [
      {
        title: "Forex Broker CRM",
        description: "Complete CRM solution tailored for Forex brokers to manage clients efficiently.",
        redirectLink: "/forex-crm",
      },
      {
        title: "Forex Prop Firm CRM",
        description: "Powerful CRM designed for proprietary trading firms and funded trader programs.",
        redirectLink: "/forex-prop-firm-crm",
      },
      {
        title: "Copy Trading",
        description: "Enable clients to copy expert traders' strategies and grow their portfolios.",
        redirectLink: "/forex-crm",
      },
      {
        title: "MAM/PAMM Social Trading",
        description: "Multi-account management and social trading solutions for fund managers.",
        redirectLink: "/forex-crm",
      },
    ],
  },
  {
    title: "Corporate Services",
    submenu: [
      {
        title: "Forex Broker Setup",
        description: "End-to-end Forex broker setup services to launch your brokerage swiftly.",
        redirectLink: "/forex-crm",
      },
      {
        title: "MT4/MT5 Setup & Training",
        description: "Professional MetaTrader 4 & 5 configuration, deployment, and staff training.",
        redirectLink: "/forex-crm",
      },
      {
        title: "RMS",
        description: "Risk Management System to monitor and control trading exposure in real-time.",
        redirectLink: "/forex-crm",
      },
      {
        title: "Liquidity Provider's Setup",
        description: "Connect to top-tier liquidity providers for the best spreads and execution.",
        redirectLink: "/forex-crm",
      },
      {
        title: "AI/ML Services",
        description: "Cutting-edge artificial intelligence and machine learning solutions for trading.",
        redirectLink: "/ai-development",
      },
    ],
  },
  {
    title: "Company",
    submenu: [
      {
        title: "About Us",
        description: "Learn about RejoiceFX, our mission, vision, and the team behind it all.",
        redirectLink: "/about-us",
      },
      {
        title: "Career",
        description: "Join our growing team and build the future of Forex technology with us.",
        redirectLink: "/career",
      },
    ],
  },
  {
    title: "Resources",
    submenu: [
      {
        title: "Blog",
        description: "Insights, tutorials, and the latest trends from the Forex industry experts.",
        redirectLink: "/blog",
      },
      {
        title: "News",
        description: "Stay updated with the latest news, product releases, and market updates.",
        redirectLink: "/news",
      },
      {
        title: "Case Studies",
        description: "Real-world success stories and business outcomes powered by RejoiceFX.",
        redirectLink: "/case-studies",
      },
    ],
  },
];

// ── Framer Motion variants ──────────────────────────────────────────────────
const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.18, ease: [0.4, 0, 0.6, 1] },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.15, ease: [0.4, 0, 0.6, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.22, ease: "easeOut" },
  }),
};

const chevronVariants = {
  closed: { rotate: 0 },
  open: { rotate: 180 },
};

// ── Component ───────────────────────────────────────────────────────────────
export default function Header() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [header, setHeader] = useState(false);
  const { showLogin, setShowLogin } = useAppContext();
  const [showMenu, setShowMenu] = useState(false);
  const { isUserLoggedIn, setIsUserLoggedIn, user, setUser } = useAppContext();

  const menuRef = useRef(null);
  const hoverTimeout = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (header) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [header]);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin");
    setIsUserLoggedIn(loginStatus);
    const storedUser =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : null;
    setUser(storedUser);
  }, []);

  useEffect(() => {
    if (!showMenu) return;
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

  const handleMouseEnter = (index) => {
    clearTimeout(hoverTimeout.current);
    setHoveredMenu(index);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 80);
  };

  const handleLinkClick = () => setHoveredMenu(null);

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerAlignment}>

            {/* Logo */}
            <div className={styles.logo}>
              <Link href="/">
                <Image src={Logo} layout="fill" />
              </Link>
            </div>

            {/* Nav Menu */}
            <nav className={styles.menuAlignment}>
              {menuItems.map((menu, index) => (
                <div
                  key={index}
                  className={styles.relativeHeader}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Trigger label */}
                  <div
                    className={classNames(styles.menu, {
                      [styles.menuActive]: hoveredMenu === index,
                    })}
                  >
                    <span>{menu.title}</span>
                    <motion.span
                      className={styles.chevronWrapper}
                      variants={chevronVariants}
                      animate={hoveredMenu === index ? "open" : "closed"}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <ChevronDown size={15} />
                    </motion.span>
                  </div>

                  {/* Full-width dropdown */}
                  <AnimatePresence>
                    {hoveredMenu === index && (
                      <motion.div
                        className={styles.submenubox}
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="container">
                          <div className={styles.grid}>
                            {menu.submenu.map((item, i) => (
                              <motion.div
                                key={i}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                              >
                                <Link
                                  className={styles.boxLine}
                                  href={item.redirectLink}
                                  onClick={handleLinkClick}
                                >
                                  <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                  </div>
                                  <div className={styles.solution}>
                                    <span>See Solution</span>
                                    <Right />
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Buttons */}
            <div className={styles.buttonDesign}>
              {isUserLoggedIn ? (
                <div className={styles.menuWrapper} ref={menuRef}>
                  <Button
                    btnStyle={true}
                    text={
                      <div className={styles.userIconWrapper}>
                        <UserCircle className={styles.userIcon} />
                        {user?.name?.slice(0, 8).length > 8 ? "..." : user?.name}
                        <ChevronDown className={styles.downIcon} />
                      </div>
                    }
                    onClick={() => setShowMenu((prev) => !prev)}
                  />
                  {showMenu && (
                    <div className={styles.menuDropdown}>
                      <button
                        onClick={() => {
                          setShowMenu(false);
                          router.push(`/profile/${user?._id}`);
                        }}
                      >
                        Profile
                      </button>
                      <button
                        onClick={() => {
                          setShowMenu(false);
                          router.push(`/payment-history/${user?._id}`);
                        }}
                      >
                        Payment History
                      </button>
                      <button
                        onClick={() => {
                          localStorage.removeItem("user");
                          localStorage.removeItem("isLogin");
                          localStorage.removeItem("token");
                          router.push("/");
                          setIsUserLoggedIn(false);
                          setShowMenu(false);
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Button text="Login" onClick={() => setShowLogin(true)} />
              )}
              <div className={styles.contactBtn}>
                <Link href="/contact-us">
                  <Button text="Contact Us" icon={<RightLgArrow />} />
                </Link>
              </div>
              <div
                className={styles.mobileMenu}
                onClick={() => setHeader(!header)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </header>

      <MobileHeader header={header} setHeader={setHeader} />
      <AuthModal
        isOpen={showLogin}
        setShowLogin={setShowLogin}
        onClose={() => setShowLogin(false)}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />
    </>
  );
}
