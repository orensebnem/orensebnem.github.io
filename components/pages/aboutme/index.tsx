import {SPersonnel} from "../../personnel";
import {SMenuProps} from "../../menus/index.menu";
import {SLogoProps} from "../../logo";
import {SInformationProps} from "../../information";
import {SAvatarProps} from "../../avatar";
import {SLayout} from "../../layout/index";


export const AboutMePage = () => {

    const sAvatarProps: SAvatarProps = {imageName: "sebnem-2.png"}
    const sInformationProps: SInformationProps = {
        title: "Product manager",
        subtitle: "Sebnem Oren",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type "
    }

    return (
        <SLayout sMenuSelected="about me">
            <SPersonnel avatarProps={sAvatarProps}
                        informationProps={sInformationProps}/>
        </SLayout>
    )
}