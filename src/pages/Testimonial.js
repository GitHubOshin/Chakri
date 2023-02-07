function Testimonial() {
  return (
    <section className="w-full h-full flex items-center justify-center screen1280:h-[491.47px] laptop:h-[607.83px]  mobile:max-h-[960.39px]  screen1280:max-h-[607.83px]  screen1280:px-[120px] mobile:mb-[70px] screen1280:mb-0 laptop:mb-[70px]">
      <div className=" w-full screen1280:max-w-[1280px] laptop:max-w-[1420px] flex mobile:flex-col-reverse items-center screen1280:flex-row justify-between mobile:px-[10px] screen1280:px-0 mobile:gap-[46.03px]">
        <div className=" text-darkBlue w-full  mobile:max-w-[554px] laptop:max-w-[695px] mobile:px-[14px] mobile:mb-24 screen1280:mb-0">
          <h1 className="font-poppins font-bold mobile:text-[24px] laptop:text-[30px] leading-[60px] tracking-[0.2px]">
            "I downloaded JobCenter about a year ago, and it's made the job
            search process much easier. It's one of the best tools out there for
            getting a job!"
          </h1>
          <span className="block font-dmSans text-[18px] leading-[23.44px] mobile:mt-[90px] mobile:mb-[72.25px] screen1280:mt-[30px] screen1280:mb-[62.25px]">
            - Ferdinand Stindl - Software Developer
          </span>
          <div className="w-full mobile:mt-[72.25px] screen1280:mt-[62.25px] flex mobile:justify-center screen1280:justify-start">
            <div className="flex gap-[36px] ">
              <img alt="An arrow" src="images/icons/arrow-left.svg" />
              <img alt="An arrow" src="images/icons/arrow-right.svg" />
            </div>
          </div>
        </div>
        <div className=" relative  mobile:w-[321.46px] mobile:h-[314.61px] laptop:w-[620.04px] laptop:h-[607.83px]">
          <img
            alt=""
            src="images/otherImages/vector2.svg"
            className="absolute mobile:max-w-[320.93px] mobile:max-h-[314.61px] laptop:max-w-[620.04px] laptop:max-h-[607.83px] right-0 "
          />
          <img
            alt=""
            src="images/otherImages/softgreen.svg"
            className="absolute mobile:max-w-[297.6px] mobile:max-h-[291.22px]  laptop:max-w-[574.96px] laptop:max-h-[562.63px] right-0 bottom-0"
          />
          <img
            alt="Quote left"
            src="images/icons/quote-left.svg"
            className="absolute mobile:right-[165px] mobile:bottom-[-30px] laptop:right-[358px] laptop:bottom-[40px]"
          />
          <img
            alt="Dots"
            src="images/otherImages/soft-green-dots.svg"
            className="absolute mobile:w-[60.4px] mobile:h-[106.45px] laptop:w-[118px] laptop:h-[207px] mobile:right-[27px] mobile:bottom-6 laptop:right-[55px] laptop:bottom-[40px]"
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonial
