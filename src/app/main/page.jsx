import React from 'react';
import Image from 'next/image'; // Import next/image component
import Header from '../components/Header';
import Footer from '../components/Footer';
import pic from '../components/images/mobile-app.webp';
import happy from '../components/images/happy.png';
import Style from '../components/Style';






export default function Main() {
  return (
    <div className="h-[100vh] relative">
      <div>
        <Header />
      </div>
      <div className='font-extrabold  md:text-[50px] text-[30px]  text-blue-800  ml-[5%] md:px-0 px-5 md:mt-[13%] mt-[30%]'>
  <div
  className='text-black'
  >
    The Better Way
  </div>
  <div
   
  >
    To Trade and Invest.
  </div>
</div>
<Image src={happy} alt='happy' width={200} height={200} className='absolute right-20 w-96 h-96 top-0 mt-16 hidden sm:block'></Image>
<div
  className='ml-[5%] md:px-0 px-5 md:w-[51.5%] mt-4'

>
  WithBloom: Simplify currency exchange and monitor crypto values effortlessly. Your comprehensive financial companion for efficient money management.
</div>

<div
  className='ml-[5%] my-5 w-[51.5%] md:px-0 px-5'
 
>
 <strong >The Better Way To Trade and Invest.</strong> 
  <br />
  <strong><em>Bitcoin (BTC):</em></strong>
  <br />
  Approximate Exchange Rate: 1 BTC = $40,000 USD
  <br />
  <strong><em>Ethereum (ETH):</em></strong>
  <br />
  Approximate Exchange Rate: 1 ETH = $2,500 USD
</div>

      <div className="absolute md:top-[74%] top-[100%] md:w-full w-[100%]">
        <div className="flex bg-gray-100 p-10 ">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/2592/2592317.png?ga=GA1.1.1685298518.1695204527&track=ais"
            alt="pix"
            width={100}
            height={50}
            className="w-20 h-40 md:h-20 md:mt-6  md:ml-32"
          />
          <div className="md:ml-10 ml-2">
            <p className="font-bold text-xl my-2 text-blue-800">Your Security is our Priority</p>
            <p className="md:w-[650px]">
              WithBloom uses the highest levels of Internet Security and is secured by 256 bits SSL security encryption to ensure that your information is completely protected from fraud.
            </p>
          </div>
        </div>
        <p className='text-blue-800 font-bold md:ml-[30%] ml-[15%] md:text-4xl text-2xl md:absolute md:top-[122%] py-14 '>Your safe space for investing</p>
      </div>
      <div className='md:mt-[35%] mt-[90%]'><Style /></div>
      
      <div className='absolute md:top-[280%]  md:ml-16 ml-6 md:px-0 px-5 md:py-10  w-[90%] md:h-[90%] rounded-3xl bg-gray-100 md:mt-0 mt-28'>
        <div className='flex w-[80%] mx-auto'>
          <div className='md:w-[50%] ml-5 mt-7'>
            <p className='font-bold md:text-4xl text-2xl my-8'>Trade on the go with the <span className='text-blue-800'>WithBloom trading app</span></p>
            <p className='my-8'>
              Enjoy a smooth trading experience from any device. Download our app and keep track of your orders whether you are in the office, on vacation, or at home.
            </p>
            <p className='absolute right-5 top-20'>
              <Image src={pic} alt="pic" width={150} height={150} className='w-96 h-96 hidden sm:block' />
            </p>
            <p>
              <Image src='https://img.freepik.com/free-vector/illustration-barcode_53876-44019.jpg?size=626&ext=jpg&ga=GA1.1.1685298518.1695204527&semt=ais' alt='scan' width={170} height={170} className='rounded-3xl mb-5'/>
            </p>
          </div>
        </div>
      </div>
      <div className='absolute md:top-[380%] md:mt-0 mt-[140%]'>
        <Footer />
      </div>
    </div>
  );
}