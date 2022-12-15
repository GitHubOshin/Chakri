function BackGround() {
  return (
    <div className="relative bg-cyan-700 min-w-[355px] min-h-[326.56px] ">
      <img
        alt="Line"
        src="images/otherImages/vector2.svg"
        className="absolute laptop:w-[621.27px] laptop:h-[620.81px] screen1280:w-[460.32px] screen1280:h-[460.88px] mobile:w-[284px] mobile:h-[283.79px]"
      />
      <img
        alt="Background yellow"
        src="images/otherImages/vector-yellow.svg"
        className="absolute laptop:w-[575.07px] laptop:h-[574.64px] screen1280:w-[435.32px] screen1280:h-[420.88px] mobile:w-[262.88px] mobile:h-[262.69px]"
      />
      <img
        alt="Yellow dots"
        src="images/otherImages/yellow-dots.svg"
        className="absolute laptop:w-[123.19px] laptop:h-[217.13px] screen1280:w-[90px] screen1280:h-[175px] mobile:w-[56.32px] mobile:h-[99.26px]"
      />
      <img
        alt="Location"
        src="images/icons/location.svg"
        className="absolute"
      />
      <img alt="Arrow" src="images/icons/arrow.svg" className="absolute" />
    </div>
  )
}

function ExampleProfile() {}

function HappyFamily() {}

function ServicesPageBlockA() {
  return (
    <div className="w-full h-full bg-red-100 mobile:p-[20px]">
      <BackGround />
      <ExampleProfile />
      <HappyFamily />
    </div>
  )
}

export default ServicesPageBlockA
