import FirstPage from './pages/FirstPage'
import Categories from './pages/Categories'
import Logos from './pages/Logos'
import Services from './pages/Services'
import PopularJobs from './pages/PopularJobs'
import JobSeeker from './pages/JobSeeker'

function App() {
  return (
    <div className="App min-w-[375px]">
      <FirstPage />
      <Logos />
      <Categories />
      <Services />
      <PopularJobs />
      <div>
        <JobSeeker />
      </div>
    </div>
  )
}

export default App
