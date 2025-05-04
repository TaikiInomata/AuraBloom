import Rating from 'react-rating'
import productImg from '~/assets/productcard.png'
import { IoMdStar, IoMdStarOutline } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

function Product({product}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/detail/${product._id}`);
  }
  return (
    <div className='h-fit border border-gray-100 rounded-lg cursor-pointer' onClick={handleClick}>
      <div>
        <img src={product.avatar} alt='' className='w-full aspect-square' />
      </div>

      <div className='my-2 py-2 px-6'>
        <div className='text-lg font-semibold my-1 whitespace-nowrap overflow-hidden text-ellipsis'>{product.name}</div>
        <div className='flex items-center justify-between mb-2'>
          <div>{product.avgPrice.toLocaleString('vi-VN')}.đ</div>
          <Rating
            emptySymbol={<IoMdStarOutline />}
            fullSymbol={<IoMdStar />}
            initialRating={product.rating}
            readonly
            className='text-[#FBCA04] text-md leading-none'
          />
        </div>
        <p className='text-sm text-justify text-gray-400 line-clamp-2 break-words'>{product.description}</p>
      </div>

      <div className='text-center my-2'>Đã bán: {product.sold}</div>
    </div>
  )
}

export default Product