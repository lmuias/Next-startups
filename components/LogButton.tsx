"use client"

import React from 'react'

const LogButton = ({ title }: { title: string }) => {
  const removeBurgerOpenClass = () => {
    const menuElement = document.getElementById("burger-menu");
    if (menuElement && menuElement.classList.contains("burger-open")) {
      menuElement.classList.remove("burger-open");
      document.body.classList.remove('overflow-hidden');
    }
  };

  return (
    <button type='submit' className='navbar-item-hover' onClick={removeBurgerOpenClass}>
      <span>{title}</span>
    </button>
  )
}

export default LogButton