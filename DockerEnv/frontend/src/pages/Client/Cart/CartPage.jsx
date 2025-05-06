import React, { useState, useEffect } from 'react'
import ProductImg from '~/assets/productcard.png'
import close_icon from '~/assets/close_icon.svg'
import { fetchCartProductList, createOrder } from '~/apis'

const CartPage = () => {
  const [cartItems, setCartItems] = useState([])

  const [totalPrice, setTotalPrice] = useState(0)

  // test using local storage
  localStorage.setItem('cart', JSON.stringify({
    ids: ['67dbd7949b94df7a8a9c6592', '67dbd7949b94df7a8a9c658f', '67dbd7949b94df7a8a9c6590'],
    quantity: [1, 2, 5]
  }))

  const otherProducts = [
    { id: 101, name: 'Sản phẩm A', img: ProductImg },
    { id: 102, name: 'Sản phẩm B', img: ProductImg },
    { id: 103, name: 'Sản phẩm C', img: ProductImg },
    { id: 104, name: 'Sản phẩm D', img: ProductImg },
    { id: 105, name: 'Sản phẩm E', img: ProductImg }
  ]

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const storedData = localStorage.getItem('cart')
        if (!storedData) {
          return
        }

        const parsed = JSON.parse(storedData)
        if (!parsed.ids || !Array.isArray(parsed.ids) || parsed.ids.length === 0) {
          return
        }

        const response = await fetchCartProductList({'ids':parsed.ids})

        const loadedItems = response.data.map(product => {
          const index = parsed.ids.findIndex(id => id === product._id)
          const quantity = parsed.quantity?.[index] ?? 1

          return {
            ...product,
            id: product._id,
            img: product.avatar || ProductImg,
            quantity,
            price: product.avgPrice
          }
        })

        setCartItems(loadedItems)
      } catch (error) {
        alert('Failed to fetch cart products', error)
      }
    }

    fetchCartItems()
  }, [])

  const [formData, setFormData] = useState({
    customer: '',
    address: '',
    phone: '',
    idcode: '',
    payby: 'cash',
    discount: '',
    userId: null
  })

  useEffect(() => {
    const newTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    setTotalPrice(newTotal)
    const cartData = {
      ids: cartItems.map(item => item.id),
      quantity: cartItems.map(item => item.quantity)
    }
    localStorage.setItem('cart', JSON.stringify(cartData))
  }, [cartItems])

  const handleQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    )

    setTotalPrice(
      cartItems.reduce((total, item) => {
        const price = item.price || 0
        const qty = item.quantity || 0
        return total + price * qty
      }, 0)
    )
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target

    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10)
      setFormData((prevData) => ({
        ...prevData,
        [name]: numericValue
      }))
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }))
    }
  }

  const handleRemoveItem = (idToRemove) => {
    const updatedItems = cartItems.filter(item => item.id !== idToRemove)
    setCartItems(updatedItems)

    const cartData = JSON.parse(localStorage.getItem('cart') || '{}')
    const index = cartData.ids?.findIndex(id => id === idToRemove)
    if (index > -1) {
      cartData.ids.splice(index, 1)
      cartData.quantity.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(cartData))
    }

    const newTotal = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0)
    setTotalPrice(newTotal)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const orderData = {
      products: cartItems.map((item) => ({
        id: item.id.toString(),
        quantity: item.quantity
      })),
      userId: formData.userId,
      identityNumber: formData.idcode,
      address: formData.address,
      phone: formData.phone,
      name: formData.customer,
      paymentMethod: formData.payby,
      totalPrice: totalPrice
    }
    try {
      console.log(orderData)
      const res = await createOrder(orderData)
      if (res?.data?.success) {
        setCartItems([])
        alert('Đặt hàng thành công!')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Shopping Cart</h2>

      <div className="overflow-x-auto">
        <div className="w-full inline-block align-middle">
          <div className="overflow-hidden shadow-lg border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="px-8 py-4 text-left text-lg font-medium text-gray-900">Item</th>
                  <th className="px-8 py-4 text-left text-lg font-medium text-gray-900">Price</th>
                  <th className="px-8 py-4 text-left text-lg font-medium text-gray-900">Quantity</th>
                  <th className="px-8 py-4 text-left text-lg font-medium text-gray-900">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b-2 border-black">
                    <td className="px-8 py-6 whitespace-nowrap text-base font-medium text-gray-900">
                      <div className="flex items-center">
                        <img
                          src={item.img}
                          alt="Product"
                          className="w-24 h-28 object-cover border rounded-md"
                        />
                        <span className="ml-6 text-lg">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-xl font-medium text-gray-900">
                      {item.avgPrice?.toLocaleString()} VNĐ
                    </td>
                    <td className="px-8 py-6 text-base font-medium text-gray-900">
                      <div className="flex border rounded-2xl items-center border-black">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="px-6 py-2 text-lg"
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                          className="w-16 text-center border-t border-b text-xl font-semibold"
                        />
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="py-2 text-lg px-6"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-xl font-medium text-gray-900">
                      {`${(item.price*item.quantity)?.toLocaleString()} VNĐ`}
                    </td>
                    <td>
                      <button onClick={() => handleRemoveItem(item.id)} className="w-12 h-12">
                        <img
                          src={close_icon}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8 p-6 border-t">
        <span className="text-2xl font-semibold">Tổng cộng:</span>
        <span className="text-2xl font-semibold">{totalPrice?.toLocaleString()} VNĐ</span>
      </div>

      <div className="flex justify-end mt-10">
        <form onSubmit={handleSubmit} className="w-full max-w-xl border rounded-xl p-6 shadow-md space-y-6">

          <h3 className="text-2xl font-bold mb-4">Thông tin thanh toán</h3>

          <div>
            <label className="block text-lg font-medium mb-1">Họ tên khách hàng</label>
            <input
              type="text"
              name="customer"
              value={formData.customer}
              onChange={handleInputChange}
              placeholder="Nhập họ tên"
              className="border px-4 py-2 rounded-md w-full"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-1">Số điện thoại</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Nhập số điện thoại"
              className="border px-4 py-2 rounded-md w-full"
              required
              inputMode="numeric"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-1">Địa chỉ</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Nhập địa chỉ"
              className="border px-4 py-2 rounded-md w-full"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-1">Mã số định danh / CCCD</label>
            <input
              type="text"
              name="idcode"
              value={formData.idcode}
              onChange={handleInputChange}
              placeholder="Nhập CCCD hoặc mã số định danh"
              className="border px-4 py-2 rounded-md w-full"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-1">Mã giảm giá (nếu có)</label>
            <input
              type="text"
              name="discount"
              value={formData.discount}
              onChange={handleInputChange}
              placeholder="Nhập mã giảm giá"
              className="border px-4 py-2 rounded-md w-full"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Hình thức thanh toán</label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payby"
                  value="cash"
                  checked={formData.payby === 'cash'}
                  onChange={handleInputChange}
                />
              Tiền mặt
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payby"
                  value="transfer"
                  checked={formData.payby === 'transfer'}
                  onChange={handleInputChange}
                />
              Chuyển khoản
              </label>
            </div>
          </div>

          <div className="text-right text-xl font-semibold">
          Tạm tính: {totalPrice?.toLocaleString()} VNĐ
          </div>

          <div className="text-center mt-4">
            <button
              type="submit"
              className="px-8 py-3 w-3/4 bg-black text-white text-lg rounded-full hover:bg-gray-500"
            >
            Confirm
            </button>
          </div>
        </form>
      </div>

      <div className="mt-16 px-6">
        <h3 className="text-2xl font-bold mb-4">Other Products</h3>
        <div className="overflow-hidden relative w-full">
          <div className="flex animate-marquee space-x-8 w-max">
            {otherProducts.map((product) => (
              <div key={product.id} className="min-w-[200px]">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-48 h-48 object-cover rounded-xl shadow-md"
                />
                <p className="text-center mt-2 font-medium">{product.name}</p>
              </div>
            ))}

            {otherProducts.map((product) => (
              <div key={`${product.id}-clone`} className="min-w-[200px]">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-48 h-48 object-cover rounded-xl shadow-md"
                />
                <p className="text-center mt-2 font-medium">{product.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartPage
