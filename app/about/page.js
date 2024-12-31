import { getServerSession } from 'next-auth/next'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'

const page = async () => {
  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <div>
      About
    </div>
  )
}

export default page
