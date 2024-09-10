'use client'
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from 'next/image';
import Button from '../button'
import specialImg from '@/static/media/img/gnobg.png'
import './index.scss';

const Specials = () => {
    const t = useTranslations("Specials");

    return (
        <div className="specials-design">

            <div className="top-text-container">
                <motion.div className="text"
                 variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  >{t('text')}</motion.div>
                <motion.div className="title"
                 variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  >{t('title')}</motion.div>
                <motion.div className="additional-text"
                 variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  >{t('desc')}</motion.div>
            </div>

            <div className="special-container">

                <div className="special-menu">

                    <motion.div className="drink-container"
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      >
                        <div className="drink-name">{t('drink-name1')}</div>
                        <span className="drink-price">{t('drink-price1')}</span>
                        <div className="drink-desc">{t('drink-desc1')}</div>
                    </motion.div>

                    <motion.div className="drink-container"
                     variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      >
                        <div className="drink-name">{t('drink-name2')}</div>
                        <span className="drink-price">{t('drink-price2')}</span>
                        <div className="drink-desc">{t('drink-desc2')}</div>
                    </motion.div>

                    <motion.div className="drink-container"
                     variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      >
                        <div className="drink-name">{t('drink-name3')}</div>
                        <span className="drink-price">{t('drink-price3')}</span>
                        <div className="drink-desc">{t('drink-desc3')}</div>
                    </motion.div>

                    <motion.div className="drink-container"
                     variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      >
                        <div className="drink-name">{t('drink-name4')}</div>
                        <span className="drink-price">{t('drink-price4')}</span>
                        <div className="drink-desc">{t('drink-desc4')}</div>
                    </motion.div>
                    <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}>

                      <Button  href='/menu' text='view-more'/>
                    </motion.div>
                </div>

                <motion.div className="special-img"
                variants={{
                    hidden: { opacity: 0, x: -200 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  >
                    <Image className="img" src={specialImg} alt="drink" quality={100} />
                </motion.div>

            </div>

        </div>
    )
}
export default Specials;