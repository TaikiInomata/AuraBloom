import Image from 'next/image'

import logo from '@/assets/logo.png'

function Header() {
  return (
    <div className="bg-[#BEC4C4] w-full h-fit">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-2">
          <Image
            src={logo}
            alt=""
            width={25}
            height={40}
            className="cursor-pointer"
          />

          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="rounded-full bg-white py-2 px-4 w-[50%] focus:outline-none focus:border-none"
          />

          <div className="flex items-center gap-4">
            <div className="rounded-full bg-white px-4 py-2 cursor-pointer">
              Login
            </div>
            <div className="rounded-full bg-white px-4 py-2 cursor-pointer">
              Sign up
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
