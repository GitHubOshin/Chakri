import HeaderFirstPage from './firstPage/HeaderFirstPage'
import Sidebar from './Sidebar'
import { useState } from 'react'

function Nav() {
  const [menuButton, setMenuButton] = useState(false)
  console.log(menuButton)
  return (
    <div className="flex justify-center">
      <HeaderFirstPage openMenu={() => setMenuButton(true)} />
      {menuButton === true ? (
        <Sidebar closeMenu={() => setMenuButton(false)} />
      ) : (
        false
      )}
    </div>
  )
}

export default Nav
