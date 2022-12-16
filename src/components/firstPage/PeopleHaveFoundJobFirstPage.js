import { GreyCircle } from '../MiniItems'

function PeopleHaveFoundJobFirstPage() {
  return (
    <div className="relative mobile:min-w-[375px] mobile:min-h-[348.58px]  laptop:w-[960px] laptop:h-[840px]  screen1280:w-[640px] screen1280:h-[630px]">
      <img
        alt="Line"
        src="images/otherImages/vector1.svg"
        className="absolute laptop:top-[173px] laptop:left-[143.4px] laptop:w-[594.32px] laptop:h-[593.88px]  screen1280:w-[460.32px] screen1280:h-[460.88px] screen1280:top-[120px] screen1280:left-[105px] mobile:w-[246.63px] mobile:h-[246.45px] mobile:top-[72.8px] mobile:right-[51.7px]"
      />
      <img
        alt="Avocado Background"
        src="images/otherImages/vector-green.svg"
        className="absolute laptop:top-[216.4px] laptop:left-[143.4px] mobile:w-[228.29px] mobile:h-[228.12px] laptop:w-[550.12px] laptop:h-[549.71px] screen1280:w-[435.32px] screen1280:h-[420.88px] screen1280:top-[160px] screen1280:left-[97px] mobile:bottom-[29.5px] mobile:right-[70px]"
      />
      <img
        alt="Dots"
        src="images/otherImages/green-dots.svg"
        className="absolute mobile:w-[51.12px] mobile:h-[90.1px] laptop:w-[123.19px] laptop:h-[217.13px] screen1280:w-[90px] screen1280:h-[175px] screen1280:bottom-[10px] screen1280:left-[150px] laptop:left-[208.5px] laptop:bottom-[19.3px] mobile:bottom-[7.5px] mobile:left-[102px]"
      />
      <div className="absolute bg-white shadow-[0px_15px_25px_rgba(0,0,0,0.06)] rounded-full mobile:w-[29.88px] mobile:h-[29.88px] laptop:w-[72px] laptop:h-[72px]  flex justify-center items-center screen1280:w-[50px] screen1280:h-[50px] laptop:top-[256px] laptop:right-[236px] screen1280:top-[180px] screen1280:right-[102px] mobile:right-[59px] mobile:top-[105px]">
        <img
          alt="Check Shield"
          src="images/icons/check-shield.svg"
          className="mobile:w-[9.99px] mobile:h-[10.94px] laptop:w-[24.06px] laptop:h-[26.37px] screen1280:w-[20.5px] screen1280:h-[20.5px]"
        />
      </div>
      <div className="absolute mobile:w-[118.81px] mobile:h-[63.49px] laptop:w-[286.29px] laptop:h-[153px] screen1280:w-[220px] screen1280:h-[115px]  bg-white shadow-[0px_15px_25px_rgba(0,0,0,0.06)] mobile:rounded-[5px] laptop:rounded-[10px]  mobile:bottom-[35px] mobile:right-[40px] laptop:right-[190px] laptop:bottom-[72px] flex items-center justify-center screen1280:bottom-[50px] screen1280:right-[60px] ">
        <GreyCircle texts="20k+ People have found jobs!" />
      </div>
    </div>
  )
}

export default PeopleHaveFoundJobFirstPage

