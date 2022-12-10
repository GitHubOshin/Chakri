import HeaderFirstPage from '../components/firstPage/HeaderFirstPage'
import SearchingFirstPage from '../components/firstPage/SearchingFirstPage'
import PeopleHaveFoundJobFirstPage from '../components/firstPage/PeopleHaveFoundJobFirstPage'

function FirstPage() {
  return (
    <div className="bg-[#f9fdfb] flex flex-col screen1280:items-center">
      <HeaderFirstPage />
      <div className="screen1280:flex">
        <SearchingFirstPage />
        <PeopleHaveFoundJobFirstPage />
      </div>
    </div>
  )
}

export default FirstPage
