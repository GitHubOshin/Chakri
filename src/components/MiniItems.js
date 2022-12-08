export function GreyCircle(props) {
  return (
    <div className="mobile:w-[93.91px] mobile:h-[38.59px] laptop:w-[226.29px] laptop:h-[93px] flex flex-col justify-between">
      <span className="text-grey002 font-dmSans mobile:text-[6.29px]  mobile:font-medium laptop:text-[16px] laptop:w-[]">
        {props.texts}
      </span>
      <div className="relative mobile:w-[93.91px] mobile:h-[23.24px] laptop:w-[226.29px] laptop:h-[56px] ">
        <div className="absolute bg-grey004 rounded-full mobile:w-[23.24px] mobile:h-[23.24px] laptop:w-[56px] laptop:h-[56px] laptop:border-[0.5px] laptop:border-white mobile:border-[0.2px] mobile:border-white"></div>
        <div className="absolute laptop:left-[42.57px] mobile:left-[18px] bg-grey004 rounded-full mobile:w-[23.24px] mobile:h-[23.24px] laptop:w-[56px] laptop:h-[56px] laptop:border-[0.5px] laptop:border-white mobile:border-[0.2px] mobile:border-white"></div>
        <div className="absolute laptop:left-[85.14px] mobile:left-[35.4px] bg-grey004 rounded-full mobile:w-[23.24px] mobile:h-[23.24px] laptop:w-[56px] laptop:h-[56px] laptop:border-[0.5px] laptop:border-white mobile:border-[0.2px] mobile:border-white"></div>
        <div className="absolute laptop:left-[127.71px] mobile:left-[53.3px] bg-grey004 rounded-full mobile:w-[23.24px] mobile:h-[23.24px] laptop:w-[56px] laptop:h-[56px] laptop:border-[0.5px] laptop:border-white mobile:border-[0.2px] mobile:border-white"></div>
        <div className="absolute laptop:left-[170.28px] mobile:right-0 bg-[#FFE7DB] rounded-full mobile:w-[23.24px] mobile:h-[23.24px] laptop:w-[56px] laptop:h-[56px]  mobile:flex mobile:items-center mobile:justify-center laptop:border-[0.5px] laptop:border-white mobile:border-[0.2px] mobile:border-white">
          <div className=" mobile:text-[6.29px] laptop:text-[16px] text-darkGrey text-base font-medium font-dmSans not-italic leading-[21px]">
            +
          </div>
        </div>
      </div>
    </div>
  )
}

export function SquareWhite() {
  return (
    <div
      className="mobile:w-[333px] mobile:h-[268px] rounded-lg 
    border border-[#EDEDED] mobile:px-[30px] mobile:py-[30px]
    flex flex-col justify-between"
    ></div>
  )
}
