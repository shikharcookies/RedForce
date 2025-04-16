"use client";
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import Link from 'next/link';

export const Header = () => {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
      {/* Logo Section */}
      <Image
        src={'/logo.svg'}
        alt='logo'
        width={160}
        height={100}
      />

      {/* Navigation Links */}
      <ul className='hidden md:flex gap-6'>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path == '/dashboard' && 'text-primary font-bold'}`}
        >
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path == '/dashboard/questions' && 'text-primary font-bold'}`}
        >
          <Link href="/dashboard/questions">Questions</Link>
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path == '/dashboard/upgrade' && 'text-primary font-bold'}`}
        >
          <Link href="/dashboard/upgrade">Upgrade</Link>
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path == '/dashboard/how' && 'text-primary font-bold'}`}
        >
          <Link href="/dashboard/how">How it works?</Link>
        </li>
      </ul>

      {/* User Button */}
      <UserButton />
    </div>
  );
};

export default Header;
