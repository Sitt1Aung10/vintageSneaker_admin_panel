import React from 'react'
import '../../src/App.css'
const Dashboard = () => {
  return (
    <>
      <div className='dashboard_noti gap-y-15'>
        <div className='md:w-40 lg:w-70'>
          <h2 style={{fontSize : 'clamp(5px , 15px , 25px)'}} className='text-black text-nowrap'>Total Products</h2>
          <br></br>
          <div style={{ backgroundColor: '#878571' }} className='rotated_rec p-2 sm:p-3 md:p-4 lg:p-6 text-black '>
            <p>50</p>
          </div>
        </div>

        <div className='md:w-40 lg:w-70'>
          <h2 style={{fontSize : 'clamp(5px , 15px , 25px)'}} className='text-black text-nowrap'>Total Orders</h2>
          <br></br>
          <div style={{ backgroundColor: '#878571' }} className='rotated_rec p-2 sm:p-3 md:p-4 lg:p-6 text-black'>
            <p>50</p>
          </div>
        </div>

        <div className='md:w-40 lg:w-70'>
          <h2 style={{fontSize : 'clamp(5px , 15px , 25px)'}} className='text-black text-nowrap'>Total Sales</h2>
          <br></br>
          <div style={{ backgroundColor: '#878571' }} className='rotated_rec p-2 sm:p-3 md:p-4 lg:p-6 text-black'>
            <p>50</p>
          </div>
        </div>

        <div className='md:w-40 lg:w-70'>
          <h2 style={{fontSize : 'clamp(5px , 15px , 25px)'}} className='text-black text-nowrap'>Low Stock Items</h2>
          <br></br>
          <div style={{ backgroundColor: '#878571' }} className='rotated_rec p-2 sm:p-3 md:p-4 lg:p-6 text-black'>
            <p>50</p>
          </div>
        </div>

        <div className='md:w-40 lg:w-70'>
          <h2 style={{fontSize : 'clamp(5px , 15px , 25px)'}} className='text-black text-nowrap'>Ongoing Delivery</h2>
          <br></br>
          <div style={{ backgroundColor: '#878571' }} className='rotated_rec p-2 sm:p-3 md:p-4 lg:p-6 text-black '>
            <p>50</p>
          </div>
        </div>

        <div className='md:w-40 lg:w-70'>
          <h2 style={{fontSize : 'clamp(5px , 15px , 45px)'}} className='text-black text-nowrap'>Delivered Products</h2>
          <br></br>
          <div style={{ backgroundColor: '#878571' }} className='rotated_rec p-2 sm:p-3 md:p-4 lg:p-6 text-black'>
            <p>50</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Dashboard