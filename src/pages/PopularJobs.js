import { TextHeader } from '../components/Texts'
import jobDetails from '../data/JobDetails'

function PopularJobs() {
  return (
    <div className="bg-cyan-500 min-w-[375px] w-full mobile:h-[622px] mobile:px-[10px] laptop:h-[866px] laptop:pt-[140px]">
      <div className="bg-red-100 w-full mobile:h-[402px] laptop:h-[516px]">
        <div className=" mobile:mx-[14px] laptop:mx-[250px] flex justify-between items-center">
          <TextHeader>
            Some Popular
            <br />
            Jobs for You!
            <div className="absolute z-[-1] laptop:top-[25.5px] laptop:left-[122px] bg-apricot laptop:w-[165.47px] laptop:h-5"></div>
          </TextHeader>
          <button className="bg-green text-white font-dmSans font-bold laptop:text-[16px] laptop:leading-[20.83px] laptop:rounded-[10px] laptop:w-[190px] laptop:h-[70px]">
            View All Job
          </button>
        </div>
        {/** MAP ZONE */}
        <div>
          {jobDetails.map((item) => {
            return (
              <div className="bg-white shadow-[5px_30px_56.1276px_rgba(55, 55, 55, 0.1098)]  max-w-[453px] mobile:rounded-[16.84px] mobile:w-full mobile:h-[292px] mobile:py-[30px] mobile:px-[24px] laptop:py-[40px] laptop:px-[40px]">
                <div className="flex justify-between items-center">
                  <div className="bg-[#fceeea]  rounded-[5px] w-[140px] h-[30px] flex items-center justify-center">
                    <h1 className="text-[#E95432] font-poppins font-medium text-[14px] leading-[20px]">
                      {item.category}
                    </h1>
                  </div>
                  <span className="text-grey001 font-dmSans leading-[26px] text-[16px]">
                    {item.createdTime}
                  </span>
                </div>
                <h1 className="text-darkBlue mt-[24px] mb-[16px] font-poppins font-semibold text-[22px] leading-[36px] mobile:tracking-[-1px]">
                  {item.position}
                </h1>
                <div className="flex justify-between items-center mb-[24px] font-dmSans text-grey001 text-[16px] leading-[26px]">
                  <div>{item.workingDay}</div>
                  <div>{item.location}</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-[110px] flex justify-between items-center">
                    <img alt="" src={item.logo} />
                    <h1 className="text-darkBlue font-dmSans font-bold text-[16px] leading-[20.83px]">
                      {item.company}
                    </h1>
                  </div>
                  <button className="flex items-center justify-between w-[121.55px]">
                    <h6 className="text-green font-dmSans font-bold text-[16px] leading-[20.83px]">
                      Apply Now
                    </h6>
                    <div className="bg-green w-[26.67px] h-[26.67px] rounded-[8.67px] flex items-center justify-center">
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
      </div>
    </div>
  )
}

export default PopularJobs
