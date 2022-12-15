import ServicesPageBlockB from '../components/servicesPage/ServicesPageBlockB'
import ServicesPageBlockA from '../components/servicesPage/ServicesPageBlockA'

// #FCFCFC
function Services() {
  return (
    <div className="w-full flex mobile:flex-col screen1280:flex-row screen1280:h-[1079.96px] mobile:h-[1492.56px] bg-red-400">
      <ServicesPageBlockA />
      <ServicesPageBlockB />
    </div>
  )
}

export default Services
