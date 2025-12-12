import React from 'react'

const header = () => {
  return (
    <>
    <header className='w-full h-20 fixed top-0 left-0 px-10 py-5' 
    style={{
      backgroundColor : '#878571' ,
      zIndex : '-1',
      display : 'flex',
      justifyContent : 'right',
      alignItems : 'center'
    }}>
      <h1 className='text-white uppercase sm:text-2xl md:text-3xl lg:text-4xl'>Vintage Sneaker</h1>
    </header>
    </>
  )
}

export default header