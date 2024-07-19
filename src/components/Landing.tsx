import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TwillioSegement from '@/assets/images/twilio-segment.png'
import Asana from '@/assets/images/asana.png'
import Intercom from '@/assets/images/intercom.svg'
import Gong from '@/assets/images/gong.png'
import HubSpot from '@/assets/images/hubspot.png'

const Landing = () => {
  return (
    <div className="h-[calc(100vh-56px)] flex flex-col justify-start">
      <div className="container h-full">
        <div className="flex items-center justify-evenly h-full gap-2">
          <div className="flex-1">
            <h1 className="my-4 text-8xl font-bold">
              Predictable growth starts here
            </h1>
            <p className="my-8 text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              magni consectetur officia veniam nesciunt id quos ipsam, pariatur
              nisi blanditiis explicabo vero beatae repellendus qui, rem est
              molestias necessitatibus? Est!
            </p>
            <Link
              href="/"
              className="h-8 w-14 bg-blue-700 text-white text-xl px-4 py-2 rounded-full my-4"
            >
              Get Started
            </Link>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
      <div className="">
        <p className="text-center">Lorem ipsum dolor sit amet consectetur.</p>
        <div className="flex items-center justify-center gap-2 py-6">
          <div className="mx-6">
            <Image src={TwillioSegement} alt="" className="w-[150px]" />
          </div>
          <div className="mx-6">
            <Image src={Asana} alt="" className="w-[150px]" />
          </div>
          <div className="mx-6">
            <Image src={Intercom} alt="" className="w-[150px]" />
          </div>
          <div className="mx-6">
            <Image src={Gong} alt="" className="w-[150px]" />
          </div>
          <div className="mx-6">
            <Image src={HubSpot} alt="" className="w-[150px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
