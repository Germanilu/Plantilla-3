'use client'
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from 'next/image';
import specialImg from '@/static/media/img/specialImg.jpg'
import './index.scss';

const Specials = () => {
    const t = useTranslations("Specials");

    return (
        <div className="specials-design">

            <div className="top-text-container">
                <div className="text">{t('text')}</div>
                <div className="title">{t('title')}</div>
                <div className="additional-text">{t('desc')}</div>
            </div>

            <div className="special-container">

                <div className="special-menu">

                    <div className="drink-container">
                        <div className="drink-name">{t('drink-name1')}</div>
                        <span className="drink-price">{t('drink-price1')}</span>
                        <div className="drink-desc">{t('drink-desc1')}</div>
                    </div>

                    <div className="drink-container">
                        <div className="drink-name">{t('drink-name2')}</div>
                        <span className="drink-price">{t('drink-price2')}</span>
                        <div className="drink-desc">{t('drink-desc2')}</div>
                    </div>

                    <div className="drink-container">
                        <div className="drink-name">{t('drink-name3')}</div>
                        <span className="drink-price">{t('drink-price3')}</span>
                        <div className="drink-desc">{t('drink-desc3')}</div>
                    </div>

                    <div className="drink-container">
                        <div className="drink-name">{t('drink-name4')}</div>
                        <span className="drink-price">{t('drink-price4')}</span>
                        <div className="drink-desc">{t('drink-desc4')}</div>
                    </div>

                    <div className="drink-container">
                        <div className="drink-name">{t('drink-name5')}</div>
                        <span className="drink-price">{t('drink-price5')}</span>
                        <div className="drink-desc">{t('drink-desc5')}</div>
                    </div>

                    <div className="drink-container">
                        <div className="drink-name">{t('drink-name6')}</div>
                        <span className="drink-price">{t('drink-price6')}</span>
                        <div className="drink-desc">{t('drink-desc6')}</div>
                    </div>

                </div>

                <div className="special-img">
                    <Image className="img" src={specialImg} alt="drink" quality={100} />
                </div>

            </div>

        </div>
    )
}
export default Specials;