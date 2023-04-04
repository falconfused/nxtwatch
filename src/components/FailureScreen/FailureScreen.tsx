import { inject, observer } from "mobx-react";
import { API_FAILURE, NO_SAVED_VIDEOS, Theme } from "../../constants/constants";
import { FAILURE_VIEW_IMAGE_DARK, FAILURE_VIEW_IMAGE_LIGHT, NO_SAVED_VIDEOS_VIEW_IMAGE, NO_VIDEOS_VIEW_IMAGE_DARK, NO_VIDEOS_VIEW_IMAGE_LIGHT } from "../../constants/ImageUrl";
import { ThemeStore } from "../../stores/ThemeStore";
import { FailureScreenContainer, FailureScreenHeading, FailureScreenImage, FailureScreenMessage, FailureScreenRetryButton } from "./styledComponents";

interface FailureScreenProps {
    failureType: string;
    failureTitle: string;
    failureMessage: string;
    onRetry?: () => void;

}

interface InjectedProps extends FailureScreenProps {
    themeStore: ThemeStore;
}
const FailureScreen =
    inject("themeStore")(
        observer(
            (props: FailureScreenProps) => {
                let imageURL = "";
                const { failureType, failureTitle, failureMessage, onRetry } = props;
                const { themeStore } = props as InjectedProps;
                if (failureType === API_FAILURE) imageURL = themeStore.theme === Theme.LIGHT ? FAILURE_VIEW_IMAGE_LIGHT : FAILURE_VIEW_IMAGE_DARK;
                else if (failureType === "NO_RESULTS") imageURL = themeStore.theme === Theme.LIGHT ? NO_VIDEOS_VIEW_IMAGE_LIGHT : NO_VIDEOS_VIEW_IMAGE_DARK;
                else if (failureType === "404") imageURL = themeStore.theme === Theme.LIGHT ? NO_VIDEOS_VIEW_IMAGE_LIGHT : NO_VIDEOS_VIEW_IMAGE_DARK;
                else imageURL = NO_SAVED_VIDEOS_VIEW_IMAGE;
                return (
                    <FailureScreenContainer>
                        <FailureScreenImage src={imageURL} alt="failure view" />
                        <FailureScreenHeading>{failureTitle}</FailureScreenHeading>
                        <FailureScreenMessage>{failureMessage}</FailureScreenMessage>
                        {failureType != NO_SAVED_VIDEOS && <FailureScreenRetryButton onClick={onRetry}>Retry</FailureScreenRetryButton>}
                    </FailureScreenContainer>
                );
            }))
export default FailureScreen;