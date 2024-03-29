import HowPlatformWorks from '../../data/HowPlatformWorks'
import { TextHeader } from '../Texts'
function ServicesPageBlockB() {
  return (
    <section
      id="how-it-works"
      className="flex flex-col mobile:gap-[24px] max-w-[574px] screen1280:pl-[40px] laptop:pl-0"
    >
      <div className="relative pl-[24px] h-fit">
        <TextHeader>
          Watch How Our
          <br />
          Platform Works!
        </TextHeader>
        <div className="absolute z-10 bg-apricot mobile:left-[166.6px] mobile:top-[57px] laptop:left-[215px] laptop:top-[75px]  mobile:w-[94.16px] mobile:h-[12.74px] laptop:w-[127.99px] laptop:h-[20px]"></div>
      </div>
      <div className=" grid grid-cols-1 gap-y-[24px] mobile:mx-[10px] laptop:mx-0 ">
        {HowPlatformWorks.map((item) => {
          return (
            <div className="bg-white shadow-[0px_30px_80px_rgba(0,0,0,0.07)] screen1280:h-[152.99px] py-[30px] px-[30px] flex gap-x-[16px] rounded-lg">
              <div className="w-[56px] min-w-[56px] h-[56px] bg-white shadow-[2px_10px_25px_rgba(0,0,0,0.1)] rounded-full flex items-center justify-center">
                <img alt={item.alternative} src={item.icon} />
              </div>
              <div className="flex flex-col gap-y-1">
                <h6 className="text-darkBlue font-poppins font-semibold text-[20px]  leading-[32px] tracking-[0.2px]">
                  {item.title}
                </h6>
                <span className="font-dmSans font-normal text-[16px] leading-[26px] text-grey001">
                  {item.detail}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ServicesPageBlockB


