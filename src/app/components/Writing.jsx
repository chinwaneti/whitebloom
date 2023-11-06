import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';


export default function Writing() {
  return (
    <div>
         <div className='font-extrabold text-[50px] text-blue-800 w-full ml-[5%] mt-[7%]'>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    The Better Way
  </motion.div>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    To Trade and Invest.
  </motion.div>
</div>
<Image src={happy} alt='happy' width={200} height={200} className='absolute right-20 w-96 h-96 top-40 mt-24'></Image>
<motion.div
  className='ml-[5%] w-[51.5%] mt-4'
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, delay: 1 }}
>
  WithBloom: Simplify currency exchange and monitor crypto values effortlessly. Your comprehensive financial companion for efficient money management.
</motion.div>

<motion.div
  className='ml-[5%] my-5 w-[51.5%]'
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, delay: 1.5 }}
>
  The Better Way To Trade and Invest.
  <br />
  Bitcoin (BTC):
  <br />
  Approximate Exchange Rate: 1 BTC = $40,000 USD
  <br />
  Ethereum (ETH):
  <br />
  Approximate Exchange Rate: 1 ETH = $2,500 USD
</motion.div>
    </div>
  )
}
