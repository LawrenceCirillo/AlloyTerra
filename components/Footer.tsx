import Link from 'next/link'
import Image from 'next/image'
import { Separator } from '@radix-ui/react-separator'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center">
            <Link href="/" className="relative w-48 h-10 mx-auto block">
              <Image
                src="/atlogo.svg"
                alt="AlloyTerra Logo"
                fill
                className="object-contain"
              />
            </Link>
            <p className="mt-2 text-sm text-gray-500 font-roboto">
              Empowering businesses through AI innovation
            </p>
          </div>

          <Separator className="w-full h-px bg-gray-200" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full">
            <div>
              <h3 className="text-xl font-poppins mb-4">Company</h3>
              <Separator className="mb-4 h-px bg-gray-200 w-16 mx-auto" />
              <ul className="space-y-2 font-roboto">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-black transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-black transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-poppins mb-4">Solutions</h3>
              <Separator className="mb-4 h-px bg-gray-200 w-16 mx-auto" />
              <ul className="space-y-2 font-roboto">
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-black transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-gray-600 hover:text-black transition-colors">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-poppins mb-4">Connect</h3>
              <Separator className="mb-4 h-px bg-gray-200 w-16 mx-auto" />
              <ul className="space-y-2 font-roboto">
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-black transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="w-full h-px bg-gray-200" />

          <div className="text-sm text-gray-500 font-roboto">
            {new Date().getFullYear()} AlloyTerra Group. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
