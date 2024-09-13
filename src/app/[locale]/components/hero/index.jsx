'use client'
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import heroImage from '@/static/media/img/hero.jpg'
import Button from '../button'
import Image from 'next/image';

import './index.scss';
const Hero = () => {
    const t = useTranslations("Hero");

    return (
        <div className='hero-design'>
            <div className="main-container">
                <div className="hero-text">
                    <motion.div className="text"
                        variants={{
                            hidden: { opacity: 0, y: -70 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ delay: .5, duration: 0.5 }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {t('desc')}
                    </motion.div>
                    <motion.h1 className="title"
                        variants={{
                            hidden: { opacity: 0, y: 0 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {t('title')}
                    </motion.h1>
                    <motion.div className="button-container"
                        variants={{
                            hidden: { opacity: 0, y: -70 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ delay: .5, duration: 0.5 }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                    <Button href='/menu' text='view-more' />
                    </motion.div>
                </div>
                <motion.div className="img-container"
                    variants={{
                        hidden: { opacity: 0, y: 0 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ delay: .1, duration: 0.2 }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                <Image className="img" src={heroImage} alt="drink1" quality={100} />
                </motion.div>
            </div>
        </div>
    )
}

export default Hero;