'use client'
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Card from "../components/card";
import './page.scss';

export default function Menu(){
  const t = useTranslations("Menu");
  return (
    <div className="menu-design">
      <motion.h1
      variants={{
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ delay: .5, duration: 0.5 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      >
        {t('title')}
      </motion.h1>
      <Card/>
    </div>
  ) 
}