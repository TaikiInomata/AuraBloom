import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import JewelryPage from './JewelryPage'

function ProductDetail() {
  return (
    <div>
      <div>
        <Tabs defaultValue="jewelry" className='w-full'>
          <TabsList className='grid grid-cols-7 bg-white'>
            <TabsTrigger value="jewelry" className='relative data-[state=active]:bg-transparent data-[state=active]:shadow-none after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-black after:h-0.5 after:w-0  hover:after:w-[150px] data-[state=active]:after:w-[150px] hover:after:transition-all hover:after:ease-in-out hover:after:duration-400'>Trang sức</TabsTrigger>
            <TabsTrigger value="clothes" className='relative data-[state=active]:bg-transparent data-[state=active]:shadow-none after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-black after:h-0.5 after:w-0  hover:after:w-[150px] data-[state=active]:after:w-[150px] hover:after:transition-all hover:after:ease-in-out hover:after:duration-400'>Quần áo</TabsTrigger>
            <TabsTrigger value="necklace" className='relative data-[state=active]:bg-transparent data-[state=active]:shadow-none after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-black after:h-0.5 after:w-0  hover:after:w-[150px] data-[state=active]:after:w-[150px] hover:after:transition-all hover:after:ease-in-out hover:after:duration-400'>Dây chuyền</TabsTrigger>
            <TabsTrigger value="watches" className='relative data-[state=active]:bg-transparent data-[state=active]:shadow-none after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-black after:h-0.5 after:w-0  hover:after:w-[150px] data-[state=active]:after:w-[150px] hover:after:transition-all hover:after:ease-in-out hover:after:duration-400'>Đồng hồ</TabsTrigger>
            <TabsTrigger value="shoes" className='relative data-[state=active]:bg-transparent data-[state=active]:shadow-none after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-black after:h-0.5 after:w-0  hover:after:w-[150px] data-[state=active]:after:w-[150px] hover:after:transition-all hover:after:ease-in-out hover:after:duration-400'>Giày dép</TabsTrigger>
            <TabsTrigger value="accessories" className='relative data-[state=active]:bg-transparent data-[state=active]:shadow-none after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-black after:h-0.5 after:w-0  hover:after:w-[150px] data-[state=active]:after:w-[150px] hover:after:transition-all hover:after:ease-in-out hover:after:duration-400'>Phụ kiện</TabsTrigger>
            <TabsTrigger value="gifts" className='relative data-[state=active]:bg-transparent data-[state=active]:shadow-none after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-black after:h-0.5 after:w-0  hover:after:w-[150px] data-[state=active]:after:w-[150px] hover:after:transition-all hover:after:ease-in-out hover:after:duration-400'>Quà tặng</TabsTrigger>
          </TabsList>
          <TabsContent value="jewelry"><JewelryPage/></TabsContent>
          <TabsContent value="clothes">Quần áo</TabsContent>
          <TabsContent value="necklace">Dây chuyền</TabsContent>
          <TabsContent value="watches">Đồng hồ</TabsContent>
          <TabsContent value="shoes">Giày dép</TabsContent>
          <TabsContent value="accessories">Phụ kiện</TabsContent>
          <TabsContent value="gifts">Quà tặng</TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default ProductDetail