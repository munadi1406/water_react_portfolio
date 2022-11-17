import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  let darkMode = 0;

  function mode() {
    const navbar = document.querySelector(".navbar");
    const navbar2 = document.querySelector(".navbar-mobile-version");
    const nTitle = document.querySelector(".navbar-title");
    const cTitle = document.querySelector(".color-title");
    const icon = document.querySelectorAll(".material-symbols-outlined");
    const a = document.querySelectorAll(".title-icon");
    const spanDefault = document.querySelectorAll(".sDefault");
    const iconDarkMode = document.querySelector(".icon-dark-mode");
    const navbarDefault = document.querySelector('.nav-default');
    const wrapperNavbarDefault = document.querySelector(".wrapper-navbar-default");

    navbar2.classList.toggle("dark-mode");
    navbar.classList.toggle("dark-mode");
    nTitle.classList.toggle("color-dark");
    cTitle.classList.toggle("color-dark");
    wrapperNavbarDefault.classList.toggle('dark-mode');
    navbarDefault.classList.toggle('dark-mode-mobile');

    darkMode += 1;
    if (darkMode === 10) {
      darkMode -= darkMode;
    }
    if (darkMode % 2 === 0) {
      cTitle.textContent = "Dark Mode";
      iconDarkMode.innerHTML = "dark_mode";
    } else {
      iconDarkMode.innerHTML = "wb_sunny";
      cTitle.textContent = "Light Mode";
    }

    spanDefault.forEach((e) => {
      e.classList.toggle("color-dark");
    });
    icon.forEach((e) => {
      e.classList.toggle("color-dark");
    });
    a.forEach((e) => {
      e.classList.toggle("color-dark");
    });

    
  }
  return (
    <nav className="navbar">
    <div className="wrapper-navbar-default">
      <nav className="nav-default">
        <div className="navbar-brand">
        <i><FontAwesomeIcon icon={faDroplet} /></i>
          <div className="navbar-title">Water</div>
        </div>
        <ul className="ul-default-version">
          <li className="link-default">
            <NavLink to={"/"}>
              <span className="sDefault" data-hover="Home">
                Home
              </span>
            </NavLink>
          </li>
          <li className="link-default">
            <NavLink to={"project"}>
              <span className="sDefault" data-hover="Project">
                Project
              </span>
            </NavLink>
          </li>
          <li className="link-default">
            <NavLink to={"Profile"}>
              <span className="sDefault" data-hover="Resume">
                Profile
              </span>
            </NavLink>
          </li>
          <li className="link-default">
            <NavLink to={"contact"}>
              <span className="sDefault" data-hover="Contact">
                Contact
              </span>
            </NavLink>
          </li>
        </ul>
        <div className="color-mode" onClick={mode}>
          <span className="material-symbols-outlined icon-dark-mode">
            dark_mode
          </span>
          <div className="color-title">Dark Mode</div>
        </div>
      </nav>
    </div>
      {/* <!-- navbar untuk versi mobile --> */}
      <nav className="navbar-mobile-version">
        <ul>
          <li className="link">
            <NavLink to={"/"} className="a">
              <span className="material-symbols-outlined">home</span>
              <span className="title-icon">Home</span>
            </NavLink>
          </li>
          <li className="link">
            <NavLink to={"/project"} className="a">
              <span className="material-symbols-outlined">layers</span>
              <span className="title-icon">Project</span>
            </NavLink>
          </li>
          <li className="link">
            <NavLink to={"/profile"} className="a">
              <span className="material-symbols-outlined">library_books</span>
              <span className="title-icon">Profile</span>
            </NavLink>
          </li>
          <li className="link">
            <NavLink to={"/contact"} className="a">
              <span className="material-symbols-outlined">contact_mail</span>
              <span className="title-icon">Contact</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </nav>
  );
};
export default Navbar;
