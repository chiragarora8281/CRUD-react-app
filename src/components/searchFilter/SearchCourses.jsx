import { CiSearch } from "react-icons/ci";
const SearchCourses = ({ handleSearch }) => {
  return (
    <div className="searchBlock">
        <span className="searchIcon">
            <input type="text" placeholder="search courses..." onInput={e => handleSearch(e.target.value)}/>
        </span>
        <span className="searchIcon">
        <CiSearch />   
        </span>
    </div>
  )
}

export default SearchCourses