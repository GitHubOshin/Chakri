import { BrowserRouter as Link } from 'react-router-dom'

function HeaderFirstPage() {
  const nav = [
    {
      section: 'Category',
      link: '/src/pages/Categories.js'
    },
    {
      section: 'Job',
      link: '/src/pages/JobSeeker.js'
    },
    {
      section: 'How it works',
      link: '/src/pages/Services.js'
    },
    {
      section: 'Testimonial',
      link: '/src/pages/Testimonial.js'
    }
  ]

  return (
    <div className="font-dmSans w-full flex items-center  justify-between  screen750:w-[750px] screen1280:py-[20.9px]  mobile:pt-[20px] laptop:py-[28px] laptop:w-[1420px] screen1280:w-[1070px]  mobile:px-[24px]">
      <img
        alt="Chakri Logo"
        src="images/logos/chakri-logo.svg"
        className="mobile:w-[77.3px] screen1280:w-[90px] screen1280:h-[50px] screen1280:mr-[116px] laptop:mr-[163px] laptop:w-[121px] laptop:h-full"
      />
      <nav className="screen1280:flex screen1280:gap-10 laptop:justify-between   laptop:w-[478px] laptop:h-[23px] text-center mobile:hidden">
        {nav.map((section) => {
          return (
            <Link key={section.section} to={section.link}>
              <button className="text-darkBlue cursor-pointer screen1280:text-[13px] screen1280:font-medium tracking-[0.02em] laptop:text-[18px] laptop:leading-[23.44px] laptop:font-normal">
                {section.section}
              </button>
            </Link>
          )
        })}
      </nav>
      <div className="w-fit screen1280:flex screen1280:gap-[9px] laptop:gap-[10px]  mobile:hidden">
        <button className="text-darkBlue screen1280:w-[104px] screen1280:h-[46px] screen1280:text-[12px] screen1280:font-medium laptop:w-[139px] laptop:h-[64px] laptop:font-medium laptop:text-[16px]">
          Register
        </button>
        <button className="bg-orange text-white screen1280:w-[104px] screen1280:h-[46px] screen1280:rounded-[7px] screen1280:text-[12px] screen1280:font-medium laptop:w-[139px] laptop:h-[64px] laptop:rounded-[10px] laptop:font-medium laptop:text-[16px]">
          Sign In
        </button>
      </div>
      <button className="screen1280:hidden w-fit">
        <img alt="Menu" src="images/icons/menu.svg" className="" />
      </button>
    </div>
  )
}

export default HeaderFirstPage

