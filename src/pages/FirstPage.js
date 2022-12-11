import HeaderFirstPage from '../components/firstPage/HeaderFirstPage'
import SearchingFirstPage from '../components/firstPage/SearchingFirstPage'
import PeopleHaveFoundJobFirstPage from '../components/firstPage/PeopleHaveFoundJobFirstPage'

function FirstPage() {
  return (
    <div className="bg-[#f9fdfb] flex flex-col items-center screen1280:items-center">
      <HeaderFirstPage />
      <div className="mobile:gap-y-[30px] mobile:flex mobile:flex-col mobile:items-center screen750:flex screen750:flex-row screen750:items-center screen750:justify-center">
        <SearchingFirstPage />
        <PeopleHaveFoundJobFirstPage />
      </div>
    </div>
  )
}

export default FirstPage
