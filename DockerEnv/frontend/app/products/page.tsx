import ProductCard from '@/components/product-card'

export default function ProductsPage() {
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

          <ul className="flex items-center gap-10 my-10">
            <li className="border border-gray-500 rounded-full py-1 px-6">Sweater</li>
            <li className="border border-gray-500 rounded-full py-1 px-6">Hoodie</li>
            <li className="border border-gray-500 rounded-full py-1 px-6">Mangto</li>
            <li className="border border-gray-500 rounded-full py-1 px-6">Jean</li>
          </ul>

          <div className="">
            <ProductCard />
          </div>
        </div>
      </div>

    </div>
  )
}