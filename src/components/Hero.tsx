import React from 'react'
import Image from 'next/image';
const Hero = () => {
  return (
    <div className="bg-offBlack flex items-center justify-center min-h-screen flex-col px-4 py-10">
      <div>
        <h1 className="font-medium text-offWhite font-montserrat text-5xl max-lg:text-4xl max-md:text-3xl max-w-[830px] mx-auto">
          Transforming Secure, Modern
          <span className="text-gardient"> Development </span> with AdaptsAI
        </h1>
      </div>
      <div className="flex items-center justify-center gap-10 max-md:flex-wrap mt-10 max-md:mt-8">
        <div className="w-6/12 max-md:w-full">
          <Image
            src="/assets/images/png/01.png"
            alt="number"
            width={297}
            height={182}
            className="object-cover max-w-[297px] max-md:max-w-[100px] pointer-events-none"
          />
          <h2 className="text-[32px] max-md:text-2xl font-bold text-offWhite font-montserrat max-w-[461px]">
            AI Chatbots don’t create enterprse-grade
            <span className="text-gardient"> apps </span>
          </h2>
          <p className="text-base font-normal text-offWhite max-w-[461px] mt-4">
            Bootstrap end to end application package including architecture,
            tests, infrastructure and deployment code leveraging AdaptsAI’s
            patented engine. Your apps are secure by design and by default.
          </p>
        </div>
        <div className="w-6/12 max-md:w-full">
          <Image
            src="/assets/images/png/hero-slide-one.png"
            alt="slide"
            width={614}
            height={427}
            className=' object-cover pointer-events-none'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero