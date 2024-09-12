import { useTranslations } from "next-intl";
import Image from 'next/image';
import contactImg from '@/static/media/img/contact.jpg'
import img1 from '@/static/media/img/building.jpg'
import img2 from '@/static/media/img/mojito.png'
import img3 from '@/static/media/img/bar.jpg'

import './page.scss';

export default function About() {
  const t = useTranslations("About");
  return (
    <div className="about-design">
      <div className="img-container">
        <h1>{t('title')}</h1>
        <Image className="img" src={contactImg} alt="bar counter" quality={100} />
      </div>
      <div className="img-text-container">
        <div className="img-container">
          <Image className="img" src={img1} alt="bar neon" quality={100} />
        </div>
        <div className="text-container">
          <p className="desc">{t('p1')}</p>
          <h2 className="title">{t('t1')}</h2>
          <p className="text">
          {t('text1')}
          </p>
        </div>
      </div>
      <div className="img-text-container img-right">
        <div className="img-container">
          <Image className="img" src={img2} alt="mojito no bg" quality={100} />
        </div>
        <div className="text-container">
          <p className="desc"> {t('p2')}</p>
          <h2 className="title"> {t('t2')}</h2>
          <p className="text">
          {t('text2')}
          </p>
        </div>
      </div>
      <div className="img-fullwidth-container">
          <Image className="img" src={contactImg} alt="bar counter" quality={100} />
        </div>
    </div>
  )
}