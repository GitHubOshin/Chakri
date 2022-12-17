import ServicesPageBlockB from '../components/servicesPage/ServicesPageBlockB'
import ServicesPageBlockA from '../components/servicesPage/ServicesPageBlockA'

// #FCFCFC
function Services() {
  return (
    <div className="flex items-center justify-center h-fit mobile:py-[80px]">
      <div className=" max-w-[1421.07px] mobile:w-full flex mobile:flex-col mobile:items-center mobile:gap-[61.74px] screen1280:flex-row screen1280:gap-0 screen1280:justify-between screen1280:px-[70px] laptop:px-0 laptop:items-start">
        <ServicesPageBlockA />
        <ServicesPageBlockB />
      </div>
    </div>
  )
}

export default Services
