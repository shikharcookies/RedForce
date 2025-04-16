import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#720137] bg-black text-[#5E0009] py-4 px-6 flex flex-col md:flex-row items-center justify-between text-sm">
    
       <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="RedForce Logo" width={24} height={24} />
        <span className="font-semibold">RedForce</span>
      </div> 

      <div className="text-center w-full md:w-auto">
        © <span className="font-semibold text-[#720137]">RedForce</span> 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
