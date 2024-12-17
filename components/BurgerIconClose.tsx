"use client"

import React from 'react'

const BurgerIconClose = () => {
  const removeBurgerOpenClass = () => {
    const menuElement = document.getElementById("burger-menu");
    if (menuElement && menuElement.classList.contains("burger-open")) {
      menuElement.classList.remove("burger-open");
      document.body.classList.remove('overflow-hidden');
    }
  };

  return (
    <button type='button' className='size-6' onClick={removeBurgerOpenClass}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="currentColor" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="white" 
        className="size-6 fill-white"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>
  )
}

export default BurgerIconClose