import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {videoStore} from "../../stores";
import { Input } from "./styledComponents";
import { SearchBarContainer, SearchIcon } from "./styledComponents";

const HomeSearchBar = () => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        videoStore.searchInput = event.target.value;

    }
    const onClickSearch = () => {
        videoStore.fetchHomeVideos();
    }
    return (
        <SearchBarContainer>
            <Input onChange={handleChange}></Input>
            <SearchIcon  onClick={onClickSearch}>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </SearchIcon>
        </SearchBarContainer>
    )
}
export default HomeSearchBar;