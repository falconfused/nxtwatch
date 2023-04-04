import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {videoStore} from "../../stores";
import InputFieldSearchBar from "../InputFieldSearchBar";
import { Input } from "./styledComponents";
import { SearchBarDiv,SearchBarContainer, SearchIcon } from "./styledComponents";


interface HomeSearchBarProps {
    onClickSearch: () => void;
}

const SearchBar = (props:HomeSearchBarProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        videoStore.searchInput = event.target.value;

    }
    const onClickSearch = () => {
        props.onClickSearch();
    }
    return (
        <SearchBarDiv>
        <SearchBarContainer>
            <InputFieldSearchBar  placeholder="Search" onChange={handleChange} />
            <SearchIcon  onClick={onClickSearch}>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </SearchIcon>
        </SearchBarContainer>
        </SearchBarDiv>
    )
}
export default SearchBar;