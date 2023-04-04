import { inject, observer } from "mobx-react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NXT_WATCH_LOGO_LIGHT } from "../../constants/ImageUrl";
import { BannerStore } from "../../stores/BannerStore";
import { NxtWatchLogo } from "../LoginRoute/styledComponents";
import { Button, HomeBannerContainer, HomeBannerContentContainer, HomeBannerDescription, HomeBannerHeading, HomeBannerLeftContainer, HomeBannerRightContainer, } from "./styledComponents"


interface HomeBannerProps {
}

interface injectedProps extends HomeBannerProps {
    bannerStore: BannerStore;
}
const HomeBanner =
    inject("bannerStore")(
        observer((props: HomeBannerProps) => {
            const { bannerStore } = props as injectedProps;
            const onClickClose = () => {
                bannerStore.setBannerState(false);
            }
            return bannerStore.bannerState ? (
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
                        <HomeBannerRightContainer >
                            <FontAwesomeIcon icon={
                                faClose
                            }
                                style={{
                                    // marginRight: "20px",
                                    marginTop: "20px",
                                    right: "20px",

                                }}
                                cursor="pointer"
                                onClick={onClickClose} />
                        </HomeBannerRightContainer>
                    </HomeBannerContentContainer>

                </HomeBannerContainer>

            ) : null;
        }));
export default HomeBanner;