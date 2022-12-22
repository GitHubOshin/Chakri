function JobSeeker() {
  return (
    <div className="min-h-[491.47px] max-h-[670.38px] w-full h-full flex items-center justify-center mobile:px-[10px] screen1280:px-[120px]">
      <div className="max-w-[1534.93px] flex mobile:flex-col items-center mobile:justify-center screen1280:flex-row mobile:gap-[16.03px] screen1280:gap-[88.49px] screen1280:w-full ">
        <img
          alt="Map"
          src="images/otherimages/map.svg"
          className="max-w-[821.49px] max-h-[491.47px] w-full h-full mobile:max-w-[554px]  min-h-[212.38px]  laptop:min-w-[821.49px] "
        />
        <div className="max-w-[625px] max-h-[441.97px]  mobile:max-w-[554px] laptop:min-w-[625px] laptop:h-[427.83px] flex flex-col justify-between">
          <h1 className="text-darkBlue font-poppins font-bold leading-[50px] mobile:text-[24px] laptop:text-[40px]">
            20k+ people around the world have found a job through &nbsp;
            <span class="relative">
              JobCenter
              <div className="absolute z-[-1] bg-apricot w-full h-2 screen1280:h-[10px] laptop:h-5 left-0 right-0 bottom-1 screen1280:bottom-1 laptop:bottom-2" />
            </span>
          </h1>
          <div className="text-grey001 font-dmSans text-[16px] leading-[32px]">
            Intrinsicly disintermediate economically sound process improvements
            after market positioning vortals. Professionally scale cross
            functional human capital and extensive technology. Authoritatively
            e-enable stand-alone initiatives
          </div>
          <button className="bg-green text-white w-[190px] h-[70px] rounded-[10px] mt-[30px]">
            Find Your Job
          </button>
        </div>
      </div>
    </div>
  )
}

export default JobSeeker
