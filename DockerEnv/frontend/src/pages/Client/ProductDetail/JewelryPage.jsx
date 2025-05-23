import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {
  addToCartAPI,
  fetchCurrentCartAPI,
  fetchProductDetailAPI
} from '~/apis'
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group'
import { Label } from '~/components/ui/label'
import { useToast } from '~/hooks/use-toast'
import { useAuth } from '~/contexts/AuthContext'
import { cloneDeep } from 'lodash'
import { useCart } from '~/contexts/CartContext'

const JewelryPage = () => {
  const [selectedColor, setSelectedColor] = useState('beige')
  const [activeTab, setActiveTab] = useState('description')
  const [typeId, setTypeId] = useState()
  const { toast } = useToast()
  const { id } = useParams()
  const { currentUser } = useAuth()
  const { currentCart, setCart } = useCart()

  const colors = [
    { name: 'beige', code: 'bg-[#e2d1c3]' },
    { name: 'black', code: 'bg-black' },
    { name: 'blue', code: 'bg-blue-900' }
  ]

  const images = Array(4).fill(
    'https://pos.nvncdn.com/2865a9-85186/ps/20240128_hMm4MN1XOD.jpeg'
  )

  const reviews = [
    {
      name: 'Việt Khiêm',
      rating: 5,
      comment: 'Áo rất đẹp và ấm!',
      date: '2025-04-10'
    },
    {
      name: 'Minh Anh',
      rating: 4,
      comment: 'Chất lượng ổn, nhưng giao hơi chậm.',
      date: '2025-04-12'
    },
    {
      name: 'Tuấn Trần',
      rating: 5,
      comment: 'Mặc vào là crush cười ngay!',
      date: '2025-04-14'
    }
  ]

  const suggested = Array(4).fill({
    image: 'https://pos.nvncdn.com/2865a9-85186/ps/20240128_hMm4MN1XOD.jpeg'
  })

  const [productDetail, setProductDetail] = useState()
  useEffect(() => {
    fetchProductDetailAPI(id).then((data) => setProductDetail(data))
  }, [id])

  const handleAddToCart = () => {
    if (!typeId) {
      toast({
        variant: 'destructive',
        description: 'Bạn chưa chọn loại sản phẩm!'
      })
      return
    }
    const quantity = 1
    const data = { productId: id, typeId, quantity }
    if (!currentUser) {
      let itemList = cloneDeep(currentCart?.itemList) || []
      let fullProducts = cloneDeep(currentCart?.fullProducts) || []

      let isExistedItem = false
      itemList.forEach((item) => {
        if (
          !isExistedItem &&
          item.productId.toString() === data.productId &&
          item.typeId.toString() === data.typeId
        ) {
          item.quantity += quantity
          isExistedItem = true
        }
      })
      if (!isExistedItem) {
        itemList.push(data)
        const newProduct = cloneDeep(productDetail)
        newProduct.type = newProduct.types.find(
          (t) => t.typeId.toString() === data.typeId
        )
        fullProducts.push(newProduct)
      }

      const newCart = { itemList, fullProducts }

      setCart(newCart)
      toast({
        variant: 'success',
        description: 'Thêm vào giỏ hàng thành công!'
      })
      return
    }

    addToCartAPI(data).then(() => {
      fetchCurrentCartAPI(data).then((res) => {
        setCart(res)
        toast({
          variant: 'success',
          description: 'Thêm vào giỏ hàng thành công!'
        })
      })
    })
  }

  return (
    <div className='bg-[#f8fcff] text-gray-800 font-sans p-6 min-h-screen'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='flex flex-col gap-4'>
          {productDetail && (
            <img
              src={productDetail?.avatar}
              alt='Main'
              className='rounded-lg w-full'
            />
          )}
          <div className='grid grid-cols-4 gap-2'>
            <img src={productDetail?.avatar} alt={''} className='rounded-lg' />
            <img src={productDetail?.avatar} alt={''} className='rounded-lg' />
            <img src={productDetail?.avatar} alt={''} className='rounded-lg' />
            <img src={productDetail?.avatar} alt={''} className='rounded-lg' />
          </div>
        </div>

        <div className='space-y-4'>
          <p className='text-sm text-gray-500'>Quần áo / sweater</p>
          <h1 className='text-2xl font-semibold'>{productDetail?.name}</h1>
          <p className='text-xl font-semibold text-gray-800'>
            {productDetail?.avgPrice.toLocaleString('vi-VN')} đ
          </p>

          <div>
            <p className='text-sm mb-1'>Color</p>
            <div className='flex gap-3'>
              {colors.map((c) => (
                <div
                  key={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  className={`w-6 h-6 rounded-full border-2 cursor-pointer ${c.code} ${
                    selectedColor === c.name ? 'ring-2 ring-gray-700' : ''
                  }`}
                />
              ))}
            </div>
          </div>

          <div className='mt-10'>
            <div className='text-mainColor1-600 font-medium mb-2'>
              Loại sản phẩm
            </div>
            <fieldset className='space-y-4'>
              <RadioGroup
                className='gap-0 -space-y-px rounded-md shadow-xs'
                onValueChange={setTypeId}
              >
                {productDetail?.types?.map((type) => (
                  <div
                    key={type.typeId}
                    className='border-input has-[button[data-state=checked]]:border-mainColor1-200 has-[button[data-state=checked]]:bg-mainColor1-100/20 relative flex flex-col gap-4 border px-4 py-3 outline-none first:rounded-t-md last:rounded-b-md has-[button[data-state=checked]]:z-10'
                  >
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <RadioGroupItem
                          id={type.typeId}
                          value={type.typeId}
                          className='after:absolute after:inset-0'
                        />
                        <Label
                          className='inline-flex items-start'
                          htmlFor={type.typeId}
                        >
                          Màu: {type.properties[0].value} - Size:{' '}
                          {type.properties[1].value}
                        </Label>
                      </div>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </fieldset>
          </div>

          <div className='text-sm text-gray-600 leading-relaxed'>
            <p>Thông tin sản phẩm: {productDetail?.description}</p>
            <p>Thương hiệu: {productDetail?.brand}</p>
            <p>Đã bán: {productDetail?.sold}</p>
          </div>

          <button
            className='mt-4 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 w-full'
            onClick={handleAddToCart}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>

      <div className='max-w-7xl mx-auto mt-16'>
        <div className='flex justify-between border-t border-b border-slate-700 py-4'>
          <div className='flex-1 text-center'>
            <h3 className='font-bold uppercase text-black mb-2 text-sm'>
              design
            </h3>
            <p className='text-sm text-gray-800'>
              Thiết kế mềm nhẹ, ôm gọn, giúp thoải mái di chuyển, dễ dàng giặt
              giũ
            </p>
          </div>
          <div className='flex-1 text-center'>
            <h3 className='font-bold uppercase text-black mb-2 text-sm'>
              quality
            </h3>
            <p className='text-sm text-gray-800'>
              Chất lượng cotton dễ thấm hút và thoáng khí giúp nguồn mặc cảm
              thấy thoải mái
            </p>
          </div>
          <div className='flex-1 text-center'>
            <h3 className='font-bold uppercase text-black mb-2 text-sm'>
              brand
            </h3>
            <p className='text-sm text-gray-800'>
              Sản phẩm đến từ thương hiệu nổi tiếng với nền thiết kế hiện đại
              nhưng vẫn đảm bảo chất cổ điển
            </p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className='max-w-7xl mx-auto mt-10'>
        <h2 className='text-xl font-semibold'>{productDetail?.rating}</h2>
        <h2 className='text-sm font-semibold mb-4'>Base on 15.5 reviews</h2>
        {reviews.map((r, idx) => (
          <div key={idx} className='flex border-b py-3'>
            <div className='font-medium w-[10%] self-center truncate px-2'>
              {r.name}
            </div>
            <div className='w-[80%] px-4'>
              <p className='text-black-800'>
                {'★'.repeat(r.rating)}
                {'☆'.repeat(5 - r.rating)}
              </p>
              <p className='text-sm mt-1'>{r.comment}</p>
            </div>
            <div className='text-sm text-gray-500 w-[10%] self-center text-right px-2'>
              {r.date}
            </div>
          </div>
        ))}
      </div>

      <div className='max-w-7xl mx-auto mt-10'>
        <h2 className='text-xl font-semibold mb-4'>Sản phẩm gợi ý</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {suggested.map((item, idx) => (
            <div key={idx} className='text-center'>
              <img
                src={item.image}
                alt={item.name}
                className='rounded-lg mx-auto'
              />
              <p className='text-sm mt-2'>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JewelryPage
