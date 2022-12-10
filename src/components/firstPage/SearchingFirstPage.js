function SearchingFirstPage() {
  function Tag(props) {
    return (
      <span className="px-[5px] pt-[4px] pb-[3px] text-grey bg-grey007 rounded-[2px] font-dmSans font-medium">
        {props.text}
      </span>
    )
  }

  return (
    <div className=" mobileS:bg-slate-600 screen1280:flex screen1280:items-center screen1280:justify-end laptop:pr-[70px] laptop:h-[840px] laptop:w-[960px]">
      <div className="mobileS:w-fit mobileS:h-fit mobileS:px-[10px] screen1280:px-0 flex flex-col mobileS:mt-[50.02px] mobileS:gap-[24px] screen1280:mt-0 screen1280:w-fit">
        <h1 className="relative w-fit z-0 text-darkBlue font-poppins mobileS:ml-[20px] screen1280:ml-0 mobileS:text-[30px] mobileS:leading-[40px] laptop:leading-[100px] laptop:text-[80px] screen1280:text-[60px] screen1280:leading-[76px] font-extrabold">
          Find Every Job
          <br />
          in One Platform
          <div className="absolute z-[-1] mobileS:top-[20.5px] mobileS:right-[67px] mobile:right-[83px] laptop:right-[43px] laptop:top-[40px] screen1280:top-[34px] screen1280:right-[34px] screen1280:w-[118.21px] screen1280:h-[37px] screen1280: mobileS:w-[61.21px] mobileS:h-[12.74px] laptop:w-[161px] laptop:h-[51.29px]  bg-apricot"></div>
        </h1>
        <div className="w-full font-dmSans flex flex-col mobileS:items-center screen1280:items-start mobileS:gap-[16px] screen1280:gap-[30px]">
          <div className="flex items-center justify-between mobileS:w-full screen1280:w-[455px] laptop:w-[600px] laptop:h-[88px]  bg-white shadow-[0_10px_20px_40px_rgba(195, 199, 197, 0.1)] rounded-[10px] mobileS:h-[70px] mobileS:py-[11.68px] mobileS:px-[14px]">
            <div className="flex justify-between mobileS:w-[183.04px]">
              <input
                className="mobileS:w-[92px] mobileS:h-[21px] laptop:w-[106px] mobileS:text-[14px]"
                placeholder="Job / Position"
              />
              <img
                alt="Pipe"
                src="images/otherImages/pipe.svg"
                className="mobileS:h-[20.53px]"
              />
              <input
                className="mobileS:w-[68px] mobileS:h-[21px] mobileS:text-[14px]"
                placeholder="Location"
              />
            </div>
            <button className="h-full text-white bg-green mobileS:rounded-[7.29px] mobileS:w-[101.29px] laptop:w-[139px] laptop:h-[64px]">
              Serach
            </button>
          </div>
          <div className="flex gap-[13px] items-center">
            <span className="text-orange mobileS:text-[12px] mobile:text-[16px] font-dmSans font-medium">
              Recent Searchs :
            </span>
            <div className="flex gap-[8px]">
              <Tag text="Design" />
              <Tag text="UX/UI" />
              <Tag text="Product" />
              <span className="px-[5px] pt-[4px] pb-[3px] text-grey bg-grey007 rounded-[2px] font-dmSans font-medium mobileS:hidden screen1280:inline">
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
