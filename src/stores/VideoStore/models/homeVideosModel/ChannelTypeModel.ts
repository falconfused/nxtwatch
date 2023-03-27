import { ChannelType } from "../../types";

class ChannelTypeModel {
    name: string = "";
    profileImageUrl: string = "";
    subscriberCount?: string = "";
    constructor({ name, profile_image_url, subscriber_count }: ChannelType) {

        this.name = name;
        this.profileImageUrl = profile_image_url;
        this.subscriberCount = subscriber_count;
    }
}
export default ChannelTypeModel;