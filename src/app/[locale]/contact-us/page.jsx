import { useTranslations }  from "next-intl";
import Image from 'next/image';
import contactImg from '@/static/media/img/contact2.jpg'
import Contact              from '../components/contact/index';
import './page.scss'

export default function ContactUs(){
  const t = useTranslations("Contact-us");
  return (
    <div className="contact-us-design">
      <div className="img-container">
        <Image className="img" src={contactImg} alt="bar counter" quality={100} />
      </div>
      <div className="contact-container">
      <h1>{t('title')}</h1>
        <Contact/>
      </div>
    </div>
  ) 
}