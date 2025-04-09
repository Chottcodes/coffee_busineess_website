import Image from 'next/image'
import React from 'react'

const HeaderComponent = () => {
  return (
    <div className='h-full w-[15%] flex justify-center items-center'>
        <Image className='w-full h-full object-cover ' src={"/assets/images/Icon.png"} width={200} height={200} alt="Website logo"/>
    </div>
  )
}

export default HeaderComponent