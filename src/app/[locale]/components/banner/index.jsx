'use client'
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from 'next/image';
import Map from "../google-map-location";
import bannerDrink from '@/static/media/img/bannerdrink.jpg'
import building from '@/static/media/img/building.jpg'
import {Link}       from '@/navigation';
import './index.scss';

const Banner = () => {
    const t = useTranslations("Banner");
    return(
        <div className="banner-design">
            <motion.div
             variants={{
                hidden: { opacity: 0, y: 70 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: .2, duration: 0.5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} >
            <Link href={'/menu'} className="box">
                <h2>{t('menu')}</h2>
                <span>{t('our-cocktails')}</span>
                <Image className="img" src={bannerDrink} alt="drink1"  quality={100} />
            </Link>

            </motion.div>
            <motion.div className="box map"
            variants={{
                hidden: { opacity: 0, y: 70 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: .3, duration: 0.5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} 
            >
                <Map/>
            </motion.div>
            <motion.div
             variants={{
                hidden: { opacity: 0, y: 70 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: .4, duration: 0.5 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} >
                <Link href={'/contact-us'} className="box">
                    <h2>{t('your-table-awaits')}</h2>
                    <span>{t('reserve-now')}</span>
                    <Image className="img" src={building} alt="building"  quality={100} />
                </Link>
                </motion.div>
        </div>
    )
}
export default Banner;