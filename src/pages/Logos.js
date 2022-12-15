function Logos() {
  return (
    <div className="w-full mobile:h-[302.64px] screen750:h-[234px] flex items-center justify-center">
      <div className=" w-full mobile:w-[327px] mobile:h-[142.61px] screen750:w-[750px] screen1280:w-[1304px] laptop:w-[1304px] screen1280:px-[0px]  mobile:px-[24px] flex screen1280:justify-between screen750:gap-[40px] screen1280:gap-0 ">
        <div className=" flex w-full screen1280:w-[743px] mobile:flex-col screen750:flex-row mobile:items-center mobile:justify-between  screen750:gap-[44px] ">
          <img
            alt="Logo: Caley Peace"
            src="images/logos/caley-peace.svg"
            className="mobile:w-[81.06px] mobile:h-[33.54px] screen1280:w-[145px] screen1280:h-[60px]"
          />
          <img
            alt="Logo: Design Studio"
            src="images/logos/design-studio.svg"
            className="mobile:w-[81.06px] mobile:h-[33.54px] screen1280:w-[145px] screen1280:h-[60px]"
          />
          <img
            alt="Logo: Harrison"
            src="images/logos/harrison.svg"
            className="mobile:w-[81.62px] mobile:h-[26.83px] screen1280:w-[145px] screen1280:h-[60px]"
          />
        </div>
        <div className=" flex w-full  screen1280:w-[408px] mobile:flex-col mobile:justify-between  screen750:flex-row mobile:items-center  screen750:gap-[44px] screen1280:gap-0">
          <img
            alt="Logo: Barbecue"
            src="images/logos/barbecue.svg"
            className="mobile:w-[76.03px] mobile:h-[41.37px] screen1280:w-[145px] screen1280:h-[60px]"
          />
          <img
            alt="Logo: Design Exclusive"
            src="images/logos/design-exclusive.svg"
            className="mobile:w-[66.53px] mobile:h-[32.42px] screen1280:w-[145px] screen1280:h-[60px]"
          />
          <img
            alt="Logo: Creative Design"
            src="images/logos/creative-design.svg"
            className="screen1280:hidden screen750:inline mobile:w-[50px] mobile:h-[37px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Logos

