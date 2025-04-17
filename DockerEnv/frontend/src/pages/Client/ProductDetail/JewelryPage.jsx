import React, { useState } from 'react'

const JewelryPage = () => {
  const [selectedColor, setSelectedColor] = useState('beige')
  const [activeTab, setActiveTab] = useState('description')

  const colors = [
    { name: 'beige', code: 'bg-[#e2d1c3]' },
    { name: 'black', code: 'bg-black' },
    { name: 'blue', code: 'bg-blue-900' }
  ]

  const images = Array(4).fill('https://pos.nvncdn.com/2865a9-85186/ps/20240128_hMm4MN1XOD.jpeg')

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
    name: 'Áo giống vậy',
    image: 'https://pos.nvncdn.com/2865a9-85186/ps/20240128_hMm4MN1XOD.jpeg'
  })

  return (
    <div className="bg-[#f8fcff] text-gray-800 font-sans p-6 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-4">
          <img src={images[0]} alt="Main" className="rounded-lg w-full" />
          <div className="grid grid-cols-4 gap-2">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className="rounded-lg"
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-gray-500">Quần áo / sweater</p>
          <h1 className="text-2xl font-semibold">
                Áo sweater mang ấm hơn hẳn khi trong vòng tay của crush
          </h1>
          <p className="text-xl font-semibold text-gray-800">55.000.000</p>

          <div>
            <p className="text-sm mb-1">Color</p>
            <div className="flex gap-3">
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

          <div className="text-sm text-gray-600 leading-relaxed">
            <p>Thông tin sản phẩm: ahjdsjabsdjabsdbakd</p>
            <p>Loại: Vàng</p>
            <p>Xuất xứ: Thụy Điển</p>
            <p>Nghệ nhân: Việt Khiêm</p>
            <p>Đã bán: 55k</p>
          </div>

          <button className="mt-4 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800">
                Thêm vào giỏ hàng
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16">
        <div className="flex justify-between border-b pb-2 mb-4 max-w-md mx-auto">
          {['description', 'reviews', 'policy'].map((tab) => (
            <button
              key={tab}
              className={`text-sm font-medium capitalize ${
                activeTab === tab
                  ? 'border-b-2 border-black'
                  : 'text-gray-400'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'description' && 'Mô tả'}
              {tab === 'reviews' && 'Đánh giá'}
              {tab === 'policy' && 'Chính sách'}
            </button>
          ))}
        </div>

        <div className="text-sm text-gray-600 px-2">
          {activeTab === 'description' && (
            <p>
                  Áo được làm bằng chất liệu len nhập khẩu, siêu mềm và siêu ấm. Form
                  rộng vừa phải, phù hợp mùa đông.
            </p>
          )}
          {activeTab === 'reviews' && (
            <p>Xem phần đánh giá bên dưới 👇</p>
          )}
          {activeTab === 'policy' && (
            <p>Đổi trả trong 7 ngày nếu có lỗi từ nhà sản xuất. Bảo hành 1 năm.</p>
          )}
        </div>
      </div>

      {/* Reviews */}
      <div className="max-w-7xl mx-auto mt-10">
        <h2 className="text-xl font-semibold mb-4">Đánh giá sản phẩm</h2>
        {reviews.map((r, idx) => (
          <div key={idx} className="border-b py-3">
            <p className="font-medium">{r.name}</p>
            <p className="text-yellow-500">
              {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
            </p>
            <p className="text-sm text-gray-500">{r.date}</p>
            <p className="text-sm mt-1">{r.comment}</p>
          </div>
        ))}
      </div>

      {/* Suggestions */}
      <div className="max-w-7xl mx-auto mt-10">
        <h2 className="text-xl font-semibold mb-4">Sản phẩm gợi ý</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {suggested.map((p, idx) => (
            <div key={idx} className="text-center">
              <img src={p.image} alt={p.name} className="rounded-lg mx-auto" />
              <p className="text-sm mt-2">{p.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JewelryPage
