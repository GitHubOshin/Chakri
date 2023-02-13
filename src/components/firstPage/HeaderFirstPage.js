function HeaderFirstPage() {
  const nav = [
    {
      section: 'Category',
      link: '#category'
    },
    {
      section: 'Job',
      link: '#job'
    },
    {
      section: 'How it works',
      link: '#how-it-works'
    },
    {
      section: 'Testimonial',
      link: '#testimonial'
    }
  ]

  return (
    <header className="font-dmSans w-full flex items-center  justify-between  screen750:w-[750px] screen750:px-[103px] screen1280:px-0 screen1280:py-[20.9px]  mobile:pt-[20px]  laptop:py-[28px] laptop:w-[1420px] screen1280:w-[1220px]  mobile:px-[24px]">
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
    </header>
  )
}

export default HeaderFirstPage
