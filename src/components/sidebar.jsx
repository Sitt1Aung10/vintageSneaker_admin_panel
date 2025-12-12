import React from 'react'
import { Link , useLocation} from 'react-router-dom'
const sidebar = () => {
    const sidebarItems = [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Brands', path: '/brand' },
        { name: 'Products', path: '/products' },
        { name: 'Orders', path: '/orders' },
        { name: 'Users', path: '/users' },
    ]
  return (
    <>
    <nav style={{backgroundColor : '#545233'}} className='flex flex-col fixed top-0 left-0 h-full md:w-35 lg:w-48  p-4 space-y-4'>
        {sidebarItems.map((item, idx) => {
            return (
                <Link
                    key={idx}
                    to={item.path}
                    className='py-8'
                    style={{ color: 'white', fontSize: 'clamp(0.5rem, 2vw, 1.125rem)' }}
                >
                    {item.name}
                </Link>
            )
        })}
    </nav>
    </>
  )
}

export default sidebar