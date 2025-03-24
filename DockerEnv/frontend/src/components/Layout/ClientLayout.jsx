import { Outlet } from 'react-router-dom'
import Footer from '~/components/Footer/Footer'
import Header from '~/components/Header/Header'
import { ACCOUNT_ROLE } from '~/utils/constants'

function ClientLayout() {
  return (
    <div className='font-nunito'>
      <Header type={ACCOUNT_ROLE.CLIENT} />
      <Outlet />
      <Footer type={ACCOUNT_ROLE.CLIENT} />
    </div>
  )
}

export default ClientLayout