import {SPersonnel} from "../../personnel";
import {SInformationProps} from "../../information";
import {SAvatarProps} from "../../avatar";
import {SLayout} from "../../layout/index";


export const AboutMePage = () => {

    const sAvatarProps: SAvatarProps = {imageName: "sebnem.jpeg"}
    const sInformationProps: SInformationProps = {
        title: "Product manager",
        subtitle: "Sebnem Oren",
        description: `
        Product enthusiast with a passion for solving problems and delivering 
        compelling customer experiences based on data to generate value for users 
        and organizations. Ability to interact with internal and external business clients, 
        technical teams and end-users in conveying solutions effectively. 
        Project management skills with balancing competing priorities 
        for complex projects and the ability to thrive in interdisciplinary teams.
        `
    }

    return (
        <SLayout sMenuSelected="about me" backgroundColor="#FFF">
            <SPersonnel avatarProps={sAvatarProps}
                        informationProps={sInformationProps}/>
        </SLayout>
    )
}