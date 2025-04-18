/* eslint-disable no-console */
import { useState } from 'react'
import productImg from '~/assets/productcard.png'

const ProductForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    productName: '',
    productInfo: '',
    productType: '',
    origin: '',
    producer: '',
    price: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form data submitted:', formData)
    alert('Sản phẩm đã được thêm!')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[1200px] h-[800px] rounded-2xl shadow-lg flex p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          ×
        </button>

        <div className="w-1/2 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center">
            <div className="flex gap-4 items-center p-4 rounded">
              <div className="flex flex-col gap-4">
                {[...Array(3)].map((_, i) => (
                  <img
                    key={i}
                    src={productImg}
                    alt={`thumb-${i}`}
                    className="w-20 h-28 object-cover border rounded"
                  />
                ))}
              </div>

              <div className="relative">
                <img
                  src={productImg}
                  alt="main"
                  className="w-64 h-80 object-cover rounded"
                />
                <button className="absolute bottom-2 right-2 text-xl bg-white rounded-full border w-6 h-6 flex items-center justify-center shadow-sm">
                  +
                </button>
              </div>
            </div>
          </div>
          <input
            type="number"
            name="price"
            placeholder="Mức giá"
            className="border px-4 py-2 w-[120px] text-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <form onSubmit={handleSubmit} className="pt-10 w-1/2 pl-4 flex flex-col justify-between">
          <input
            type="text"
            name="productName"
            placeholder="Tên sản phẩm"
            className="border px-4 py-2 mb-6"
            required
            value={formData.productName}
            onChange={handleChange}
          />

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="w-1/3">Thông tin sản phẩm:</label>
              <input
                type="text"
                name="productInfo"
                className="border px-2 py-1 flex-1"
                required
                value={formData.productInfo}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="w-1/3">Loại:</label>
              <input
                type="text"
                name="productType"
                className="border px-2 py-1 flex-1"
                required
                value={formData.productType}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="w-1/3">Xuất xứ:</label>
              <input
                type="text"
                name="origin"
                className="border px-2 py-1 flex-1"
                required
                value={formData.origin}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between items-center">
              <label className="w-1/3">Nghệ nhân:</label>
              <input
                type="text"
                name="producer"
                className="border px-2 py-1 flex-1"
                required
                value={formData.producer}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-black text-white py-3 rounded-full mt-6 hover:bg-gray-800"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProductForm