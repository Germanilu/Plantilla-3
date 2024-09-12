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
          <p className="desc">behind the scenes</p>
          <h2 className="title">our story</h2>
          <p className="text">
            Nestled in the heart of the city, our cocktail bar is a haven for those who appreciate the art of mixology. Founded by a group of passionate bartenders, our story began with a simple love for crafting unique, memorable experiences one drink at a time. We believe in the magic that happens when the finest spirits meet fresh ingredients and a touch of creativity. From classic cocktails to innovative concoctions, every sip tells a story. Join us and become part of our journey.
          </p>
        </div>
      </div>
      <div className="img-text-container img-right">
        <div className="img-container">
          <Image className="img" src={img2} alt="mojito no bg" quality={100} />
        </div>
        <div className="text-container">
          <p className="desc">crafted with passion</p>
          <h2 className="title">our cocktails</h2>
          <p className="text">
              At the heart of our bar lies our commitment to crafting cocktails that are as unforgettable as they are delicious. Each drink is a masterpiece, meticulously designed to balance flavors, aromas, and aesthetics. Our menu features a curated selection of classics alongside our signature creations, all made with the finest ingredients sourced from around the world. Whether you’re a fan of timeless favorites or adventurous blends, every cocktail is a journey, carefully mixed to perfection and served with a touch of flair.
          </p>
        </div>
      </div>
      <div className="img-fullwidth-container">
          <Image className="img" src={contactImg} alt="bar counter" quality={100} />
        </div>
    </div>
  )
}