"use client"
import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import codigo2 from "./images/codigo2.webp";
import codigo3 from "./images/codigo3.webp";
import codigo5 from "./images/codigo5.webp";
import codigo6 from "./images/codigo6.webp";
import codigo7 from "./images/codigo7.webp";
import codigo8 from "./images/codigo8.webp";

export default function Style() {
  const [hoverStates, setHoverStates] = useState([false, false, false, false, false, false, false]);
  const controls = useAnimation();
  const textControls = useAnimation();

  const handleHover = async (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
    await controls.start({ scale: 1.1 });
    await textControls.start({ y: -20 });
  };

  const handleHoverExit = async (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
    await controls.start({ scale: 1 });
    await textControls.start({ y: 0 });
  };

  const roundedDivs = [
    { image: codigo8, text: "Transparent Trading Conditions", text2: "0% swaps No commissions Secure deposits and withdrawals via your preferred payment methods", backgroundColor: "#680A54" },
    { image: codigo2, text: "You have complete control on the type of investments you want to engage. All opportunities are pre-vetted by WithBloom", backgroundColor: '#E2C4D5', text2: "Decide on what to invest" },
    { image: codigo3, text: "Transparent Trading Conditions", text2: "Watch our course on the basic aspects of trading. Attend regular webinars and live trading sessions for beginners and pros.", backgroundColor: '#c4443f', text2: "Consultancy" },
    { image: codigo7, text: "Receive valuable tips for more profitable trading.", text2: "Trading Ideas", backgroundColor: "#50273E" },
    { image: codigo5, text: "Easily monitor the progress of your investments from your WithBloom dashboard.", text2: "Watch your portfolio grow", backgroundColor: "#CA6C35" },
    { image: codigo6, text: "Join other WithBloom users to co-invest in guaranteed fixed income investments & other amazing projects.", text2: "Co-invest in opportunities", backgroundColor: "#0A681E" },
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-20 mt-9%'>
      {roundedDivs.map((roundedDiv, index) => (
        <motion.div
          key={index}
          className='relative rounded-full p-4 border border-yellow-400 bg-white cursor-pointer text-white font-bold text-sm text-center transform transition-transform'
          style={{ backgroundColor: roundedDiv.backgroundColor }}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={() => handleHoverExit(index)}
          initial={{ scale: 1 }}
          animate={hoverStates[index] ? { scale: 1.1 } : { scale: 1 }}
        >
          {hoverStates[index] && (
            <motion.div
              className='absolute inset-0 flex items-center justify-center text-center text-xs font-semibold bg-black bg-opacity-75'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {roundedDiv.text}
            </motion.div>
          )}
          <motion.div
            initial={{ scale: 1 }}
            animate={hoverStates[index] ? { scale: 0.5 } : { scale: 1 }}
            className='absolute inset-0 flex items-center justify-center'
          >
            <Image src={roundedDiv.image} alt='codigo' width={150} height={150} loading='lazy' />
          </motion.div>
          <div className='font-bold mt-4'>{roundedDiv.text2}</div>
        </motion.div>
      ))}
    </div>
  );
}
