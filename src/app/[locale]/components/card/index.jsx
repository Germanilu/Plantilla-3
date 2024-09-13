'use client'
import { useTranslations } from "next-intl";
import Image from 'next/image';

import a from '@/static/media/img/drinknobg.png';
import b from '@/static/media/img/margarita.png';
import c from '@/static/media/img/h.png';
import d from '@/static/media/img/m.png';
import e from '@/static/media/img/a.png';
import f from '@/static/media/img/r.png';
import g from '@/static/media/img/n.png';
import h from '@/static/media/img/b.png';
import i from '@/static/media/img/j.png';
import './index.scss';

const Card = () => {
    const t = useTranslations("Card");

    return (
        <div className="card-design">
 


            <article>
                <figure>
                    <h3 className="title">Mojito</h3>
                    <Image className="img" src={a} alt="bar counter" quality={100} />
                <p className="text">White rum, fresh mint, and lime juice, lightly sweetened and topped with soda. A crisp, refreshing Cuban classic.</p>
                </figure>
            </article>
           
            <article>
                <figure>
                    <Image className="img" src={b} alt="bar counter" quality={100} />
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet cum obcaecati harum eos quod laudantium error sequi similique consectetur?</p>
                </figure>
            </article>
            

            <article>
                <figure>
                    <Image className="img" src={c} alt="bar counter" quality={100} />
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet cum obcaecati harum eos quod laudantium error sequi similique consectetur?</p>
                </figure>
            </article>

            <article>
                <figure>
                    <Image className="img" src={d} alt="bar counter" quality={100} />
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet cum obcaecati harum eos quod laudantium error sequi similique consectetur?</p>
                </figure>
            </article>

            <article>
                <figure>
                    <Image className="img" src={e} alt="bar counter" quality={100} />
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet cum obcaecati harum eos quod laudantium error sequi similique consectetur?</p>
                </figure>
            </article>

            <article>
                <figure>
                    <Image className="img" src={f} alt="bar counter" quality={100} />
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet cum obcaecati harum eos quod laudantium error sequi similique consectetur?</p>
                </figure>
            </article>

 

            <article>
                <figure>
                    <Image className="img" src={g} alt="bar counter" quality={100} />
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
                    <Image className="img" src={i} alt="bar counter" quality={100} />
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis amet cum obcaecati harum eos quod laudantium error sequi similique consectetur?</p>
                </figure>
            </article>
        </div>
    )

}

export default Card;