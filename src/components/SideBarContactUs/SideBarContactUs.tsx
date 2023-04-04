import { FACEBOOK_ICON, LINKEDIN_ICON, TWITTER_ICON } from "../../constants/ImageUrl";
import { SideBarContactUsContainer, SideBarContactUsIcon, SideBarContactUsIconContainer, SideBarContactUsText, SideBarContactUsTitle } from "./styledComponents";

const SideBarContactUs = () => {


    return (
        <SideBarContactUsContainer>
            <SideBarContactUsTitle>Contact Us</SideBarContactUsTitle>
            <SideBarContactUsIconContainer>
                <SideBarContactUsIcon src={FACEBOOK_ICON} alt="facebook" />
                <SideBarContactUsIcon src={LINKEDIN_ICON} alt="linkedin" />
                <SideBarContactUsIcon src={TWITTER_ICON} alt="facebook" />
            </SideBarContactUsIconContainer>
            <SideBarContactUsText>
                Enjoy Now to see your channels and recommendations!
            </SideBarContactUsText>
        </SideBarContactUsContainer>
    );
};
export default SideBarContactUs;