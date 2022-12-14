import { TextHeader } from '../components/Texts'
import browseJobsByCategory from '../data/BrowseJobsByCategory'

function Categories() {
  return (
    <div className="laptop:mt-[60px] w-[full] mobile:h-[2501.8px] screen750:h-[1350px] screen1280:h-[817px] flex flex-col items-center mobile:gap-y-[30px] screen1280:gap-y-[70px]">
      <div className="flex text-center justify-center items-center w-full">
        <TextHeader>
          Browse Jobs by
          <br />
          Category
          <div className="absolute z-[-1] mobile:top-[21.8px] mobile:right-[50px] laptop:t laptop:right-[72px] bg-apricot laptop:w-[76.13px] mobile:w-[61.21px] laptop:h-[20px] mobile:h-[12.74px]"></div>
        </TextHeader>
      </div>
      <div className="screen1280:w-[1280px] screen1280:px-[30px] laptop:w-[1420px] laptop:p-0 grid grid-cols-1 gap-6 screen1280:gap-[30px] screen750:grid-cols-2 screen1280:grid-cols-4">
        {browseJobsByCategory.map((item) => {
          return (
            <div className="group bg-white hover:bg-[#F7F8F9] h-[268px] rounded-lg border border-[#EDEDED] p-[30px] flex justify-between">
              <div className="flex flex-col justify-between">
                <div className="bg-bgCircleOrange group-hover:bg-orange group-hover:shadow-[0px_12px_16px_rgba(0,0,0,0.08)] w-[80px] h-[80px] rounded-full flex items-center justify-center">
                  <img
                    alt={item.alternative}
                    src={item.orangeIcon}
                    className="group-hover:hidden"
                  />
                  <img
                    alt={item.alternative}
                    src={item.whiteIcon}
                    className="hidden group-hover:block"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h1 className="text-[20px] leading-[32px] tracking-[0.2px] text-darkBlue font-semibold ">
                    {item.category}
                  </h1>
                  <span className="text-grey001 font-dmSans text-[16px] font-normal leading-[28px]">
                    {item.jobsOpened} Jobs Opened
                  </span>
                </div>
              </div>
              <div className="w-[60px] flex items-end">
                <button className="w-[60px] h-[60px] flex items-center justify-center">
                  <img
                    alt="Arrow button"
                    src="images/icons/arrow-right-btn.svg"
                  />
                </button>
              </div>
            </div>
          )
        })}
        <div className="relative bg-orange h-[268px] rounded-lg flex items-center justify-center">
          <div className="h-fit flex justify-between items-end">
            <h1 className="text-[24px] text-white font-poppins font-medium leading-[34px] tracking-[0.2px]">
              Explore
              <br />
              30 More
              <br />
              Categories
            </h1>
            <button className="w-[60px] h-[60px] flex items-center justify-center">
              <img
                alt="Arrow Button"
                src="images/icons/arrow-right-white-btn.svg"
              />
            </button>
          </div>
          <img
            alt="Waves"
            src="images/otherImages/twoWaves.svg"
            className="absolute hidden laptop:block "
          />
        </div>
      </div>
    </div>
  )
}

export default Categories
