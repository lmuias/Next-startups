import Image from 'next/image'
import React from 'react'
import IdeaImage from '../../../public/Idea.jpg';
import StartupImage from '../../../public/startups.jpg';
import Link from 'next/link';

const About = () => {
  return <>
    <section className='pink_container'>
      <h2 className='heading'>About us</h2>
      <p className='sub-heading !max-w-3xl'>Empowering Startups with Cutting-Edge Tools for Growth and Innovation</p>
    </section>

    <section className='section_container flex flex-col gap-10 lg:gap-20 mt-20'>
        <h3 className='block-title self-center'>What <span className='text-outline'>we</span> do</h3>
        <div className='flex max-sm:flex-col items-center gap-10 lg:gap-20'>
          <div className='min-w-[320px] md:min-w-[400px] max-w-[560px] flex-grow'>
            <Image 
              src={IdeaImage} 
              alt='idea'
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
          <p className='font-work-sans lg:max-w-[380px] lg:text-2xl text-center'>
            <span className='text-outline'>We</span> provide innovative solutions tailored for startups to help them thrive in a competitive landscape. 
            Our platform integrates the latest technologies, including advanced content management, dynamic UI components, 
            and scalable infrastructure, enabling entrepreneurs to focus on what truly matters—growing their business.
          </p>
        </div>
    </section>

    <section className='block_container gap-10 lg:gap-20 mt-10'>
      <h2 className='block-title'><span className='text-outline'>Join</span> us</h2>
      <p className='sub-heading !max-w-3xl'>{"Why You'll Love Working With Us"}</p>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-5'>
        <div className='col-span-1 flex flex-col gap-5 items-center'>
          <h3 className='text-2xl text-white font-bold uppercase'>What’s in it for <span className='text-outline'>You?</span></h3>
          <ul className='text-white flex flex-col gap-2'>
            <li className='list-item'>
              <p className='list-item_title'>A Supportive Community</p>
              <p className='pl-1'>Be part of a team that values collaboration, open communication, and mutual support. We believe in growing together and celebrating each other’s successes.</p>
            </li>
            <li className='list-item'>
              <p className='list-item_title'>Opportunities for Growth</p>
              <p className='pl-1'>Whether you’re looking to sharpen your skills or explore new horizons, we provide ongoing learning opportunities, mentorship, and room for professional development.</p>
            </li>
            <li className='list-item'>
              <p className='list-item_title'>Meaningful Work</p>
              <p className='pl-1'>Contribute to projects that create real impact. Your efforts will directly influence our mission and help us make a difference in the lives of others.</p>
            </li>
            <li className='list-item'>
              <p className='list-item_title'>Flexibility That Fits Your Life</p>
              <p className='pl-1'>We understand the importance of work-life balance. Enjoy flexible working hours and remote options to suit your lifestyle and personal needs.</p>
            </li>
            <li className='list-item'>
              <p className='list-item_title'>Recognition and Rewards</p>
              <p className='pl-1'>Your hard work won’t go unnoticed. We have systems in place to ensure contributions are recognized and celebrated, from shoutouts to performance-based rewards.</p>
            </li>
            <li className='list-item'>
              <p className='list-item_title'>A Platform for Innovation</p>
              <p className='pl-1'>We encourage creativity and new ideas. If you’re passionate about problem-solving and innovation, you’ll find plenty of opportunities to make your mark.</p>
            </li>
            <li className='list-item'>
              <p className='list-item_title'>Diverse and Inclusive Environment</p>
              <p className='pl-1'>Join a workplace where diversity is celebrated, and everyone feels welcome, respected, and empowered to be their authentic selves.</p>
            </li>
          </ul>
        </div>
        <div className='col-span-1 flex flex-col items-center gap-10 self-center'>
          <h3 className='text-2xl text-outline uppercase'>{"Let’s Build Something Together – Sign in Now!"}</h3>
          <p className='font-bold text-white uppercase max-w-[280px] text-center'>
            Find <Link href="/startup/create" className="text-outline">Create</Link> section in navbar menu and become a part of our family with creating a new pitch!
          </p>
          <div className='min-w-[320px] max-h-[250px] lg:min-w-[400px] lg:max-h-[310px] max-w-[560px] flex-grow'>
            <Image 
              src={StartupImage} 
              alt='idea'
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  </>
}

export default About