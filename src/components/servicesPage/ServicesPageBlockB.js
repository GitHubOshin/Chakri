import HowPlatformWorks from '../../data/HowPlatformWorks'
import { TextHeader } from '../Texts'
function ServicesPageBlockB() {
  return (
    <div className="flex flex-col mobile:gap-[24px] max-w-[574px] screen1280:pl-[40px] laptop:pl-0">
      <div className="pl-[24px]">
        <TextHeader>
          Watch How Our
          <br />
          Platform Works!
        </TextHeader>
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
    </div>
  )
}

export default ServicesPageBlockB

