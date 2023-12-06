import React from 'react'

const NavBar = () => {
  return (
    <nav className={`flex justify-between items-center w-full h-20 px-4`}>

            <div>
                <span className='text-2xl font-[Poppins] cursor-pointer ml-10'>

                    Logo

                </span>

            </div>

         
            <div className='w-full'>
            {/* <MobilMenu
                    showCatMenu={showCatMenu}
                    setShowCatMenu={setShowCatMenu}
                    setMobileMenu={setMobileMenu}
                /> */}
            </div>

        </nav>
  )
}

export default NavBar