import { faArrowDown, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DISLIKE, LIKE, SAVE, SAVED } from "../../constants/constants";
import { SelectedVideoOptionContainer, SelectedVideoOptionText } from "./styledComponents";

interface VideoOptionProps {
    name: string;
}

const SelectedVideoOption = (props: VideoOptionProps) => {
   const { name } = props;
    const optionName= name.charAt(0).toUpperCase() + name.slice(1);
    let logo = faThumbsUp;
    if (props.name === LIKE) {
        logo = faThumbsUp;
    }
    else if (props.name === DISLIKE) {
        logo = faThumbsDown;
    }
    else if (props.name === SAVE) {
        logo = faArrowDown;
    }


    return (
        <SelectedVideoOptionContainer>
            <FontAwesomeIcon 
            style={{marginRight: "10px"}}
            icon={logo} />
            <SelectedVideoOptionText>
                {optionName}
            </SelectedVideoOptionText>
        </SelectedVideoOptionContainer>
    );
}
export default SelectedVideoOption;