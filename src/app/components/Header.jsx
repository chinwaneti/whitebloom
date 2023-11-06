import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <header className="px-4 sm:px-6 md:px-10 fixed top-0 lg:px-16 w-full z-50 text-blue-600 bg-gray-100 py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
      <div className="flex items-center justify-start mb-4 sm:mb-0">
  <Link href='/'>
    <div className="flex items-center"> 
      <Image
        src='https://cdn-icons-png.flaticon.com/128/7059/7059470.png?ga=GA1.1.1685298518.1695204527&track=ais'
        alt="icon"
        width={40} 
        height={40}
      />
      <span className="text-blue-800 text-2xl sm:text-4xl font-bold ml-2">WithBloom</span>
    </div>
  </Link>
</div>

        <nav className="flex space-x-4 sm:space-x-5">
          <Link href="/coins">
            <span className="hover:text-blue-300 transition-colors cursor-pointer">Coins</span>
          </Link>
          <Link href="/exchange">
            <span className="hover:text-blue-300 transition-colors cursor-pointer">Exchange Rate</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
