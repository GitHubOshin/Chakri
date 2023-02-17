import FirstPage from './pages/FirstPage'
import Categories from './pages/Categories'
import Logos from './pages/Logos'
import Services from './pages/Services'
import PopularJobs from './pages/PopularJobs'
import JobSeeker from './pages/JobSeeker'
import Testimonial from './pages/Testimonial'
import LastPage from './pages/LastPage'

function App() {
  return (
    <div className="relative min-w-[375px]">
      <FirstPage />
      <Logos />
      <Categories />
      <Services />
      <PopularJobs />
      <div>
        <Testimonial />
        <JobSeeker />
      </div>
      <LastPage />
    </div>
  )
}

export default App
