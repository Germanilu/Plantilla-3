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
            <Link href={'/menu'} className="box">
                <h2>{t('menu')}</h2>
                <span>{t('our-cocktails')}</span>
                <Image className="img" src={bannerDrink} alt="drink1"  quality={100} />
            </Link>
            <div className="box map"><Map/></div>
                <Link href={'/contact-us'} className="box">
                    <h2>{t('your-table-awaits')}</h2>
                    <span>{t('reserve-now')}</span>
                    <Image className="img" src={building} alt="building"  quality={100} />
                </Link>
        </div>
    )
}
export default Banner;