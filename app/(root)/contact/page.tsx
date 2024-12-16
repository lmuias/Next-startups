import ContactForm from '@/components/ContactForm'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return <>
    <section className='pink_container'>
      <h2 className='heading'>Get in touch</h2>
      <p className='sub-heading !max-w-3xl'>We’d Love to Hear from You – Let’s Connect!</p>
    </section>

    <section className='flex-col w-full py-10 px-6 flex items-center gap-10'>
      <h3 className='block-title'>Contact us</h3>
      <div className='w-full grid grid-cols-2 gap-20'>
        <ContactForm />
        <div className='flex flex-col gap-10 self-center justify-self-center'>
          <div>
            <p className='text-2xl font-bold'>Contact</p>
            <a href='#' className='hover:opacity-50 transition-opacity'>someemail@gmail.com</a>
          </div>

          <div>
            <p className='text-2xl font-bold'>Located in</p>
            <a href='#' className='hover:opacity-50 transition-opacity'>San Francisco, California</a>
          </div>

          <div className='flex items-center gap-2 justify-between'>
            <a 
              target='blank' 
              href="https://x.com/" 
              className='hover:opacity-55 hover:scale-95 transition-all'
            >
              <Image src='/twitter.svg' width={24} height={24} alt='twitter' />
            </a>
            <a 
              target='blank' 
              href="https://www.facebook.com/" 
              className='hover:opacity-55 hover:scale-95 transition-all'
            >
              <Image src='/facebook.svg' width={24} height={24} alt='facebook' />
            </a>
            <a 
              target='blank' 
              href="https://www.instagram.com/" 
              className='hover:opacity-55 hover:scale-95 transition-all'
            >
              <Image src='/instagram.svg' width={24} height={24} alt='instagram' />
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Contact