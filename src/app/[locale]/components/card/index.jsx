'use client'
import { useTranslations } from "next-intl";
import Image from 'next/image';
import { motion } from "framer-motion";
import {Cocktails} from '@/static/menu';
import './index.scss';


/**
 * @component
 * This Card component will map the cocktails array in static/menu.js and display a card with the information and img of it.
 */
const Card = () => {
    const t = useTranslations("Card");

    return (
        <div className="card-design">
            {
                Cocktails.map((cocktail) => {
                    return (
                        <motion.article key={cocktail.id}
                        variants={{
                            hidden: { opacity: 0, y: 70 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          transition={{ delay: cocktail.id * 0.35, duration: 0.5 }}
                          initial="hidden"
                          animate="visible"
        
                          >
                            <figure>
                                <h3 className="title">{cocktail.drinkName}</h3>
                                <Image className="img" src={cocktail.drinkImg} alt="bar counter" quality={100} />
                                <p className="text">{t(`${cocktail.drinkDesc}`)}</p>
                            </figure>
                        </motion.article>
                    )
                })
            }

        </div>
    )

}

export default Card;