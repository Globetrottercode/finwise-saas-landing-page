import Hero from '@/components/Hero'
import About from '@/components/About'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Container from '@/components/Container'
import Section from '@/components/Section'
import CTA from '@/components/CTA'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <About />

        <Section
          id='programs'
          title='Our Programs'
          description='Comprehensive training programs designed for your success'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gradient-to-br from-[#fff8f3] via-[#f7faff] to-[#f3f6fa] p-6 rounded-3xl shadow-inner'>
            {/* Card 1 */}
            <div
              className='group relative p-7 border border-[#f3e9e1] rounded-2xl bg-white shadow-md flex flex-col items-start transition-transform hover:scale-105 hover:shadow-xl hover:border-[#bf5104]/60 focus-within:shadow-xl'
              tabIndex={0}
              aria-label='Live-Interactive Classes'
            >
              <span className='absolute -top-4 left-4 bg-[#bf5104] text-white px-3 py-1 rounded-full text-xs font-bold shadow'>
                Live
              </span>
              <div className='mb-4 text-[#bf5104]'>
                <svg
                  className='w-8 h-8'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <circle
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='2'
                  />
                  <path d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
              </div>
              <h3 className='text-lg font-bold mb-2'>
                Live-Interactive Classes
              </h3>
              <p className='text-foreground-accent text-sm'>
                Engage with instructors in real-time for a dynamic learning
                experience.
              </p>
            </div>
            {/* Card 2 */}
            <div
              className='group relative p-7 border border-[#e6f0fa] rounded-2xl bg-white shadow-md flex flex-col items-start transition-transform hover:scale-105 hover:shadow-xl hover:border-blue-600/60 focus-within:shadow-xl'
              tabIndex={0}
              aria-label='One-on-One Personalized Training'
            >
              <span className='absolute -top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow'>
                1:1
              </span>
              <div className='mb-4 text-blue-600'>
                <svg
                  className='w-8 h-8'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' />
                </svg>
              </div>
              <h3 className='text-lg font-bold mb-2'>
                One-on-One Personalized Training
              </h3>
              <p className='text-foreground-accent text-sm'>
                Get customized attention and guidance tailored to your needs.
              </p>
            </div>
            {/* Card 3 */}
            <div
              className='group relative p-7 border border-[#f3e9e1] rounded-2xl bg-white shadow-md flex flex-col items-start transition-transform hover:scale-105 hover:shadow-xl hover:border-[#bf5104]/60 focus-within:shadow-xl'
              tabIndex={0}
              aria-label='Multilingual Training'
            >
              <span className='absolute -top-4 left-4 bg-[#bf5104] text-white px-3 py-1 rounded-full text-xs font-bold shadow'>
                Multi
              </span>
              <div className='mb-4 text-[#bf5104]'>
                <svg
                  className='w-8 h-8'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636' />
                </svg>
              </div>
              <h3 className='text-lg font-bold mb-2'>Multilingual Training</h3>
              <p className='text-foreground-accent text-sm'>
                Learn in your preferred language for better understanding.
              </p>
            </div>
            {/* Card 4 */}
            <div
              className='group relative p-7 border border-[#e6f0fa] rounded-2xl bg-white shadow-md flex flex-col items-start transition-transform hover:scale-105 hover:shadow-xl hover:border-blue-600/60 focus-within:shadow-xl'
              tabIndex={0}
              aria-label='Mentorship from Industry Experts'
            >
              <span className='absolute -top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow'>
                Mentor
              </span>
              <div className='mb-4 text-blue-600'>
                <svg
                  className='w-8 h-8'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path d='M16 7a4 4 0 11-8 0 4 4 0 018 0zm2 13H6a2 2 0 01-2-2v-1a6 6 0 0112 0v1a2 2 0 01-2 2z' />
                </svg>
              </div>
              <h3 className='text-lg font-bold mb-2'>
                Mentorship from Industry Experts
              </h3>
              <p className='text-foreground-accent text-sm'>
                Learn from professionals with real-world experience.
              </p>
            </div>
            {/* Card 5 */}
            <div
              className='group relative p-7 border border-[#f3e9e1] rounded-2xl bg-white shadow-md flex flex-col items-start transition-transform hover:scale-105 hover:shadow-xl hover:border-[#bf5104]/60 focus-within:shadow-xl'
              tabIndex={0}
              aria-label='First-of-its-Kind Platform'
            >
              <span className='absolute -top-4 left-4 bg-[#bf5104] text-white px-3 py-1 rounded-full text-xs font-bold shadow'>
                AI
              </span>
              <div className='mb-4 text-[#bf5104]'>
                <svg
                  className='w-8 h-8'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V21h-2v-4.07A8.001 8.001 0 014.07 13H1v-2h3.07A8.001 8.001 0 0111 4.07V1h2v3.07A8.001 8.001 0 0119.93 11H23v2h-3.07A8.001 8.001 0 0113 19.93z' />
                </svg>
              </div>
              <h3 className='text-lg font-bold mb-2'>
                First-of-its-Kind Platform
              </h3>
              <p className='text-foreground-accent text-sm'>
                Pioneering AI-powered tool training platform.
              </p>
            </div>
            {/* Card 6 */}
            <div
              className='group relative p-7 border border-[#e6f0fa] rounded-2xl bg-white shadow-md flex flex-col items-start transition-transform hover:scale-105 hover:shadow-xl hover:border-blue-600/60 focus-within:shadow-xl'
              tabIndex={0}
              aria-label='Placement Assistance'
            >
              <span className='absolute -top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow'>
                Jobs
              </span>
              <div className='mb-4 text-blue-600'>
                <svg
                  className='w-8 h-8'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path d='M16 21v-2a4 4 0 00-8 0v2M12 11a4 4 0 100-8 4 4 0 000 8zm6 8v-2a6 6 0 00-12 0v2a2 2 0 002 2h8a2 2 0 002-2z' />
                </svg>
              </div>
              <h3 className='text-lg font-bold mb-2'>Placement Assistance</h3>
              <p className='text-foreground-accent text-sm'>
                Work with Indian Startups and kickstart your career.
              </p>
            </div>
            {/* Card 7 */}
            <div
              className='group relative p-7 border border-[#f3e9e1] rounded-2xl bg-white shadow-md flex flex-col items-start transition-transform hover:scale-105 hover:shadow-xl hover:border-[#bf5104]/60 focus-within:shadow-xl'
              tabIndex={0}
              aria-label='Real-World Capstone Projects'
            >
              <span className='absolute -top-4 left-4 bg-[#bf5104] text-white px-3 py-1 rounded-full text-xs font-bold shadow'>
                Project
              </span>
              <div className='mb-4 text-[#bf5104]'>
                <svg
                  className='w-8 h-8'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <rect x='3' y='7' width='18' height='13' rx='2' />
                  <path d='M16 3v4M8 3v4' />
                </svg>
              </div>
              <h3 className='text-lg font-bold mb-2'>
                Real-World Capstone Projects
              </h3>
              <p className='text-foreground-accent text-sm'>
                Apply your learning to practical, industry-relevant projects.
              </p>
            </div>
            {/* Card 8 */}
            <div
              className='group relative p-7 border border-[#e6f0fa] rounded-2xl bg-white shadow-md flex flex-col items-start transition-transform hover:scale-105 hover:shadow-xl hover:border-blue-600/60 focus-within:shadow-xl'
              tabIndex={0}
              aria-label='Incubation Support'
            >
              <span className='absolute -top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow'>
                Startup
              </span>
              <div className='mb-4 text-blue-600'>
                <svg
                  className='w-8 h-8'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2l4 4-4 4-4-4 4-4zm0 8v12' />
                </svg>
              </div>
              <h3 className='text-lg font-bold mb-2'>Incubation Support</h3>
              <p className='text-foreground-accent text-sm'>
                Get support for your early-stage startup ideas.
              </p>
            </div>
            {/* Card 9 */}
            <div
              className='group relative p-7 border border-[#f3e9e1] rounded-2xl bg-white shadow-md flex flex-col items-start transition-transform hover:scale-105 hover:shadow-xl hover:border-[#bf5104]/60 focus-within:shadow-xl'
              tabIndex={0}
              aria-label='University-Recognized Certifications'
            >
              <span className='absolute -top-4 left-4 bg-[#bf5104] text-white px-3 py-1 rounded-full text-xs font-bold shadow'>
                Cert
              </span>
              <div className='mb-4 text-[#bf5104]'>
                <svg
                  className='w-8 h-8'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <rect x='4' y='4' width='16' height='16' rx='2' />
                  <path d='M8 8h8v8H8z' />
                </svg>
              </div>
              <h3 className='text-lg font-bold mb-2'>
                University-Recognized Certifications
              </h3>
              <p className='text-foreground-accent text-sm'>
                Earn certificates recognized by leading universities.
              </p>
            </div>
          </div>
        </Section>

        <Section
          id='collaborations'
          title={
            <span className='inline-flex items-center gap-2'>
              <svg
                className='w-8 h-8 text-[#bf5104]'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-9-5m9 5l9-5'
                />
              </svg>
              Colleges & University Collaborations
            </span>
          }
          description={
            <span className='font-medium text-lg'>
              Partnering with leading institutions to provide quality education
            </span>
          }
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
            {/* Salesian College */}
            <div
              className='p-6 bg-gradient-to-br from-white via-[#f8f6f3] to-[#f3e9e1] border border-[#f3e9e1] rounded-2xl shadow-lg flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl hover:border-[#bf5104]/60 focus-within:shadow-2xl group'
              tabIndex={0}
              aria-label='Salesian College, Certified Partner'
            >
              <div className='flex-1 flex items-center justify-center mb-4 h-28 w-full'>
                <Image
                  src='/LEARN YATRA[1].png'
                  alt='Salesian College (Autonomous) Logo'
                  width={120}
                  height={80}
                  className='object-contain max-h-24 mx-auto'
                />
              </div>
              <hr className='w-2/3 border-t border-[#e5e5e5] my-2' />
              <span
                className='inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#bf5104] text-white mt-2 shadow-sm'
                title='Certified by Learn Yatra'
              >
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                Certified Partner
              </span>
            </div>
            {/* REVA University */}
            <div
              className='p-6 bg-gradient-to-br from-white via-[#f8f6f3] to-[#e6f0fa] border border-[#e6f0fa] rounded-2xl shadow-lg flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl hover:border-blue-600/60 focus-within:shadow-2xl group'
              tabIndex={0}
              aria-label='REVA University, Academic Collaborator'
            >
              <div className='flex-1 flex items-center justify-center mb-4 h-28 w-full'>
                <Image
                  src='/reva_university-removebg-preview[1].png'
                  alt='REVA University Logo'
                  width={120}
                  height={80}
                  className='object-contain max-h-24 mx-auto'
                />
              </div>
              <hr className='w-2/3 border-t border-[#e5e5e5] my-2' />
              <span
                className='inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white mt-2 shadow-sm'
                title='Academic collaboration with Learn Yatra'
              >
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-9-5m9 5l9-5'
                  />
                </svg>
                Academic Collaborator
              </span>
            </div>
            {/* St. Francis College */}
            <div
              className='p-6 bg-gradient-to-br from-white via-[#f8f6f3] to-[#f3e9e1] border border-[#f3e9e1] rounded-2xl shadow-lg flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl hover:border-[#bf5104]/60 focus-within:shadow-2xl group'
              tabIndex={0}
              aria-label='St. Francis College, Certified Partner'
            >
              <div className='flex-1 flex items-center justify-center mb-4 h-28 w-full'>
                <Image
                  src='/st francis logo[1].png'
                  alt='St. Francis College Logo'
                  width={120}
                  height={80}
                  className='object-contain max-h-24 mx-auto'
                />
              </div>
              <hr className='w-2/3 border-t border-[#e5e5e5] my-2' />
              <span
                className='inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#bf5104] text-white mt-2 shadow-sm'
                title='Certified by Learn Yatra'
              >
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                Certified Partner
              </span>
            </div>
            {/* Techno India Centre for Innovative Studies */}
            <div
              className='p-6 bg-gradient-to-br from-white via-[#f8f6f3] to-[#e6f0fa] border border-[#e6f0fa] rounded-2xl shadow-lg flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl hover:border-blue-600/60 focus-within:shadow-2xl group'
              tabIndex={0}
              aria-label='Techno India Centre for Innovative Studies, Academic Collaborator'
            >
              <div className='flex-1 flex items-center justify-center mb-4 h-28 w-full'>
                <Image
                  src='/CIS LOGO[1].png'
                  alt='Techno India Centre for Innovative Studies Logo'
                  width={120}
                  height={80}
                  className='object-contain max-h-24 mx-auto'
                />
              </div>
              <hr className='w-2/3 border-t border-[#e5e5e5] my-2' />
              <span
                className='inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white mt-2 shadow-sm'
                title='Academic collaboration with Learn Yatra'
              >
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-9-5m9 5l9-5'
                  />
                </svg>
                Academic Collaborator
              </span>
            </div>
          </div>
        </Section>

        <Section
          id='reviews'
          title='Expert Reviews'
          description='What industry leaders say about us'
        >
          <Testimonials />
        </Section>

        <FAQ />
        <Contact />
        <CTA />
      </Container>
    </>
  )
}

export default HomePage
