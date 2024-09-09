
import { useTranslations } from "next-intl";
import beers from '@/static/media/img/beers.jpg'
import Image from 'next/image';
import './index.scss';

const OpeningHours = () => {
    const t = useTranslations("Opening-Hours");

    return(
        <div className="opening-hours-design">
            <div className="text-container">
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
            </div>
            <div className="img-container">
            <Image className="img" src={beers} alt="beers"  quality={100} />
            </div>
            <div className="text-container">
                <div className="desc">{t('best-offer')}</div>
                <div className="title">{t('happy-hour')}</div>
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
            </div>


        </div>
    )
}

export default OpeningHours;