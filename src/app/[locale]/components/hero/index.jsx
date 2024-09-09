import { useTranslations } from "next-intl";
import heroImage from '@/static/media/img/hero.jpg'
import Image from 'next/image';

import './index.scss';
const Hero = () => {
    const t = useTranslations("Hero");

    return(
        <div className='hero-design'>
            <div className="img-container">
                <Image className="img" src={heroImage} alt="drink1"  quality={100} />
            </div>
        </div>
    )
}

export default Hero;