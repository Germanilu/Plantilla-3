'use client';
import React, { useRef, useState }        from "react";
import emailjs                            from "@emailjs/browser";


import { useTranslations }                from "next-intl";

import './index.scss';


export default function Contact() {
  const formRef = useRef();
  const t = useTranslations("Contact-us-component");

  const [startDate, setStartDate] = useState(new Date());
  
  //State
  const [form, setForm] = useState({
    persons: "",
    date: "",
    hour: "",
  });
  
  const [loading, setLoading] = useState(false);
  
  //Functions
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
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
        message: `${form.persons} Person,  Date: ${form.date} Time: ${form.hour}` ,
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
          time: "",
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
    <div className='contact-design' >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='form'
        >
        <select id="persons" name="persons" className="select-container" onChange={handleChange}>
            <option value="1">1 Person</option>
            <option value="2">2 Persons</option>
            <option value="3">3 Persons</option>
            <option value="4">4 Persons</option>
            <option value="5">5 Persons</option>
            <option value="6">6 Persons</option>
        </select>

        <input  type="date" id="date" name="date" required className="select-container" onChange={handleChange}/>

        <select id="hour" name="hour" className="select-container" onChange={handleChange}>
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

          {/* <label className='form-label'>
            <span className='name'>{t('name-tag')}</span>
            <input
              type='select'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={t('name-placeholder')}
              className='input'
            />
          </label> */}
          {/* <label className='form-label'>
            <span className='email'>{t('email-tag')}</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder={t('email-placeholder')}
              className='input'
            />
          </label> */}
          {/* <label className='form-label'>
            <span className='message'>{t('message-tag')}</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder={t('message-placeholder')}
              className='input textarea'
            />
          </label> */}

          <button
            type='submit'
            className='button'
          >
            {loading ? t('loading') : t('send')}
          </button>
        </form>
      
    </div>
  )
}