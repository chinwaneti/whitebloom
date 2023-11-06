"use client"
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
// import { useRouter } from 'react-router-dom';
import { useRouter } from 'next/navigation';
import Footer1 from '../components/Footer1';
// import Footer1 from './Footer1';
import Image from 'next/image';


export default function Welcome() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/signIn'); // Use the router function to navigate
    }, 4000);
  
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className='bg-[#082c64] text-center text-white h-screen flex flex-col justify-center items-center'>
      <div className='flex items-center mt-[15%] font-extrabold text-4xl'>
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className='flex items-center space-x-2'>
            <Image src="https://cdn-icons-png.flaticon.com/128/7059/7059470.png?ga=GA1.1.1685298518.1695204527&track=ais" alt="pix" width={100} height={100}  className='w-10 h-10' />
            <span>With</span>
          </span>
        </motion.div>
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Bloom
        </motion.div>
      </div>
    <Footer1 />
    </div>
  );
}