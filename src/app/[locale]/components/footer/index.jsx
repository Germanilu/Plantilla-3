import { useTranslations } from "next-intl";
import { HiCalendarDays } from "react-icons/hi2";
import { SiGooglestreetview } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGooglePlusSquare } from "react-icons/fa";
import {Link}       from '@/navigation';
import './index.scss'

export default function Footer() {

  const t = useTranslations("Footer");

  return (
    <div className="footer-design">
      <div className="box">
        <div className="logo">Bridge</div>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, quia?</p>
        <div className="hour-box">
          <HiCalendarDays />
          <div className="hour">Mon-Sun: 09am - 09pm</div>
        </div>
        <div className="hour-box">
          <SiGooglestreetview />
          <div className="hour">cinca 71 1289 44 bvc</div>
        </div>
        <div className="hour-box">
          <FaPhone />
          <div className="hour">+39 340999999</div>
        </div>
      </div>

      <div className="box center">
        <h3>Pages</h3>
        <Link href={'/'} className="link">Home</Link>
        <Link href={'/#contact'} className="link">Reservations</Link>
        <Link href={'/menu'} className="link">Menu</Link>
        <Link href={'/contact-us'} className="link">Contact</Link>
      </div>

      <div className="box center">
        <h3>Opening Hours</h3>
        <div className="opening-hours-box">
          <div className="days">Monday-Friday:</div>
          <div className="hours">10:00am - 01:00am</div>
        </div>
        <div className="opening-hours-box">
          <div className="days">Saturday-Sunday:</div>
          <div className="hours">10:00am - 03:00am</div>
        </div>
      </div>

      <div className="box socials">
        <h3 className="socials-h3">Socials</h3>
        <div className="socials-box">
        <FaSquareFacebook size={30}/>
        <FaSquareInstagram size={30}/>
        <FaGooglePlusSquare size={30}/>
        </div>
      </div>
    </div>
  )
}



