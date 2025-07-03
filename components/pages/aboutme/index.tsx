import {SPersonnel} from "../../personnel";
import {SInformationProps} from "../../information";
import {SAvatarProps} from "../../avatar";
import {SLayout} from "../../layout/index";


export const AboutMePage = () => {

    const sAvatarProps: SAvatarProps = {imageName: "sebnemWithBackground.png"}
    const sInformationProps: SInformationProps = {
        title: "Product manager",
        subtitle: "Hi, I'm Sebnem",
        description: `
        Product Manager with a passion for solving problems and delivering 
        compelling customer experiences based on data to generate value for users 
        and organizations. Ability to interact with internal and external business clients, 
        technical teams and end-users in conveying solutions effectively. 
        `
    }

    return (
        <SLayout sMenuSelected="about me" backgroundColor="#FFF">
            <SPersonnel avatarProps={sAvatarProps}
                        informationProps={sInformationProps}/>
        </SLayout>
    )
}