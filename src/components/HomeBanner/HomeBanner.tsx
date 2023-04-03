import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { NXT_WATCH_LOGO_LIGHT } from "../../constants/ImageUrl";
import { navigationStore } from "../../stores";
import { NxtWatchLogo } from "../LoginRoute/styledComponents";
import { Button, HomeBannerContainer, HomeBannerContentContainer, HomeBannerDescription, HomeBannerHeading, HomeBannerLeftContainer, HomeBannerRightContainer, } from "./styledComponents"
const HomeBanner = observer(() => {


    const onClickClose = () => {
        navigationStore.setBannerState(false);
    }


    return navigationStore.bannerState ? (
        <HomeBannerContainer>
            <HomeBannerContentContainer
            >
                <HomeBannerLeftContainer>
                    <NxtWatchLogo src={NXT_WATCH_LOGO_LIGHT} />
                    <HomeBannerDescription>
                        Buy Nxt Watch Premium Prepaid Plans with <br /> UPI!
                    </HomeBannerDescription>
                    <Button>GET IT NOW</Button>
                </HomeBannerLeftContainer>
                <HomeBannerRightContainer />
                <FontAwesomeIcon icon={
                    faClose
                }
                    style={{
                        marginRight: "20px",
                    }}
                    cursor="pointer"
                    onClick={onClickClose} />

            </HomeBannerContentContainer>

        </HomeBannerContainer>

    ) : null;
});
export default HomeBanner;