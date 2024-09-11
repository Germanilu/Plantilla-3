'use client';
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
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
      <motion.div className="box" 
        variants={{
          hidden: { opacity: 0, y: 70 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: .5, duration: 0.5 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
        <div className="logo">{t('logo')}</div>
        <p className="text">{t('text')}</p>
        <div className="hour-box">
          <HiCalendarDays />
          <div className="hour">{t('hour')}</div>
        </div>
        <div className="hour-box">
          <SiGooglestreetview />
          <div className="hour">{t('street')}</div>
        </div>
        <div className="hour-box">
          <FaPhone />
          <div className="hour">{t('phone')}</div>
        </div>
      </motion.div>

      <motion.div className="box center"
       variants={{
        hidden: { opacity: 0, y: 70 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ delay: .5, duration: 0.5 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}>

        <h3>{t('pages')}</h3>
        <Link href={'/'} className="link">{t('home')}</Link>
        <Link href={'/#contact'} className="link">{t('reservation')}</Link>
        <Link href={'/menu'} className="link">{t('menu')}</Link>
        <Link href={'/contact-us'} className="link">{t('contact')}</Link>
      </motion.div>

      <motion.div className="box center"
       variants={{
        hidden: { opacity: 0, y: 70 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ delay: .5, duration: 0.5 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}>

        <h3>{t('opening-hours')}</h3>
        <div className="opening-hours-box">
          <div className="days">{t('monday-friday')}</div>
          <div className="hours">{t('hour1')}</div>
        </div>
        <div className="opening-hours-box">
          <div className="days">{t('saturday-sunday')}</div>
          <div className="hours">{t('hour2')}</div>
        </div>
      </motion.div>

      <motion.div className="box socials"
       variants={{
        hidden: { opacity: 0, y: 70 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ delay: .5, duration: 0.5 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}>
        
        <h3 className="socials-h3">{t('socials')}</h3>
        <div className="socials-box">
        <FaSquareFacebook size={30}/>
        <FaSquareInstagram size={30}/>
        <FaGooglePlusSquare size={30}/>
        </div>
      </motion.div>
    </div>
  )
}



