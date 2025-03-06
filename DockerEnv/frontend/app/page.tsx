import Image from 'next/image'
import banner from '@/assets/banner.png'
import ring from '@/assets/ring.png'

export default function Home() {
  return (
    <>
      <div className="border-b-gray-500/11 border-b-[3px]">
        <div className="container mx-auto">
          <ul className="p-0 flex items-center justify-between w-full py-4">
            <li className="cursor-pointer hover:font-bold transition-all hover:ease-in-out hover:duration-300">Trang sức</li>
            <li className="cursor-pointer hover:font-bold transition-all hover:ease-in-out hover:duration-300">Quần áo</li>
            <li className="cursor-pointer hover:font-bold transition-all hover:ease-in-out hover:duration-300">Dây chuyền</li>
            <li className="cursor-pointer hover:font-bold transition-all hover:ease-in-out hover:duration-300">Đồng hồ</li>
            <li className="cursor-pointer hover:font-bold transition-all hover:ease-in-out hover:duration-300">Giày dép</li>
            <li className="cursor-pointer hover:font-bold transition-all hover:ease-in-out hover:duration-300">Phụ kiện</li>
            <li className="cursor-pointer hover:font-bold transition-all hover:ease-in-out hover:duration-300">Quà tặng</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto my-6">
        <div className="my-6">
          <Image
            src={banner}
            alt="banner"
            width={undefined}
            height={undefined}
            className="w-full h-[150px] object-cover"
          />
        </div>

        <div className="bg-[#D1D7D8]/24 rounded-[55px] border border-black/24 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] mt-28 px-20 py-4 relative">
          <div className="absolute top-[-10px] left-[50%] translate-[-50%] w-[130px] h-[40px] bg-[#C0C6C6] after:absolute after:bottom-[-15px] after:left-0 after:w-0 after:h-0 after:border-l-[65px] after:border-l-transparent after:border-r-[65px] after:border-r-transparent after:border-t-[15px] after:border-t-[#C0C6C6] flex items-center justify-center">
            <span className="font-semibold">Nổi bật</span>
          </div>
          <ul className="bg-transparent flex items-center justify-between">
            <li className="bg-white rounded-3xl w-[100px] h-[120px] flex items-center justify-center">
              <Image src={ring} alt="" width={100} height={100} />
            </li>
            <li className="bg-white rounded-3xl w-[100px] h-[120px] flex items-center justify-center">
              <Image src={ring} alt="" width={100} height={100} />
            </li>
            <li className="bg-white rounded-3xl w-[100px] h-[120px] flex items-center justify-center">
              <Image src={ring} alt="" width={100} height={100} />
            </li>
            <li className="bg-white rounded-3xl w-[100px] h-[120px] flex items-center justify-center">
              <Image src={ring} alt="" width={100} height={100} />
            </li>
            <li className="bg-white rounded-3xl w-[100px] h-[120px] flex items-center justify-center">
              <Image src={ring} alt="" width={100} height={100} />
            </li>
          </ul>
        </div>

        <div className="bg-[#D1D7D8]/24 rounded-[55px] border border-black/24 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] mt-28 px-20 py-4 relative">
          <div className="absolute top-[-10px] left-[50%] translate-[-50%] w-[130px] h-[40px] bg-[#C0C6C6] after:absolute after:bottom-[-15px] after:left-0 after:w-0 after:h-0 after:border-l-[65px] after:border-l-transparent after:border-r-[65px] after:border-r-transparent after:border-t-[15px] after:border-t-[#C0C6C6] flex items-center justify-center">
            <span className="font-semibold">Bộ sưu tập</span>
          </div>
          <ul className="bg-transparent flex items-center justify-between">
            <li className="bg-white rounded-3xl w-[100px] h-[120px] flex items-center justify-center">
              <Image src={ring} alt="" width={100} height={100} />
            </li>
            <li className="bg-white rounded-3xl w-[100px] h-[120px] flex items-center justify-center">
              <Image src={ring} alt="" width={100} height={100} />
            </li>
            <li className="bg-white rounded-3xl w-[100px] h-[120px] flex items-center justify-center">
              <Image src={ring} alt="" width={100} height={100} />
            </li>
            <li className="bg-white rounded-3xl w-[100px] h-[120px] flex items-center justify-center">
              <Image src={ring} alt="" width={100} height={100} />
            </li>
            <li className="bg-white rounded-3xl w-[100px] h-[120px] flex items-center justify-center">
              <Image src={ring} alt="" width={100} height={100} />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
