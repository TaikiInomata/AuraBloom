import Rating from 'react-rating'
import productImg from '~/assets/productcard.png'
import { IoMdStar, IoMdStarOutline } from 'react-icons/io'

function Product() {
  return (
    <div className='h-fit border border-gray-100 rounded-lg'>
      <div>
        <img src={productImg} alt='' className='w-full aspect-square' />
      </div>

      <div className='my-2 py-2 px-6'>
        <div className='text-lg font-semibold my-1'>Áo thun</div>
        <div className='flex items-center justify-between mb-2'>
          <div>50.000.000</div>
          <Rating
            emptySymbol={<IoMdStarOutline />}
            fullSymbol={<IoMdStar />}
            initialRating={3.6}
            readonly
            className='text-[#FBCA04] text-md leading-none'
          />
        </div>
        <p className='text-sm text-justify text-gray-400'>Mô tả sản phẩm: Bằng vàng, trang trí, đeo</p>
      </div>

      <div className='text-center my-2'>Đã bán: 1</div>
    </div>
  )
}

export default Product