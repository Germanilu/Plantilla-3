'use client'
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Card from "../components/card";
import './page.scss';

export default function Menu(){
  const t = useTranslations("Menu");
  return (
    <div className="menu-design">
      <h1>{t('title')}</h1>
      <Card/>
    </div>
  ) 
}