import ClientHeader from '~/components/Header/ClientHeader'
import { ACCOUNT_ROLE } from '~/utils/constants'

function Header({ type }) {
  return (
    <>
      {type === ACCOUNT_ROLE.CLIENT && <ClientHeader />}
    </>
  )
}

export default Header