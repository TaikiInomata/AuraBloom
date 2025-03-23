import React from 'react'
import ClientFooter from '~/components/Footer/ClientFooter'
import { ACCOUNT_ROLE } from '~/utils/constants'

function Footer({ type }) {
  return (
    <>
      {type === ACCOUNT_ROLE.CLIENT && <ClientFooter />}
    </>
  )
}

export default Footer