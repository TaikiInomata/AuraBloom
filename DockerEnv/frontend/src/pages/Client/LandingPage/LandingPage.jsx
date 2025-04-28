import img6 from '~/assets/img6.png'
import img7 from '~/assets/img7.png'
import img8 from '~/assets/img8.jpg'
import img9 from '~/assets/img9.png'
import img10 from '~/assets/img10.png'
import { FiPlus } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { fetchLandingPageAPI } from '~/apis'

function LandingPage() {

  const [landingPageData, setLandingPageData] = useState({})

  useEffect(() => {
    fetchLandingPageAPI().then(data => setLandingPageData(data.landingPage))
  }, [])

  return (
    <div>
      <div className="">
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

      {/* Banner */}
      <div className='w-full h-[600px] relative'>
        <img
          src={landingPageData?.banner1}
          alt="banner"
          className="w-full h-full object-cover"
        />

        {/* <div className='container mx-auto relative -top-44'>
          <p className='text-white text-2xl'>Elevate Your Style<br />Timeless Fashion, Sustainable<br />Choices</p>
          <button className='bg-[#F8F9FA] px-4 py-2 mt-4'>Shop Now</button>
        </div> */}
      </div>

      <div className="container mx-auto my-6">
        <div className='my-6'>Elevate your lifestyle with a more intelligent, superior wardrobe.<br />Our range is crafted sustainably with longevity in mind.</div>

        <div className="my-6 grid grid-cols-3 gap-6">
          <div className="relative">
            <img
              src={landingPageData?.banner2}
              alt="img1"
              width={undefined}
              height={undefined}
              className="h-[532px] object-cover"
            />
            <p className='absolute bottom-8 left-8 text-white'>New Arrivals</p>
          </div>
          <div className="relative">
            <img
              src={landingPageData?.banner3}
              alt="img2"
              width={undefined}
              height={undefined}
              className="h-[532px] object-cover"
            />
            <p className='absolute bottom-8 left-8 text-white'>The Casual Edit</p>
          </div>
          <div className="relative">
            <img
              src={landingPageData?.banner4}
              alt="img3"
              width={undefined}
              height={undefined}
              className="h-[532px] object-cover"
            />
            <p className='absolute bottom-8 left-8 text-white'>Best-Sellers</p>
          </div>

        </div>

        <div className='my-10'>Hôm nay mặc gì?</div>

        <div className="grid grid-cols-5 gap-6">
          {landingPageData?.products?.map(product =>
            <div className="hover:scale-105 transition-transform hover:ease-in-out hover:duration-300 cursor-pointer hover:shadow-xl rounded-lg overflow-hidden" key={product?._id}>
              <div className="relative w-fit h-fit mb-2">
                <img
                  src={product?.avatar}
                  alt="product1"
                  width={undefined}
                  height={undefined}
                  className="w-full aspect-square object-cover"
                />
                <FiPlus className='absolute bottom-4 right-4 cursor-pointer'/>
              </div>
              <div className='px-2 py-1'>
                <p className='font-medium'>{product?.name}</p>
                <p className='text-sm'>{product?.avgPrice.toLocaleString('vi-vn')}<sup>đ</sup></p>
              </div>

            </div>
          )}

        </div>

        <div className="my-10 grid grid-cols-2 gap-6">
          <div className="relative">
            <img
              src={landingPageData?.banner5}
              alt="img5"
              width={undefined}
              height={undefined}
              className="h-[719px] object-cover"
            />
            <div className='bg-gradient-to-b from-transparent via-black/0 to-black/20 absolute top-0 left-0 h-[719px] w-full'></div>
            <p className='absolute bottom-8 left-8 text-white'>The Smart Chic</p>
          </div>
          <div className="relative bg-gradient-to-b from-transparent via-black/0 to-black/20">
            <img
              src={landingPageData?.banner6}
              alt="img4"
              width={undefined}
              height={undefined}
              className="h-[719px] object-cover"
            />
            <div className='bg-gradient-to-b from-transparent via-black/0 to-black/20 absolute top-0 left-0 h-[719px] w-full'></div>
            <p className='absolute bottom-8 left-8 text-white'>Ready To Go</p>
          </div>
        </div>

        <div className="my-10 bg-[#F5F4F4] pt-24 pb-44 px-96 text-center">
          <p className='text-2xl font-semibold mb-6'>The Art of Fewer, Better Choices</p>
          <p>Opting for quality over quantity means selecting timeless, durable, and responsibly made items. This approach simplifies our lives and fosters a deeper appreciation for our surroundings. Emphasizing longevity and responsible production resonates with a more sustainable and mindful lifestyle.</p>
        </div>

        <div className='my-10 text-center'>Show Instagram</div>
        <div className="grid grid-cols-5 gap-6">
          <div className="">
            <img
              src={img6}
              alt="img1"
              width={undefined}
              height={undefined}
              className="h-[250px] object-cover w-full"
            />
          </div>
          <div className="">
            <img
              src={img7}
              alt="img1"
              width={undefined}
              height={undefined}
              className="h-[250px] object-cover w-full"
            />
          </div>
          <div className="">
            <img
              src={img8}
              alt="img1"
              width={undefined}
              height={undefined}
              className="h-[250px] object-cover w-full"
            />
          </div>
          <div className="">
            <img
              src={img9}
              alt="img1"
              width={undefined}
              height={undefined}
              className="h-[250px] object-cover w-full"
            />
          </div>
          <div className="">
            <img
              src={img10}
              alt="img1"
              width={undefined}
              height={undefined}
              className="h-[250px] object-cover w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage