"use client"

import Link from 'next/link';
import React from 'react'

const MenuLink = ({ title, link }: { title: string, link: string }) => {
  const removeBurgerOpenClass = () => {
    const menuElement = document.getElementById("burger-menu");
    if (menuElement && menuElement.classList.contains("burger-open")) {
      menuElement.classList.remove("burger-open");
      document.body.classList.remove('overflow-hidden');
    }
  };

  return (
    <Link href={`${link}`} className='navbar-item-hover uppercase' onClick={removeBurgerOpenClass}>
      <span>{title}</span>
    </Link>
  )
}

export default MenuLink