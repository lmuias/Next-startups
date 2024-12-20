"use client"

import React from 'react'

const BurgerIcon = () => {
  const handleClick = () => {
    const menuElement = document.getElementById("burger-menu");
    if (menuElement) {
      menuElement.classList.toggle("burger-open");
      document.body.classList.add('overflow-hidden');
    }
  };

  
  return (
    <button type='button' className='size-6 sm:hidden' onClick={handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>

  )
}

export default BurgerIcon