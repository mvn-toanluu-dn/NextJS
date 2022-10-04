import React, { useEffect, useRef } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { GoMail, GoSearch } from "react-icons/go";
import { AiOutlineShopping } from "react-icons/ai";
import { Images } from "../../assets/images/index";
import Image from "next/image";

function Header() {
  return (
    <header className="page-header">
      <div className="header-top flex">
        <ul className="header-top-list col-6 flex">
          <li className="header-top-item flex">
            <IoLocationOutline className="icon-item" />
            <h6 className="info-item">28 tenth Avenue Boston, BT 58966</h6>
          </li>
          <li className="header-top-item flex">
            <GoMail className="icon-item" />
            <h6 className="info-item">Info@studeon.com</h6>
          </li>
        </ul>
        <form className="header-form flex col-6">
          <div className="form-search flex">
            <input className="form-input" placeholder="Search" />
            <GoSearch className="search" />
          </div>
          <a href="/#" className="btn login">
            login / register
          </a>
        </form>
      </div>
      <div className="header-bottom flex">
        <a href="/#" className="header-logo">
          <Image src={Images.logo} alt="" />
        </a>
        <div className="header-menu flex">
          <nav className="header-nav">
            <ul className="header-menu-list flex">
              <li className="header-menu-item">
                <a href="/#">Home</a>
              </li>
              <li className="header-menu-item">
                <a href="/#">Features</a>
              </li>
              <li className="header-menu-item">
                <a href="/#">Store</a>
              </li>
              <li className="header-menu-item">
                <a href="/#">Blog</a>
              </li>
              <li className="header-menu-item">
                <a href="/#">Contacts</a>
              </li>
              <li className="header-menu-item">
                <a href="/#">Events</a>
              </li>
            </ul>
          </nav>
          <i className="header-bag">
            <AiOutlineShopping className="bag-item" />
            <span className="count">0</span>
          </i>
        </div>
      </div>
    </header>
  );
}

export default Header;
