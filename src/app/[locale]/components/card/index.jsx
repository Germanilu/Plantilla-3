'use client'
import { useTranslations } from "next-intl";
import Image from 'next/image';

import drinknobg from '@/static/media/img/drinknobg.png';
import margarita from '@/static/media/img/margarita.png';

import h from '@/static/media/img/h.png';
import m from '@/static/media/img/m.png';
import a from '@/static/media/img/a.png';
import r from '@/static/media/img/r.png';

import n from '@/static/media/img/n.png';
import b from '@/static/media/img/b.png';
import './index.scss';

const Card = () => {
    const t = useTranslations("Card");

    return (
        <div className="card-design">
 


            <article>
                <figure>
                    <Image className="img" src={drinknobg} alt="bar counter" quality={100} />
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet cum obcaecati harum eos quod laudantium error sequi similique consectetur?</p>
                </figure>
            </article>
           
            <article>
                <figure>
                    <Image className="img" src={margarita} alt="bar counter" quality={100} />
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet cum obcaecati harum eos quod laudantium error sequi similique consectetur?</p>
                </figure>
            </article>
            

            <article>
                <figure>
                    <Image className="img" src={h} alt="bar counter" quality={100} />
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet cum obcaecati harum eos quod laudantium error sequi similique consectetur?</p>
                </figure>
            </article>

            <article>
                <figure>
                    <Image className="img" src={m} alt="bar counter" quality={100} />
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet cum obcaecati harum eos quod laudantium error sequi similique consectetur?</p>
                </figure>
            </article>

            <article>
                <figure>
                    <Image className="img" src={a} alt="bar counter" quality={100} />
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet cum obcaecati harum eos quod laudantium error sequi similique consectetur?</p>
                </figure>
            </article>

            <article>
                <figure>
                    <Image className="img" src={r} alt="bar counter" quality={100} />
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet cum obcaecati harum eos quod laudantium error sequi similique consectetur?</p>
                </figure>
            </article>

 

            <article>
                <figure>
                    <Image className="img" src={n} alt="bar counter" quality={100} />
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet cum obcaecati harum eos quod laudantium error sequi similique consectetur?</p>
                </figure>
            </article>
            <article>
                <figure>
                    <Image className="img" src={b} alt="bar counter" quality={100} />
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet cum obcaecati harum eos quod laudantium error sequi similique consectetur?</p>
                </figure>
            </article>
        </div>
    )

}

export default Card;