import logo from '~/assets/logo.png'
import { useState } from 'react'
import { FiHome } from 'react-icons/fi'
import { LuLogIn } from 'react-icons/lu'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

function ClientHeader() {
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div className="border-b-[2px] border-b-gray-300 w-full h-fit">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-2">
          <img
            src={logo}
            alt=""
            width={25}
            height={40}
            className="cursor-pointer"
          />

          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="rounded-lg bg-white py-2 px-4 w-[50%] focus:outline-none border border-gray-900 focus:border-[2px]"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-lg p-2 hover:duration-300 hover:ease-in-out transition-all">
              <span>Trang chủ</span>
              <FiHome className='text-xl'/>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-lg p-2 hover:duration-300 hover:ease-in-out transition-all">
              <span>Đăng nhập</span>
              <LuLogIn className='text-xl' />
            </div>
            <div className="h-10 border-r border-r-gray-500"></div>
            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-lg p-2 hover:duration-300 hover:ease-in-out transition-all relative">
              <MdOutlineShoppingCart
                size={30}
                className="cursor-pointer"
                onClick={handleCartClick}
                text-2xl
              />
              <div className='absolute -top-0.5 -right-0.5 bg-orange-400 text-white rounded-full w-4 h-4 text-xs text-center'>1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientHeader
