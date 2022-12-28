import { Links } from '../components/MiniItems'
import { FooterTitle, FooterContent } from '../components/Texts'
import {
  services,
  company,
  jobInfo,
  contact,
  socialMediaIcons
} from '../data/FooterItems'

function LastPage() {
  return (
    <section className="w-full min-h-[752.15px] max-h-[1555.03px] mobile:mt-20 laptop:mt-[160px] flex items-center justify-center screen1280:px-[120px] mobile:px-[10px]">
      <div className="w-full max-w-[1420px] flex flex-col mobile:max-w-[554px] screen1280:max-w-[1280px] laptop:max-w-[1420px]  mobile:gap-20 laptop:gap-[120px] ">
        <div className="bg-bgSubscribe rounded-[16.84px] mobile:max-w-[554px] screen1280:max-w-full  min-h-[314px] max-h-[350px] laptop:h-[350px] flex items-center mobile:flex-col mobile:justify-center screen1280:justify-between screen1280:flex-row screen1280:px-[200px] mobile:gap-[27.97px] screen1280:gap-0 mobile:px-[35px]">
          <h1 className="text-darkBlue mobile:text-center screen1280:text-left font-poppins font-bold leading-[60px] tracking-[0.2px] mobile:text-[30px] laptop:text-[40px] max-w-[541.07px]">
            <div className="relative z-10 inline">
              Subscribe
              <div className="absolute z-[-1] bottom-2 bg-apricot w-full mobile:h-[12.74px] laptop:h-[20px]"></div>
            </div>
            &nbsp; Now for Special Features!
          </h1>
          <button className="bg-orange w-[190px] h-[70px] rounded-[10px]">
            <span className="text-white">Subscribe Now</span>
          </button>
        </div>
        <footer className="  min-h-[281.72px] max-h-[1166.51px] flex mobile:flex-col screen1280:flex-row justify-between mobile:mx-3 screen1280:mx-0">
          <div className="flex flex-col">
            <img
              alt="Chakri logo"
              src="images/logos/chakri-logo.svg"
              className="mobile:w-[97px] mobile:h-[50.15px] mb-[15px]"
            />
            <span className="text-grey001 text-[16px] leading-[32px] mobile:mb-[30px] screen1280:mb-[42px]">
              Professionally scale cross functional
              <br />
              human capital and extensive technology.
            </span>
            <div className="mobile:hidden screen1280:block">
              <div className="mb-4 flex max-w-[185px] justify-between">
                {socialMediaIcons.map((icon) => {
                  return (
                    <div className="w-[40px] h-[40px] rounded-full bg-grey006 flex items-center justify-center">
                      <img alt={icon.iconName} src={icon.icon} />
                    </div>
                  )
                })}
              </div>
              <span className="text-darkBlue text-base font-dmSans leading-[32px]">
                Copyright©chakri.All right reserved
              </span>
            </div>
          </div>
          <div className="flex mobile:flex-col screen1280:flex-row mobile:gap-[23.67px] screen1280:gap-[87.75px]">
            <Links array={services} title="Services" />
            <Links array={company} title="Company" />
            <Links array={jobInfo} title="Job Info" />
          </div>
          <div className="flex flex-col gap-[26px] mobile:mt-[26.91px] screen1280:mt-0">
            <FooterTitle title="Contact" />
            <ul className="flex flex-col gap-[25px]">
              {contact.map((item) => {
                return (
                  <li>
                    <span className="text-darkBlue font-dmSans">
                      {item.type} :{' '}
                    </span>
                    <FooterContent content={item.contact} />
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="mobile:block screen1280:hidden">
            <div className="mt-[39px] mb-4 flex max-w-[185px] justify-between">
              {socialMediaIcons.map((icon) => {
                return (
                  <div className="w-[40px] h-[40px] rounded-full bg-grey006 flex items-center justify-center">
                    <img alt={icon.iconName} src={icon.icon} />
                  </div>
                )
              })}
            </div>
            <span className="text-darkBlue text-base font-dmSans leading-[32px]">
              Copyright©chakri.All right reserved
            </span>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default LastPage
