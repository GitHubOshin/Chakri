import Nav from '../components/Nav'
import SearchingFirstPage from '../components/firstPage/SearchingFirstPage'
import PeopleHaveFoundJobFirstPage from '../components/firstPage/PeopleHaveFoundJobFirstPage'

function FirstPage() {
  return (
    <div className="bg-[#f9fdfb]">
      <Nav />
      <div className="mobile:gap-y-[30px] mobile:flex mobile:flex-col mobile:items-center screen1280:flex screen1280:flex-row screen750:items-center screen750:justify-center mobile:mt-[100px] ">
        <SearchingFirstPage />
        <PeopleHaveFoundJobFirstPage />
      </div>
    </div>
  )
}

export default FirstPage
