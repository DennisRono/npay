import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="h-min bg-black mt-4">
      <div className="container mx-auto">
        <div className="">
          <div className="flex items-start justify-evenly py-14">
            <div className="flex-1">
              <h1 className="text-white font-bold text-2xl uppercase">Npay</h1>
              <ul className="">
                <li className="link_item_footer">
                  <Link href="" className="text-white">
                    Terms of Service
                  </Link>
                </li>
                <li className="link_item_footer">
                  <Link href="" className="text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li className="link_item_footer">
                  <Link href="" className="text-white">
                    Cookie Policy
                  </Link>
                </li>
                <li className="link_item_footer">
                  <Link href="" className="text-white ">
                    Our Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h1 className="text-white font-bold text-2xl uppercase">
                Company
              </h1>
              <ul className="">
                <li className="link_item_footer">
                  <Link href="" className="text-white">
                    Developers
                  </Link>
                </li>
                <li className="link_item_footer">
                  <Link href="" className="text-white">
                    Careers
                  </Link>
                </li>
                <li className="link_item_footer">
                  <Link href="" className="text-white">
                    Partners
                  </Link>
                </li>
                <li className="link_item_footer">
                  <Link href="" className="text-white ">
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h1 className="text-white font-bold text-2xl uppercase">
                Services
              </h1>
              <ul className="">
                <li className="link_item_footer">
                  <Link href="" className="text-white">
                    Security
                  </Link>
                </li>
                <li className="link_item_footer">
                  <Link href="" className="text-white">
                    Fees
                  </Link>
                </li>
                <li className="link_item_footer">
                  <Link href="" className="text-white">
                    Help
                  </Link>
                </li>
                <li className="link_item_footer">
                  <Link href="" className="text-white ">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h1 className="text-white font-bold text-2xl uppercase">
                Products
              </h1>
              <ul className="">
                <li className="link_item_footer">
                  <Link href="" className="text-white">
                    Features
                  </Link>
                </li>
                <li className="link_item_footer">
                  <Link href="" className="text-white">
                    Contact Us
                  </Link>
                </li>
                <li className="link_item_footer">
                  <Link href="" className="text-white">
                    Clients
                  </Link>
                </li>
                <li className="link_item_footer">
                  <Link href="" className="text-white ">
                    Who we are
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center py-8">
            <p className="text-center text-white">
              copyright &copy; {new Date().getFullYear()} - Made with ❤️ by{' '}
              <a
                href="http://denniskibet.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dennis Kibet
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
