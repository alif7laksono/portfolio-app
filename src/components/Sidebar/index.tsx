import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineUser,
  AiOutlineAppstore,
  AiOutlineMail,
} from "react-icons/ai";
import "./styles.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 600);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    if (window.innerWidth <= 600) {
      setIsSidebarOpen(false);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="header">
        <h1 className="title">Tokyo</h1>
        {window.innerWidth <= 600 && (
          <button className="toggle-btn" onClick={toggleSidebar}>
            {isSidebarOpen ? "×" : "☰"}
          </button>
        )}
      </div>
      {isSidebarOpen && (
        <nav>
          <ul>
            <li onClick={closeSidebar}>
              <NavLink to="/">
                <span>
                  <AiFillHome /> Home
                </span>
              </NavLink>
            </li>
            <li onClick={closeSidebar}>
              <NavLink to="/about">
                <span>
                  <AiOutlineUser /> About
                </span>
              </NavLink>
            </li>
            <li onClick={closeSidebar}>
              <NavLink to="/portfolio">
                <span>
                  <AiOutlineAppstore /> Portfolio
                </span>
              </NavLink>
            </li>
            <li onClick={closeSidebar}>
              <NavLink to="/services">
                <span>
                  <AiOutlineAppstore /> Services
                </span>
              </NavLink>
            </li>
            <li onClick={closeSidebar}>
              <NavLink to="/contact">
                <span>
                  <AiOutlineMail /> Contact
                </span>
              </NavLink>
            </li>
          </ul>
          <div className="footer">
            <p>@copyright 2023</p>
            <span>Alif Laksono</span>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
