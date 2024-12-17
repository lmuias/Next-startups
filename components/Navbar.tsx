
import { auth, signIn, signOut } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BurgerNavigation from './BurgerNavigation';
import BurgerIcon from './BurgerIcon';

export const Navbar = async () => {
  const session = await auth();

  return (
    <>
      <header className='px-5 py-3 bg-white shadow-sm font-work-sans overflow-x-hidden'>
        <nav className='flex justify-between items-center'>
          <Link href={'/'} className='hover:scale-105 transition-transform'>
            <Image src="/logo.svg" alt='logo' width={30} height={30}/>
          </Link>
          <div className='flex items-center gap-5'>
            <Link href="/" className={`navbar-item-hover`}>
              <span className='max-sm:hidden'>Home</span>
            </Link>
            <Link href="/about" className='navbar-item-hover'>
              <span className='max-sm:hidden'>About</span>
            </Link>
            <Link href="/contact" className='navbar-item-hover'>
              <span className='max-sm:hidden'>Contact us</span>
            </Link>
            <BurgerIcon />
            {session && session?.user ? (
              <>
                <Link href="/startup/create" className='navbar-item-hover'>
                  <span className='max-sm:hidden'>Create</span>
                </Link>
                <form action={async() => {
                  "use server"

                  await signOut({ redirectTo: '/' })}  
                }>
                  <button type='submit' className='navbar-item-hover'>
                    <span className='max-sm:hidden'>Log Out</span>
                  </button>
                </form>
                <Link href={`/user/${session?.id}`} className='hover:opacity-50 hover:scale-105 transition-all'>
                  <Avatar className='size-10'>
                    <AvatarImage 
                      src={session?.user?.image || ''}
                      alt={session?.user?.name || ''}
                    />
                    <AvatarFallback>AV</AvatarFallback>
                  </Avatar>
                </Link>
              </>
            ) : (
              <form action={async() => {
                "use server"

                await signIn("github")}
              }>
                <button type='submit'>Login</button>
              </form>
            )}
          </div>
        </nav>
      </header>
      <BurgerNavigation session={session} />
    </>
  )
}