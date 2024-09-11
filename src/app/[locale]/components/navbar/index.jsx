'use client'

import { Link } from '../../../../navigation';
import LanguageSwitcher from '../language-switcher';
import { useTranslations } from "next-intl";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGooglePlusSquare } from "react-icons/fa";

import './index.scss';
import Button from '../button';

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useSelector(state => state.responsive.isMobile);

  return (
    <>
      {
        isMobile ?
          <nav className="navbar">
            <div className='menu-action' onClick={() => setOpenMenu(!openMenu)}>
              {openMenu ? <RxCross2 className='burger-menu-icon' /> : <IoMenu className='burger-menu-icon' />}
              {openMenu &&
                <ul className='mobile-navbar-box'>
                  <li className="list-item">
                    <Link className="item" href="/">{t('home')}</Link>
                  </li>
                  <li className="list-item">
                    <Link className="item" href="/about" >{t('about-us')}</Link>
                  </li>
                  <li className="list-item">
                    <Link className="item" href="/menu">{t('menu')}</Link>
                  </li>
                  <li className="list-item">
                    <Link className="item" href="/contact-us">{t('contact-us')}</Link>
                  </li>
                  <li className="list-item">
                    <LanguageSwitcher className="language-switcher" />
                  </li>
                </ul>
              }
            </div>
          </nav>
          :

          <nav className="navbar">
            <div className="logo">The Lab</div>
            <ul className="navbar-list">
              <li className="list-item">
                <Link className="item" href="/">{t('home')}</Link>
              </li>
              <li className="list-item">
                <Link className="item" href="/about" >{t('about-us')}</Link>
              </li>
              <li className="list-item">
                <Link className="item" href="/menu">{t('menu')}</Link>
              </li>
              <li className="list-item">
                <Link className="item" href="/contact-us">{t('contact-us')}</Link>
              </li>
              <div className="language-switcher">
                <LanguageSwitcher />
              </div>
            </ul>
            <div className="socials">
              <FaSquareFacebook size={23} />
              <FaSquareInstagram size={23} />
              <FaGooglePlusSquare size={23} />
            </div>
            <Link className="navbar-call-to-action" href="/contact-us">{t('book-a-table')}</Link>
          </nav>
      }
    </>
  )
}