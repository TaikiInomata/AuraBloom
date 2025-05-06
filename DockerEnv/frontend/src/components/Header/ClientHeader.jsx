import logo from '~/assets/logo.png'
import { useEffect, useState } from 'react'
import { FiHome } from 'react-icons/fi'
import { LuLogIn } from 'react-icons/lu'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '../ui/sheet'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '../ui/alert-dialog'
import { addToCartAPI, fetchCurrentCartAPI, logoutUserAPI } from '~/apis'
import { useAuth } from '~/contexts/AuthContext'
import { useCart } from '~/contexts/CartContext'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '~/components/ui/tooltip'
import { Badge } from '~/components/ui/badge'

function ClientHeader() {
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()

  const { currentUser, logout } = useAuth()
  const { currentCart, setCart } = useCart()

  const [open, setOpen] = useState(false)

  const handleCartClick = () => {
    navigate('/cart')
  }

  const handleLogout = () => {
    logoutUserAPI().then(() => {
      logout()
    })
  }

  useEffect(() => {
    if (currentUser) {
      if (currentCart && !currentCart.buyerId) {
        Promise.all(
          currentCart?.itemList.map((item) => addToCartAPI(item))
        ).then(() => fetchCurrentCartAPI().then((res) => setCart(res)))
      } else {
        fetchCurrentCartAPI().then((res) => setCart(res))
      }
    }
  }, [currentUser])

  return (
    <div className='border-b-[2px] border-b-gray-300 w-full h-fit'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between py-2'>
          <img
            src={logo}
            alt=''
            width={25}
            height={40}
            className='cursor-pointer'
            onClick={() => navigate('/')}
          />

          <input
            type='text'
            placeholder='Tìm kiếm...'
            className='rounded-lg bg-white py-2 px-4 w-[50%] focus:outline-none border border-gray-900 focus:border-[2px]'
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />

          <div className='flex items-center gap-5'>
            <div
              className='flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-lg p-2 hover:duration-300 hover:ease-in-out transition-all'
              onClick={() => navigate('/')}
            >
              <span>Trang chủ</span>
              <FiHome className='text-xl' />
            </div>

            {currentUser ? (
              <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                  <div className='flex items-center gap-3 cursor-pointer hover:bg-gray-200 p-1.5 rounded-lg hover:duration-300 hover:ease-in-out transition-all'>
                    <Avatar>
                      <AvatarImage src={currentUser?.avatar} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <div>Xin chào,</div>
                      <div className='font-semibold'>{currentUser?.name}</div>
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-56'>
                  <DropdownMenuItem>Tài khoản của tôi</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <DropdownMenuItem
                        className='text-destructive hover:!bg-destructive/10 hover:!text-destructive cursor-pointer'
                        onSelect={(event) => {
                          event.preventDefault()
                        }}
                      >
                        Đăng xuất
                      </DropdownMenuItem>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Cảnh bảo!</AlertDialogTitle>
                        <AlertDialogDescription>
                          Bạn có chắc chắn muốn đăng xuất?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setOpen(false)}>
                          Hủy
                        </AlertDialogCancel>
                        <AlertDialogAction onClick={handleLogout}>
                          Đăng xuất
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div
                className='flex items-center gap-2 cursor-pointer hover:bg-orange-200 rounded-lg p-2 hover:duration-300 hover:ease-in-out transition-all'
                onClick={() => navigate('/login')}
              >
                <span>Đăng nhập</span>
                <LuLogIn className='text-xl' />
              </div>
            )}

            <div className='h-10 border-r border-r-gray-500'></div>

            <Sheet>
              <SheetTrigger asChild>
                <div className='flex items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-lg p-2 hover:duration-300 hover:ease-in-out transition-all relative'>
                  <MdOutlineShoppingCart size={30} className='cursor-pointer' />
                  <div className='absolute -top-0.5 -right-0.5 bg-orange-400 text-white rounded-full w-4 h-4 text-xs text-center'>
                    {currentCart?.itemList?.length || 0}
                  </div>
                </div>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Giỏ hàng</SheetTitle>
                  <SheetDescription>Xem tóm tắt giỏ hàng.</SheetDescription>
                </SheetHeader>
                <div className='py-4 max-h-[89%] overflow-auto'>
                  {currentCart?.fullProducts?.map((product, index) => (
                    <div key={index} className='flex items-center gap-2 my-6'>
                      <img
                        src={product?.avatar}
                        alt=''
                        width={40}
                        height={40}
                      />
                      <div className='flex flex-col gap-1'>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className='text-sm line-clamp-1 text-mainColor2-800 leading-none'>
                                {product?.name}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{product?.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <p className='line-clamp-1 text-xs text-gray-400 mb-0.5'>
                          Loại: {product?.type?.properties[0].value} -{' '}
                          {product?.type?.properties[1].value}
                        </p>
                        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-4'>
                          <Badge className='bg-slate-800/90'>
                            {currentCart.itemList[index].quantity} sản phẩm
                          </Badge>
                          <span className='text-[0.8rem] text-muted-foreground'>
                            x {product?.type?.price.toLocaleString('vi-VN')}
                            <sup>đ</sup>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button onClick={handleCartClick}>Xem tất cả</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientHeader
