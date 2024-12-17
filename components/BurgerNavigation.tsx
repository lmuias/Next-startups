import { signIn, signOut } from '@/auth'
import { Session } from 'next-auth'
import React from 'react'
import BurgerIconClose from './BurgerIconClose'
import MenuLink from './MenuLink'
import LogButton from './LogButton'

const BurgerNavigation = ({ session }: { session: Session | null }) => {
  return (
    <section 
      id='burger-menu' 
      className='fixed bg-orange-400 pattern left-0 right-0 top-0 h-screen flex items-center gap-5 justify-center -translate-x-full transition-transform'
    >
      <BurgerIconClose />
      <div className='flex flex-col items-center gap-5 text-white'>
        <MenuLink title='Home' link='/' />
        <MenuLink title='About' link='/about' />
        <MenuLink title='Contact us' link='/contact' />
        {session && session?.user ? (
          <>
            <MenuLink title='Create' link='/startup/create' />
            <form action={async() => {
              "use server"

              await signOut({ redirectTo: '/' })}  
            }>
              <LogButton title='Log Out' />
            </form>
          </>
        ) : (
          <form action={async() => {
            "use server"

            await signIn("github")}
          }>
            <LogButton title='Login' />
          </form>
        )}
      </div>
    </section>
  )
}

export default BurgerNavigation;