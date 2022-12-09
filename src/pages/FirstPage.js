import HeaderFirstPage from '../components/firstPage/HeaderFirstPage'
import SearchingFirstPage from '../components/firstPage/SearchingFirstPage'
import PeopleHaveFoundJobFirstPage from '../components/firstPage/PeopleHaveFoundJobFirstPage'

function FirstPage() {
  return (
    <div className="">
      <HeaderFirstPage />
      <div>
        <SearchingFirstPage />
        <PeopleHaveFoundJobFirstPage />
      </div>
    </div>
  )
}

export default FirstPage
