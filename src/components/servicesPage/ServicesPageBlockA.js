import { GreyCircle } from '../MiniItems'

function BackGround() {
  return (
    <div className="z-0">
      <img
        alt="Line"
        src="images/otherImages/vector2.svg"
        className="absolute mobile:top-[11px] mobile:left-[5px] screen1280:left-[10px] screen1280:top-[32px] laptop:w-[621.27px] laptop:h-[620.81px] laptop:top-0 screen1280:w-[460.32px] screen1280:h-[460.88px] mobile:w-[284px] mobile:h-[283.79px]"
      />
      <img
        alt="Background yellow"
        src="images/otherImages/vector-yellow.svg"
        className="absolute mobile:top-[32.2px] mobile:left-[26.65px] screen1280:top-[70.28px] screen1280:left-[47px] laptop:w-[575.07px] laptop:h-[574.64px] laptop:left-[58.5px] laptop:top-[40px] screen1280:w-[435.32px] screen1280:h-[420.88px] mobile:w-[262.88px] mobile:h-[262.69px]"
      />
      <img
        alt="Yellow dots"
        src="images/otherImages/yellow-dots.svg"
        className="absolute mobile:bottom-[5px] mobile:left-[91.5px] screen1280:bottom-0 screen1280:left-[140px] laptop:left-[175px] laptop:w-[123.19px] screen1280:w-[100px] screen1280:h-[170px] mobile:w-[56.32px] mobile:h-[99.26px]"
      />
    </div>
  )
}

function CardOne() {
  return (
    <div className="absolute bottom-0 bg-white shadow-[2px_10px_25px_rgba(0,0,0,0.1)] mobile:w-[91.43px] mobile:h-[136.46px] mobile:rounded-[6px] mobile:p-[14px] screen1280:rounded-[10px] screen1280:w-[150px] screen1280:h-[230px] screen1280:p-[23px] laptop:w-[200px] laptop:h-[298.52px] laptop:p-[29px]">
      <div className="bg-grey004 mobile:w-[35.2px] mobile:h-[35.2px] screen1280:w-14 screen1280:h-14 laptop:w-[77px] laptop:h-[77px] rounded-full"></div>
      <div className="w-fit h-fit flex flex-col mobile:my-[4.5px] screen1280:mt-2 screen1280:mb-3 laptop:mt-[10px] laptop:mb-[15px]">
        <h1 className="text-darkBlue font-poppins font-semibold mobile:text-[9.14px] screen1280:text-base laptop:text-[20px] mobile:leading-[14.6px] laptop:leading-[32px]  mobile:tracking-[0.09 px] laptop:tracking-[0.2px]">
          Shellina
        </h1>
        <span className="text-grey001 font-dmSans mobile:text-[7.31px] screen1280:text-xs laptop:text-[16px] mobile:leading-[9.1px] laptop:leading-[20px]">
          Photographer
        </span>
      </div>
      <div className="mobile:h-[9.14px] mobile:mb-[4px] screen1280:mb-6 laptop:mb-[27px]  flex items-center gap-[2.5px] ">
        <img
          alt="Location"
          src="images/icons/location.svg"
          className="mobile:w-[7.32px] mobile:h-[7.32px] screen1280:w-3 screen1280:h-12 laptop:w-[16px] laptop:h-[16px]"
        />
        <span className="text-grey001 font-dmSans mobile:text-[7.31px] screen1280:text-xs laptop:text-[16px] leading-[9.1px]">
          Ukraine
        </span>
      </div>
      <button className="w-full mobile:h-[22.86px] screen1280:h-9  mobile:rounded-[4.57px] screen1280:rounded-lg bg-green text-white font-dmSans font-bold mobile:text-[7.31px] screen1280:text-xs laptop:h-[50px] laptop:text-[16px]">
        Hire Now
      </button>
    </div>
  )
}

function CardTwo() {
  return (
    <div className="absolute z-10 flex flex-col laptop:gap-0 laptop:justify-between mobile:gap-[16.07px] screen1280:gap-6 mobile:left-[70px] bg-white shadow-[0px_70.7207px_56.1276px_rgba(55,55,55,0.1098)] mobile:rounded-[7.7px] mobile:w-[236.17px] mobile:h-[286.14px] mobile:py-[25.8px] mobile:px-[25.66px] screen1280:rounded-[12px] screen1280:h-[480px] screen1280:left-[110px] screen1280:w-[390px] screen1280:p-[40px] laptop:rounded-[16.84px] laptop:w-[516.63px] laptop:h-[625.93px] laptop:left-[145px] laptop:px-[57.38px] laptop:pt-[56.25px] laptop:pb-[56.13px]">
      <div className="relative bg-grey004 mobile:w-full mobile:h-[133.42px] mobile:rounded-[2.05px] screen1280:h-[220px] laptop:h-[291.86px] laptop:rounded-[4.49px]">
        <div className="absolute mobile:bottom-[12.33px] mobile:left-[11.32px] screen1280:bottom-4 screen1280:left-4 flex items-center justify-between mobile:px-[9.24px]  bg-white mobile:w-[90.83px] mobile:h-[18.47px] mobile:rounded-[10.26px] screen1280:w-40 screen1280:h-8 screen1280:rounded-2xl screen1280:px-5 laptop:w-[198.69px] laptop:h-[40.41px] laptop:rounded-[22.45px] laptop:left-[25.94px] laptop:bottom-[26.78px]">
          <h6 className="text-darkBlue font-dmSans font-bold mobile:text-[7.18px] leading-[10.26px] screen1280:text-xs laptop:text-[15.72px]">
            See Opened Jobs
          </h6>
          <img
            alt="Arrow"
            src="images/icons/arrow.svg"
            className="mobile:w-[8.21px] mobile:h-[8.21px] screen1280:w-3 screen1280:h-3 laptop:w-[17.96px] laptop:h-[17.96px]"
          />
        </div>
      </div>
      <div className="flex flex-col mobile:gap-[15.4px] screen1280:gap-6 laptop:gap-[33.68px]">
        <span className="text-darkBlue font-poppins font-semibold mobile:text-[11.29px] screen1280:text-lg laptop:text-[24.7px] laptop:leading-[35.9px] laptop:tracking-[0.22px] leading-[16.42px] tracking-[0.1px]">
          Tips From Pro : How apply for a startup jobs as a fresh graduate |
          JobBlog ep;04
        </span>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-grey004 mobile:w-[20.53px] mobile:h-[17.96px] mobile:rounded-[6.16px] mobile:mr-[7.95px] screen1280:mr-2 screen1280:w-9 screen1280:h-8 screen1280:rounded-xl"></div>
            <span className="text-darkBlue font-dmSans font-bold mobile:text-[8.21px] laptop:text-[17.96px] leading-[10.26px] tracking-[0.1px] mobile:mr-[5.13px] screen1280:mr-3 screen1280:text-sm">
              Nerte Gronw
            </span>
            <div className="bg-grey006 rounded-full mobile:w-[2.28px] mobile:h-[2.05px] screen1280:w-[4.98px] screen1280:h-[4.98px]"></div>
          </div>
          <span className="text-grey001 font-dmSans font-normal text-[7.18px] leading-[12.32px] screen1280:text-xs laptop:text-[15.72px]">
            13 Hours ago
          </span>
        </div>
      </div>
    </div>
  )
}

function CardThree() {
  return (
    <div className="absolute z-20 flex mobile:items-center mobile:justify-center mobile:left-[228px] mobile:top-[71.82px] bg-white shadow-[0px_15px_25px_rgba(0,0,0,0.06)] mobile:rounded-[4.57px] screen1280:rounded-[10px] mobile:w-[130.87px] mobile:h-[69.94px] screen1280:w-[210px] screen1280:h-[110px] screen1280:top-[120px] screen1280:left-[362px] laptop:w-[286.29px] laptop:h-[153px] laptop:left-[490.6px] laptop:top-[135px]">
      <GreyCircle texts="Happy Family" />
      <div className="absolute laptop:left-[200px] laptop:top-[67px] screen1280:left-[145px] screen1280:top-[47px] screen750:left-[89.5px] screen750:top-[31px] mobile:left-[90px] mobile:top-[31.5px] bg-plango rounded-full mobile:w-[23.24px] mobile:h-[23.24px]  screen1280:w-[42px] screen1280:h-[42px]  laptop:w-[56px] laptop:h-[56px]  mobile:flex mobile:items-center mobile:justify-center laptop:border-[0.5px] laptop:border-white mobile:border-[0.2px] mobile:border-white">
        <span className="text-white mobile:text-[6.29px] laptop:text-[16px] text-base font-medium font-dmSans not-italic leading-[21px] screen1280:text-[12px]">
          20+
        </span>
      </div>
    </div>
  )
}

function ServicesPageBlockA() {
  return (
    <div className="relative laptop:mt-[56.8px] mobile:w-fit screen1280:w-[610px] screen1280:h-[545px]  min-w-[355px] max-w-[776.58px] min-h-[326.56px] laptop:w-[776.58px] laptop:h-[690.24px] ">
      <BackGround />
      <CardOne />
      <CardTwo />
      <CardThree />
    </div>
  )
}

export default ServicesPageBlockA
