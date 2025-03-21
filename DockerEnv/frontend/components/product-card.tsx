import productImg from '@/assets/productcard.png'
import Image from 'next/image'

export default function ProductCard() {
  return (
    <div className='max-w-52 h-fit border border-gray-100 p-2 rounded-lg'>
      <div>
        <Image src={productImg} alt='' width={undefined} height={undefined} className='w-full aspect-square' />
      </div>

      <div className='my-2'>
        <div className='text-lg font-semibold my-1'>Áo thun</div>
        <div className='flex items-center justify-between mb-2'>
          <div>50.000.000</div>
          <div>Rating</div>
        </div>
        <p className='text-sm text-justify text-gray-400'>Mô tả sản phẩm: Bằng vàng, trang trí, đeo</p>
      </div>

      <div className='text-center my-2'>Đã bán: 1</div>
    </div>
  )
}