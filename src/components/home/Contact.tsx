import React, { useState } from 'react'
import * as emailjs from 'emailjs-com'

import { SocialMedia } from "@/templates/SocialMedia"

const Form = () => {
  const [loading, setLoading] = useState(false);  // Loading state
  const [error, setError] = useState<string | null>(null);  // Error state
  const [success, setSuccess] = useState<boolean>(false);  // Success state

  const handleSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    setTimeout(async () => {
        try {
          const result = await emailjs.sendForm(
            'service_am1leeb',
            'template_nooe1od',
            e.target as HTMLFormElement,
            '46bzyeP_kxcN8XJoy'
          );
          setSuccess(true);
          console.log(result.text);
          (e.target as HTMLFormElement).reset();

          // Hide success message after 2 seconds
          setTimeout(() => {
            setSuccess(false);
          }, 2000);
        } catch (error) {
          setError('Failed to send the email. Please try again.');
          console.error(error);
        } finally {
          setLoading(false);
        }
    }, 2000);
  }
  return (
    <>
      {success && 
        <div className='w-full bg-green-500 text-white py-2 px-4 mb-3 rounded shadow-md transition-opacity duration-300'>
          <p className="">Berhasil Terkirim</p>
        </div>
      }
      {error && 
        <div className='w-full bg-red-500 text-white py-2 px-4 mb-3 rounded shadow-md transition-opacity duration-300'>
          <p className="">{error}</p>
        </div>
      }
      <form onSubmit={handleSubmit}>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-6">
          <div className="md:col-span-3">
            <label className="text-white text-lg font-roboto font-normal" htmlFor="nama">Nama</label>
            <input 
              type="text" 
              name="nama" 
              id="nama" 
              className="p-4 w-full outline-none text-black bg-white border-b-[1px] border-b-[#B9B9B9] focus:outline-none transition-all placeholder:font-roboto" 
              placeholder="Nama"
            />
          </div>

          <div className="md:col-span-3">
            <label className="text-white text-lg font-roboto font-normal" htmlFor="email">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              className="p-4 w-full outline-none text-black bg-white border-b-[1px] border-b-[#B9B9B9] focus:outline-none transition-all placeholder:font-roboto" 
              placeholder="example@domain.com"
            />
          </div>

          <div className="md:col-span-6">
            <label className="text-white text-lg font-roboto font-normal" htmlFor="message">Pesan</label>
            <textarea 
              name="message" 
              id="message" 
              className="p-4 w-full outline-none text-black bg-white border-b-[1px] border-b-[#B9B9B9] focus:outline-none transition-all placeholder:font-roboto" 
              rows={5} 
              placeholder="Pesan"
            ></textarea>
          </div>
        </div>
        <button
          id="cta_submit"
          className="cta-btn-form bg-primary text-white text-xl font-roboto font-semibold px-28 py-5 mt-4 !mx-auto rounded-[60px]"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Kirim' }
        </button>
      </form>
    </>
  )
}

const Contact = () => {
  return (
    <section id="contact" className="relative w-full h-full py-10 2xl:py-20 xl:py-20 lg:py-20 md:py-20 bg-black text-white flex items-center">
      <div className="container">
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="relative w-full">
            <p className="flex items-center justify-start gap-3">
              <span className="text-[28px] font-roboto font-bold">Get in Touch.</span>
            </p>
            <SocialMedia childClass="py-4 flex gap-4" />
          </div>
          <div className="col-span-3">
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Contact }