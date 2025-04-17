import React, { useState } from 'react';
import ProductImg from '~/assets/productcard.png';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, img: ProductImg, quantity: 1, price: 100000 },
    { id: 2, img: ProductImg, quantity: 2, price: 150000 },
    { id: 3, img: ProductImg, quantity: 2, price: 125000 }
  ]);

  const otherProducts = [
    { id: 101, name: 'Sản phẩm A', img: ProductImg },
    { id: 102, name: 'Sản phẩm B', img: ProductImg },
    { id: 103, name: 'Sản phẩm C', img: ProductImg },
    { id: 104, name: 'Sản phẩm D', img: ProductImg },
    { id: 105, name: 'Sản phẩm E', img: ProductImg }
  ];

  const [formData, setFormData] = useState({
    customer: '',
    address: '',
    phone: '',
    idcode: '',
    payby: 'cash',
    discount: ''
  });

  const handleQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prevData) => ({
        ...prevData,
        [name]: numericValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData, 'Total:', totalPrice);
  };

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
                        <span className="ml-6 text-lg">Sản phẩm {item.id}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-xl font-medium text-gray-900">
                      {item.price.toLocaleString()} VNĐ
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
                      {(item.price * item.quantity).toLocaleString()} VNĐ
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
        <span className="text-2xl font-semibold">{totalPrice.toLocaleString()} VNĐ</span>
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
          Tạm tính: {totalPrice.toLocaleString()} VNĐ
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
  );
};

export default CartPage;
