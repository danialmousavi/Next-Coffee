import React, { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

function Navbar() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const route = useRouter();
  
  const searchHandler = () => {
    if (search.trim()) {
      route.push(`/search?q=${search}`);
      setSearch("");
      setMenuOpen(false); // وقتی سرچ کرد، منو بسته بشه
    }
  };

  const searchHandlerWithEnter = (event) => {
    if (event.key === "Enter" && search.trim()) {
      route.push(`/search?q=${search}`);
      setSearch("");
      setMenuOpen(false);
    }
  };

  return (
    <div className={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav
        className={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        {/* لوگو */}
        <Link href="/" className={`${styles.navbar_brand} px-lg-4 m-0`}>
          <h1 className="m-0 display-4 text-uppercase text-white">
            Next-Coffee
          </h1>
        </Link>

        {/* سرچ مخصوص دسکتاپ */}
        <div className={`d-none d-lg-flex align-items-center position-relative`}>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={searchHandlerWithEnter}
            type="text"
            className={styles.search_input}
            placeholder="Search..."
          />
          <FontAwesomeIcon
            onClick={searchHandler}
            className={styles.search_icon}
            icon={faSearch}
          />
        </div>

        {/* دکمه توگل */}
        <button
          type="button"
          className={`${styles.navbar_toggler}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`${styles.navbar_toggler_icon}`}></span>
        </button>

        {/* منو */}
        <div
          className={`${styles.navbar_collapse} justify-content-between ${
            menuOpen ? "show" : "collapse"
          }`}
        >
          <div className={`${styles.navbar_nav} ml-auto p-4`}>
            {/* سرچ مخصوص موبایل */}
            <div className="d-block d-lg-none mb-3 position-relative">
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={searchHandlerWithEnter}
                type="text"
                className={styles.search_input}
                placeholder="Search..."
              />
              <FontAwesomeIcon
                onClick={searchHandler}
                className={styles.search_icon}
                icon={faSearch}
              />
            </div>

            <Link
              href="/"
              className={`${styles.nav_link} ${route.pathname=="/"?styles.active_nav_link:""}`}
            >
              Home
            </Link>
            <Link href="/about" className={`${styles.nav_link} ${route.pathname=="/about"?styles.active_nav_link:""}`}>
              About
            </Link>
            <Link href="/services" className={`${styles.nav_link} ${route.pathname=="/services"?styles.active_nav_link:""}`}>
              Service
            </Link>
            <Link href="/menu" className={`${styles.nav_link} ${route.pathname=="/menu"?styles.active_nav_link:""}`}>
              Menu
            </Link>
            <div className={`${styles.dropdown}`}>
              <a
                href="#"
                className={`${styles.nav_link} ${styles.dropdown_toggle}`}
              >
                Pages
              </a>
              <div
                className={`${styles.dropdown_menu} ${styles.text_capitalize}`}
              >
                <Link
                  href="/reservation"
                  className={`${styles.dropdown_item} ${route.pathname=="/reservation"?styles.active_nav_link:""}`}
                  
                >
                  Reservation
                </Link>
                <Link
                  href="/testimonial"
                  className={`${styles.dropdown_item}${route.pathname=="/testimonial"?styles.active_nav_link:""} `}
                >
                  Testimonial
                </Link>
              </div>
            </div>
            <Link href="/contact" className={`${styles.nav_link} ${route.pathname=="/contact"?styles.active_nav_link:""}`}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
