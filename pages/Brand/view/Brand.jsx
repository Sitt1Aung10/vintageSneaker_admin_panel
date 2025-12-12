import React from 'react'

const Brand = () => {
  return (
    <>
      <div className="brand">
        <div className="flex items-center gap-2 bg-white p-4 rounded-md shadow w-100">
          <input
            type="search"
            placeholder="Brand Name"
            className="border-2 border-gray-300 p-2 rounded-md lg:w-70 md:w-50 sm:w-30 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button>
            Add Brand
          </button>
        </div>
        <div className="brand_container mt-4 gap-y-5">
          {/* brand list / content goes here */}
          <div className='brand_card lg:w-50 lg:h-50 p-5 box-border flex flex-col justify-center gap-2'>
            <img src='\public\footer-logo.png' />
            <p>Brand Name</p>
            <div className='flex gap-5'>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
           <div className='brand_card lg:w-50 lg:h-50 p-5 box-border flex flex-col justify-center gap-2'>
            <img src='\public\footer-logo.png' />
            <p>Brand Name</p>
            <div className='flex gap-5'>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
           <div className='brand_card lg:w-50 lg:h-50 p-5 box-border flex flex-col justify-center gap-2'>
            <img src='\public\footer-logo.png' />
            <p>Brand Name</p>
            <div className='flex gap-5'>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
           <div className='brand_card lg:w-50 lg:h-50 p-5 box-border flex flex-col justify-center gap-2'>
            <img src='\public\footer-logo.png' />
            <p>Brand Name</p>
            <div className='flex gap-5'>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
           <div className='brand_card lg:w-50 lg:h-50 p-5 box-border flex flex-col justify-center gap-2'>
            <img src='\public\footer-logo.png' />
            <p>Brand Name</p>
            <div className='flex gap-5'>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
           <div className='brand_card lg:w-50 lg:h-50 p-5 box-border flex flex-col justify-center gap-2'>
            <img src='\public\footer-logo.png' />
            <p>Brand Name</p>
            <div className='flex gap-5'>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Brand