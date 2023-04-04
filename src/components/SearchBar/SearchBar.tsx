import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SEARCHBAR_INPUT } from "../../constants/constants";
import { videoStore } from "../../stores";
import InputField from "../InputField";
import { SearchBarDiv, SearchBarContainer, SearchIcon } from "./styledComponents";


interface HomeSearchBarProps {
    onClickSearch: () => void;
}

const SearchBar = (props: HomeSearchBarProps) => {
    const handleChange = (value: string) => {
        videoStore.searchInput = value;

    }
    const onClickSearch = () => {
        props.onClickSearch();
    }
    return (
        <SearchBarDiv>
            <SearchBarContainer>
                <InputField type={SEARCHBAR_INPUT} placeholder="Search" onChange={handleChange} />
                <SearchIcon onClick={onClickSearch}>
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </SearchIcon>
            </SearchBarContainer>
        </SearchBarDiv>
    )
}
export default SearchBar;