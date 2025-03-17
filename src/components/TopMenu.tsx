import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function TopMenu() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end bg-white shadow-md py-2 px-6">
      <div className="flex items-center space-x-4">
        <Link href="/booking" className="px-4 py-2 bg-primary-500 text-white hover:bg-white hover:text-primary-500 hover:border border-primary-500 font-medium rounded-md transition duration-200 shadow-sm ">
          Booking
        </Link>
        <Image 
          src="/images/logo.png" 
          alt="Venue Logo" 
          width={120}
          height={40}
          className="h-10 w-auto"
          priority
        />
      </div>
    </div>
  );
}