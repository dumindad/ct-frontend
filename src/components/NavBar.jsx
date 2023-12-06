import React from 'react'

const NavBar = () => {
  return (
    <nav className={`flex justify-between items-center w-full h-20 px-4`}>

            <div>
                <span className='text-2xl font-[Poppins] cursor-pointer ml-10'>

                    Logo

                </span>

            </div>

         
            <div className='w-full flex'>
            {/* <MobilMenu
                    showCatMenu={showCatMenu}
                    setShowCatMenu={setShowCatMenu}
                    setMobileMenu={setMobileMenu}
                /> */}
                <span> History</span>
                <span> Team</span>
            </div>

        </nav>
  )
}

export default NavBar