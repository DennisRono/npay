import React from 'react'
import { NavMenuItem } from './NavMenuItem'
import Link from 'next/link'
import Image from 'next/image'
import NullChemy from '@/assets/images/nullchemy_logo.png'

const Header = () => {
  return (
    <div className="h-14">
      <div className="container h-full">
        <div className="flex items-center justify-between gap-2 h-full">
          <div className="flex items-center justify-start gap-1">
            <Image src={NullChemy} alt="" className="w-[35px]" />
            <h1 className="font-bold text-3xl uppercase">pay</h1>
          </div>
          <div className="">
            <NavMenuItem />
          </div>
          <div className="">
            <Link
              href=""
              className="px-4 py-2 rounded-[7px] border border-slate-800 cursor-pointer text-xs font-semibold"
            >
              Sign in / Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
