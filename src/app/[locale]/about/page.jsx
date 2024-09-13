'use client'
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from 'next/image';
import contactImg from '@/static/media/img/contact.jpg'
import Button from '../components/button'
import img1 from '@/static/media/img/building.jpg'
import img2 from '@/static/media/img/mojito.png'

import './page.scss';

export default function About() {
  const t = useTranslations("About");
  return (
    <div className="about-design">
      <motion.div className="img-container"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ delay: .1, duration: 0.5 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} >

        <h1>{t('title')}</h1>
        <Image className="img" src={contactImg} alt="bar counter" quality={100} />
      </motion.div>

      <div className="img-text-container" >
        <motion.div className="img-container"
         variants={{
          hidden: { opacity: 0, y: 70 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: .5, duration: 0.5 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
          <Image className="img" src={img1} alt="bar neon" quality={100} />
        </motion.div>
        <motion.div className="text-container"
         variants={{
          hidden: { opacity: 0, y: 70 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: .5, duration: 0.5 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
          <p className="desc">{t('p1')}</p>
          <h2 className="title">{t('t1')}</h2>
          <p className="text">
          {t('text1')}
          </p>
        </motion.div>
      </div>

      <div className="img-text-container img-right" >
        <motion.div className="img-container"
         variants={{
          hidden: { opacity: 0, y: 70 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: .5, duration: 0.5 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}>

          <Image className="img" src={img2} alt="mojito no bg" quality={100} />
        </motion.div>
        <motion.div className="text-container"
         variants={{
          hidden: { opacity: 0, y: 70 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: .5, duration: 0.5 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
          <p className="desc"> {t('p2')}</p>
          <h2 className="title"> {t('t2')}</h2>
          <p className="text">
          {t('text2')}
          </p>
          <div className="button-container">
            <Button  href='/menu' text='view-more'/>
          </div>
        </motion.div>
      </div>
      <motion.div className="img-fullwidth-container"
        variants={{
          hidden: { opacity: 0, y: 70 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: .5, duration: .5 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        >
          <Image className="img" src={contactImg} alt="bar counter" quality={100} />
      </motion.div>
    </div>
  )
}