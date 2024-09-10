'use client'
import { useTranslations } from "next-intl";
import beers from '@/static/media/img/beers.jpg';
import { motion } from "framer-motion";
import Image from 'next/image';
import './index.scss';

const OpeningHours = () => {
    const t = useTranslations("Opening-Hours");

    return(
        <div className="opening-hours-design">
            <motion.div className="text-container"
            variants={{
                hidden: { opacity: 0, y: 70 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: .7, duration: 0.5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              >

                <div className="desc">{t('visit-a-bar')}</div>
                <div className="title">{t('opening-hours')}</div>
                <div className="hour-container">
                    <div className="label">{t('monday-friday')}</div>
                    <div className="text-hour">{t('four-to-one')}</div>
                </div>
                <div className="hour-container">
                    <div className="label">{t('saturday')}</div>
                    <div className="text-hour">{t('four-to-three')}</div>
                </div>
                <div className="hour-container">
                    <div className="label">{t('sunday')}</div>
                    <div className="text-hour">{t('four-to-two')}</div>
                </div>
                <span>{t('visit-us')}</span>
            </motion.div>
            <motion.div className="img-container"
            variants={{
                hidden: { opacity: 0, y: 70 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: .3, duration: 0.5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}>
                
            <Image className="img" src={beers} alt="beers"  quality={100} />
            </motion.div>
            <motion.div className="text-container"
            variants={{
                hidden: { opacity: 0, y: 70 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: .7, duration: 0.5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              >

                <div className="desc">{t('best-offer')}</div>
                <div className="title happy-hour">{t('happy-hour')}</div>
                <div className="hour-container">
                    <div className="label">{t('monday-sunday')}</div>
                    <div className="text-hour">{t('four-to-seven')}</div>
                </div>
                <div className="hour-container">
                    <div className="label">{t('first-text')}</div>
                    <div className="text-hour">{t('second-text')}</div>
                </div>
                <div className="hour-container">
                    <div className="label">{t('third-text')}</div>
                    <div className="text-hour">{t('fourth-text')}</div>
                </div>
                <span>{t('view-more')}</span>
            </motion.div>


        </div>
    )
}

export default OpeningHours;