'use client'
import { useTranslations } from "next-intl";
import Image from 'next/image';
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
                        <article key={cocktail.id}>
                            <figure>
                                <h3 className="title">{cocktail.drinkName}</h3>
                                <Image className="img" src={cocktail.drinkImg} alt="bar counter" quality={100} />
                                <p className="text">{t(`${cocktail.drinkDesc}`)}</p>
                            </figure>
                        </article>
                    )
                })
            }

        </div>
    )

}

export default Card;