import Image from 'next/image'
import logo from '@/assets/logo.png'
import footerIcons from '@/assets/footer-icon.png'

function Footer() {
  return (
    <footer className="border-t-gray-500/11 border-t-[3px]">
      <div className="container mx-auto flex items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <div className="w-14 h-14 border border-gray-800 rounded-full flex items-center justify-center">
            <Image src={logo} width={25} height={25} alt="" />
          </div>

          <div className="flex flex-col items-center text-sm">
            <span>Giới thiệu về PNJ</span>
            <div className="w-[150px] h-px border-t border-t-gray-900"></div>
            <span>Có tiếng tăm và nhiều chứng nhận</span>
          </div>
        </div>

        <div className="flex flex-col items-center text-sm">
          <span>Đơn vị hợp tác</span>
          <div className="w-[150px] h-px border-t border-t-gray-900"></div>
          <span>Sinh viên Bách Khoa</span>
        </div>

        <div className="flex flex-col items-center text-sm">
          <span>Thông tin liên lạc</span>
          <div className="w-[150px] h-px border-t border-t-gray-900"></div>
          <Image src={footerIcons} alt="" width={100} height={20} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
