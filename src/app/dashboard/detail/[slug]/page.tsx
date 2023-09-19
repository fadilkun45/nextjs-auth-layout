import React from 'react'

const Page = ({params}: {params: {slug: string}}) => {
  return (
    <div>Detail Page with Detail Id {params.slug}</div>
  )
}

export default Page