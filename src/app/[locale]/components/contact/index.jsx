'use client';
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { IoPersonAddSharp } from "react-icons/io5";
import { TbClockHour5 } from "react-icons/tb";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import './index.scss';

export default function Contact() {
  const formRef = useRef();
  const t = useTranslations("Contact-us-component");

  const [formError, setFormError] = useState("");
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  // State
  const [form, setForm] = useState({
    persons: "",
    date: "",
    hour: "",
    name: "",
    phone: ""
  });

  const [loading, setLoading] = useState(false);

  // Functions
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const checkFormErrors = () => {
    if (form.persons === "" || form.date === "" || form.hour === "" || form.name === "" || form.phone === "") {
      setFormError('Please fill in all the fields.');
      return false; // Return false to indicate validation failed
    }
    setFormError(""); // Clear error message if all fields are filled
    return true; // Return true to indicate validation passed
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    if (!checkFormErrors()) {
      return; // Stop form submission if validation fails
    }

    setLoading(true);

    emailjs
      .send(
        "service_ro4u14g",
        "template_lledwkg",
        {
          from_name: form.name,
          to_name: "Luciano",
          from_email: form.email,
          to_email: "lucianogermani93@gmail.com",
          message: `${form.persons} Person, Date: ${form.date} Time: ${form.hour} Contact Information: Name: ${form.name} Phone: ${form.phone} `,
        },
        "p4zQqM0lGfEuM7HC9"
      )
      .then(
        () => {
          setLoading(false);
          alert(t('success-alert'));

          setForm({
            persons: "",
            date: "",
            hour: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert(t('unsuccess-alert'));
        }
      );
  };

  return (
    <motion.div className='contact-design'
    variants={{
      hidden: { opacity: 0, y: 70 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ delay: .1, duration: 0.5 }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='form'
      >
        <div className="select-container">
          <IoPersonAddSharp />
          <select id="persons" name="persons" className="sub-container" onChange={handleChange}>
            <option value="1">1 {t('person')}</option>
            <option value="2">2 {t('persons')}</option>
            <option value="3">3 {t('persons')}</option>
            <option value="4">4 {t('persons')}</option>
            <option value="5">5 {t('persons')}</option>
            <option value="6">6 {t('persons')}</option>
          </select>
        </div>

        <div className="select-container">
          <input type="date" id="date" name="date" required className="sub-container" onChange={handleChange} />
        </div>

        <div className="select-container">
          <TbClockHour5 />
          <select id="hour" name="hour" className="sub-container" onChange={handleChange}>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
          </select>
        </div>

        <div className={`${!showMoreInfo ? "button" : "hide"}`} onClick={() => setShowMoreInfo(!showMoreInfo)}>{t('book-a-table')}</div>

        <motion.div className={`${showMoreInfo ? "more-information-contact" : "hide"}`}
           variants={{
            hidden: { opacity: 0, y: 70 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: .3, duration: 0.5 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="select-container">
            <MdDriveFileRenameOutline />
            <input id="name" name="name" type="text" placeholder={t('placeholder-name')} className="sub-container" onChange={handleChange} />
          </div>
          <div className="select-container">
            <FaPhone />
            <input id="phone" name="phone" type="text" placeholder={t('placeholder-phone')} className="sub-container" onChange={handleChange} />
          </div>
          <button
            type='submit'
            className='button'
          >
            {loading ? t('loading') : t('send')}
          </button>
        </motion.div>

        {formError && <div className="error">{formError}</div>}
      </form>
    </motion.div>
  )
}
