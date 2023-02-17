import nav from '../data/nav'
import { Register, SignIn } from './Buttons'

function Sidebar(props) {
  const { closeMenu } = props
  return (
    <section className="screen1280:hidden z-50 fixed w-full h-full bg-[rgba(0,0,0,0.5)] flex flex-col items-end">
      <div className="bg-slate-50 w-[250px] h-full p-5">
        <div className="">
          <header className="flex justify-between">
            <img
              alt="Chakri logo"
              src="images/logos/chakri-logo.svg"
              className="w-[90px] h-[50px]"
            />
            <button className="w-5 h-5" onClick={closeMenu}>
              <img alt="Close button" src="images/icons/x-mark.svg" />
            </button>
          </header>
          <nav className="flex flex-col gap-y-2 my-6">
            {nav.map((section, index) => {
              return (
                <a
                  key={index}
                  href={section.link}
                  className="text-darkBlue text-lg font-dmSans font-medium "
                >
                  {section.section}
                </a>
              )
            })}
          </nav>
          <div className="font-dmSans flex flex-col items-start gap-y-2">
            <Register />
            <SignIn />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sidebar
