function SearchingFirstPage() {
  function Tag(props) {
    return (
      <span className="h-fit pt-[2px] pb-[1px] px-[5px]  text-grey text-[14px] bg-grey007 rounded-[2px] font-dmSans font-normal">
        {props.text}
      </span>
    )
  }

  return (
    <div className="screen1280:flex screen1280:items-center screen1280:justify-end laptop:pr-[70px] laptop:h-[840px] laptop:w-[960px] screen1280:w-[640px] screen1280:h-[630px] screen1280:pr-[55px]">
      <div className="mobile:w-fit mobile:h-fit mobile:px-[10px] screen1280:px-0 flex flex-col mobile:mt-[50.02px] mobile:gap-[24px] screen1280:gap-[28px] laptop:gap-[40px] screen1280:mt-0 screen1280:w-fit">
        <h1 className="relative w-fit z-0 text-darkBlue font-poppins mobile:ml-[20px] screen1280:ml-0 mobile:text-[30px] mobile:leading-[40px] laptop:leading-[100px] laptop:text-[80px] screen1280:text-[60px] screen1280:leading-[76px] font-extrabold ">
          Find Every Job
          <br />
          in One Platform
          <div className="absolute z-[-1] mobile:top-[20.5px] mobile:right-[16px] laptop:right-[43px] laptop:top-[40px] screen1280:top-[34px] screen1280:right-[34px] screen1280:w-[118.21px] screen1280:h-[37px] screen1280: mobile:w-[61.21px] mobile:h-[12.74px] laptop:w-[161px] laptop:h-[51.29px]  bg-apricot"></div>
        </h1>
        <div className="mobile:w-[355px] screen1280:w-full  font-dmSans flex flex-col mobile:items-center screen1280:items-start mobile:gap-[16px] screen1280:gap-[30px]">
          <div className="font-dmSans font-bold flex items-center justify-between mobile:w-full screen1280:w-[455px] laptop:w-[600px] laptop:h-[88px]  bg-white shadow-[0_10px_20px_40px_rgba(195, 199, 197, 0.1)] rounded-[10px] mobile:h-[70px] mobile:py-[11.68px] mobile:px-[14px] screen1280:pr-[11px] screen1280:pl-[30px] laptop:pr-[12px] laptop:pl-[40px]">
            <div className="flex justify-between mobile:w-[183.04px] laptop:w-[254px]">
              <input
                className="mobile:w-[92px] mobile:h-[21px] laptop:w-[106px] mobile:text-[14px] placeholder:text-grey003 screen1280:text-[12.8px] screen1280:font-medium laptop:font-bold laptop:text-[16px]"
                placeholder="Job / Position"
              />
              <img
                alt="Pipe"
                src="images/otherImages/pipe.svg"
                className="mobile:h-[20.53px]"
              />
              <input
                className="mobile:w-[68px] mobile:h-[21px] mobile:text-[14px] placeholder:text-grey003 screen1280:text-[12.8px] screen1280:font-medium laptop:font-bold laptop:text-[16px]"
                placeholder="Location"
              />
            </div>
            <button className="h-full text-white bg-green mobile:rounded-[7.29px] mobile:w-[101.29px] screen1280:w-[107px] laptop:w-[139px] laptop:h-[64px] screen1280:text-[12.8px] screen1280:font-medium laptop:font-bold laptop:text-[16px]">
              Serach
            </button>
          </div>
          <div className="flex gap-[13px] items-center">
            <span className="text-orange  mobile:text-[16px] font-dmSans font-medium">
              Recent Searchs :
            </span>
            <div className="flex gap-[8px]">
              <Tag text="Design" />
              <Tag text="UX/UI" />
              <Tag text="Product" />
              <span className="h-fit pt-[2px] pb-[1px] px-[5px] text-grey text-[14px] bg-grey007 rounded-[2px] font-dmSans font-normal mobile:hidden screen1280:inline">
                Graphic
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchingFirstPage

