'use client'
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import heroImage from '@/static/media/img/hero.jpg'
import Image from 'next/image';

import './index.scss';
const Hero = () => {
    const t = useTranslations("Hero");

    return(
        <div className='hero-design'>
            <div className="main-container">
            <div className="hero-text">
                <div className="text">{t('desc')}</div>
                <motion.h1 className="title"
                 variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  >{t('title')}</motion.h1>
                <div className="call-to-action">{t('button')}</div>
            </div>
                <Image className="img" src={heroImage} alt="drink1"  quality={100} />
            </div>
        </div>
    )
}

export default Hero;