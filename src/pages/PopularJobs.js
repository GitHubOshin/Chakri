import { TextHeader } from '../components/Texts'
import jobDetails from '../data/JobDetails'

function PopularJobs() {
  const flexCenterClasses = 'flex justify-center items-center'
  const flexContentBetween = 'flex justify-between items-center'
  return (
    <div className="relative z-10 min-w-[375px] w-full flex flex-col items-center   mobile:h-[622px] mobile:px-[10px] laptop:h-[866px] screen1280:pt-[140px] screen1280:px-[120px] mobile:pt-[80px]">
      <img
        alt="waves"
        src="images/otherImages/waves.svg"
        className="absolute z-[-1] mobile:hidden laptop:block"
      />
      <div className="w-full mobile:max-w-[554px] max-w-[1419px] laptop:min-w-[1419px] screen1280:max-w-[1280px] mobile:h-[458px] laptop:h-[576px] flex justify-between flex-col items-center">
        <div className="w-full mobile:mx-[14px] flex mobile:justify-between mobile:items-end screen1280:items-center">
          <TextHeader>
            Some Popular
            <br />
            Jobs for You!
            <div className="absolute z-[-1] laptop:top-[25.5px] laptop:left-[122px] bg-apricot laptop:w-[165.47px] laptop:h-5"></div>
          </TextHeader>
          <button className="mobile:bg-none mobile:text-green mobile:mb-[9px] screen1280:mb-0  text-white font-dmSans font-bold laptop:text-[16px] laptop:leading-[20.83px] laptop:rounded-[10px] laptop:w-[190px] laptop:h-[70px]">
            View All Job
          </button>
        </div>
        <div className="w-full flex gap-[30px] overflow-scroll rounded-[16.84px] shadow-[5px_0px_56.1276px_rgba(55,55,55,0.1098)]">
          {jobDetails.map((item) => {
            return (
              <div className="bg-white shadow-[5px_0px_56.1276px_rgba(55,55,55,0.1098)]  laptop:min-w-[453px] min-w-[355px] mobile:rounded-[16.84px] mobile:w-full mobile:h-[292px] mobile:py-[30px] mobile:px-[24px] laptop:h-[346px] laptop:py-[40px] laptop:px-[40px] laptop:flex laptop:flex-col laptop:justify-between  ">
                <div className={flexContentBetween}>
                  <div className="bg-[#fceeea]  rounded-[5px] w-[140px] h-[30px] flex items-center justify-center">
                    <h1 className="text-[#E95432] font-poppins font-medium text-[14px] leading-[20px]">
                      {item.category}
                    </h1>
                  </div>
                  <span className="text-grey001 font-dmSans leading-[26px] text-[16px]">
                    {item.createdTime}
                  </span>
                </div>
                <h1 className="text-darkBlue max-h-[72px]  truncate whitespace-normal mt-[24px] mb-[16px] font-poppins font-semibold text-[22px] leading-[36px] mobile:tracking-[-1px] laptop:pr-[10px]">
                  {item.position}
                </h1>
                <div className="flex gap-[63.75px] items-center mb-[24px] font-dmSans text-grey001 text-[16px] leading-[26px]">
                  <div className={`${flexCenterClasses} gap-[9.75px]`}>
                    <img alt="clock" src="images/icons/time.svg" />
                    {item.workingDay}
                  </div>
                  <div className={`${flexCenterClasses} gap-[9.75px]`}>
                    <img alt="location" src="images/icons/location2.svg" />
                    {item.location}
                  </div>
                </div>
                <div className={`${flexContentBetween}`}>
                  <div className={`w-[110px] ${flexContentBetween}`}>
                    <img alt="" src={item.logo} />
                    <h1 className="text-darkBlue font-dmSans font-bold text-[16px] leading-[20.83px]">
                      {item.company}
                    </h1>
                  </div>
                  <button className={`${flexContentBetween} w-[121.55px]`}>
                    <h6 className="text-green font-dmSans font-bold text-[16px] leading-[20.83px]">
                      Apply Now
                    </h6>
                    <div
                      className={`bg-green w-[26.67px] h-[26.67px] rounded-[8.67px] ${flexCenterClasses}`}
                    >
                      <img
                        alt=""
                        src="images/icons/arrow-right-white-btn.svg"
                        className="w-[12.88px] h-[11.99px]"
                      />
                    </div>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
        <div className=" flex items-center gap-3">
          <h1 className="text-base font-dmSans font-medium text-darkBlue">
            SEE MORE
          </h1>
          <img alt="k" src="images/icons/arrow-right.svg" className="max-h-3" />
        </div>
      </div>
    </div>
  )
}

export default PopularJobs
