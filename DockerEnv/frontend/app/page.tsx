import Image from 'next/image'
import banner from '@/assets/banner.png'
import img1 from '@/assets/img1.png'
import img2 from '@/assets/img2.jpg'
import img3 from '@/assets/img3.jpg'
import img4 from '@/assets/img4.png'
import img5 from '@/assets/img5.png'
import img6 from '@/assets/img6.png'
import img7 from '@/assets/img7.png'
import img8 from '@/assets/img8.jpg'
import img9 from '@/assets/img9.png'
import img10 from '@/assets/img10.png'
import product1 from '@/assets/product1.png'
import product2 from '@/assets/product2.png'
import product3 from '@/assets/product3.png'
import product4 from '@/assets/product4.png'
import product5 from '@/assets/product5.png'
import { FiPlus } from 'react-icons/fi'

export default function Home() {
  return (
    <>
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
        <Image
          src={banner}
          alt="banner"
          width={undefined}
          height={undefined}
          className="w-full h-full object-cover"
        />


        <div className='container mx-auto relative -top-45'>
          <p className='text-white text-2xl'>Elevate Your Style<br />Timeless Fashion, Sustainable<br />Choices</p>
          <button className='bg-[#F8F9FA] px-4 py-2 mt-4'>Shop Now</button>
        </div>
      </div>

      <div className="container mx-auto my-6">
        <div className='my-6'>Elevate your lifestyle with a more intelligent, superior wardrobe.<br />Our range is crafted sustainably with longevity in mind.</div>

        <div className="my-6 grid grid-cols-3 gap-6">
          <div className="relative">
            <Image
              src={img1}
              alt="img1"
              width={undefined}
              height={undefined}
              className="h-[532px] object-cover"
            />
            <p className='absolute bottom-8 left-8 text-white'>New Arrivals</p>
          </div>
          <div className="relative">
            <Image
              src={img2}
              alt="img2"
              width={undefined}
              height={undefined}
              className="h-[532px] object-cover"
            />
            <p className='absolute bottom-8 left-8 text-white'>The Casual Edit</p>
          </div>
          <div className="relative">
            <Image
              src={img3}
              alt="img3"
              width={undefined}
              height={undefined}
              className="h-[532px] object-cover"
            />
            <p className='absolute bottom-8 left-8 text-white'>Best-Sellers</p>
          </div>

        </div>

        <div className='my-10'>What to Wear Now</div>

        <div className="grid grid-cols-5 gap-6">
          <div className="">
            <div className="relative w-fit h-fit mb-2">
              <Image
                src={product1}
                alt="product1"
                width={undefined}
                height={undefined}
                className="h-[279px] object-cover"
              />
              <FiPlus className='absolute bottom-4 right-4 cursor-pointer'/>
            </div>
            <p className='font-medium'>Classic Easy Zipper Tote</p>
            <p className='text-sm'>$298</p>
          </div>

          <div className="">
            <div className="relative w-fit h-fit mb-2">
              <Image
                src={product2}
                alt="product2"
                width={undefined}
                height={undefined}
                className="h-[279px] object-cover"
              />
              <FiPlus className='absolute bottom-4 right-4 cursor-pointer'/>
            </div>
            <p className='font-medium'>Classic Easy Zipper Tote</p>
            <p className='text-sm'>$298</p>
          </div>

          <div className="">
            <div className="relative w-fit h-fit mb-2">
              <Image
                src={product3}
                alt="product3"
                width={undefined}
                height={undefined}
                className="h-[279px] object-cover"
              />
              <FiPlus className='absolute bottom-4 right-4 cursor-pointer'/>
            </div>
            <p className='font-medium'>Classic Easy Zipper Tote</p>
            <p className='text-sm'>$298</p>
          </div>

          <div className="">
            <div className="relative w-fit h-fit mb-2">
              <Image
                src={product4}
                alt="product4"
                width={undefined}
                height={undefined}
                className="h-[279px] object-cover"
              />
              <FiPlus className='absolute bottom-4 right-4 cursor-pointer'/>
            </div>
            <p className='font-medium'>Classic Easy Zipper Tote</p>
            <p className='text-sm'>$298</p>
          </div>

          <div className="">
            <div className="relative w-fit h-fit mb-2">
              <Image
                src={product5}
                alt="product5"
                width={undefined}
                height={undefined}
                className="h-[279px] object-cover"
              />
              <FiPlus className='absolute bottom-4 right-4 cursor-pointer'/>
            </div>
            <p className='font-medium'>Classic Easy Zipper Tote</p>
            <p className='text-sm'>$298</p>
          </div>
        </div>

        <div className="my-10 grid grid-cols-2 gap-6">
          <div className="relative">
            <Image
              src={img5}
              alt="img5"
              width={undefined}
              height={undefined}
              className="h-[719px] object-cover"
            />
            <div className='bg-gradient-to-b from-transparent via-black/0 to-black/20 absolute top-0 left-0 h-[719px] w-full'></div>
            <p className='absolute bottom-8 left-8 text-white'>The Smart Chic</p>
          </div>
          <div className="relative bg-gradient-to-b from-transparent via-black/0 to-black/20">
            <Image
              src={img4}
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
            <Image
              src={img6}
              alt="img1"
              width={undefined}
              height={undefined}
              className="h-[250px] object-cover"
            />
          </div>
          <div className="">
            <Image
              src={img7}
              alt="img1"
              width={undefined}
              height={undefined}
              className="h-[250px] object-cover"
            />
          </div>
          <div className="">
            <Image
              src={img8}
              alt="img1"
              width={undefined}
              height={undefined}
              className="h-[250px] object-cover"
            />
          </div>
          <div className="">
            <Image
              src={img9}
              alt="img1"
              width={undefined}
              height={undefined}
              className="h-[250px] object-cover"
            />
          </div>
          <div className="">
            <Image
              src={img10}
              alt="img1"
              width={undefined}
              height={undefined}
              className="h-[250px] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  )
}
