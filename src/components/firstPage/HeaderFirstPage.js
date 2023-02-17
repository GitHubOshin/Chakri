import nav from '../../data/nav'
import { Register, SignIn } from '../Buttons'

function HeaderFirstPage(props) {
  const { openMenu } = props

  return (
    <header className="absolute font-dmSans w-full max-w-[1440px] flex items-center  justify-between mobile:px-[24px] screen750:px-[110px]  screen1280:py-[20.9px]  mobile:pt-[20px]  laptop:py-[28px] laptop:px-0">
      <img
        alt="Chakri Logo"
        src="images/logos/chakri-logo.svg"
        className="mobile:w-[77.3px] screen1280:w-[90px] screen1280:h-[50px] screen1280:mr-[116px] laptop:mr-[163px] laptop:w-[121px] laptop:h-full"
      />
      <nav className="screen1280:flex screen1280:gap-10 laptop:justify-between   laptop:w-[478px] laptop:h-[23px] text-center mobile:hidden">
        {nav.map((section) => {
          return (
            <a key={section.section} href={section.link}>
              <div className="text-darkBlue cursor-pointer screen1280:text-[13px] screen1280:font-medium tracking-[0.02em] laptop:text-[18px] laptop:leading-[23.44px] laptop:font-normal">
                {section.section}
              </div>
            </a>
          )
        })}
      </nav>
      <div className="w-fit screen1280:flex screen1280:gap-[9px] laptop:gap-[10px]  mobile:hidden">
        <Register />
        <SignIn />
      </div>
      <button className="screen1280:hidden w-fit" onClick={openMenu}>
        <img alt="Menu" src="images/icons/menu.svg" />
      </button>
    </header>
  )
}

export default HeaderFirstPage
