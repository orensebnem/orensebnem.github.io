import {SPersonnel} from "../../personnel";
import {SMenuProps} from "../../menus/index.menu";
import {SLogoProps} from "../../logo";
import {SInformationProps} from "../../information";
import {SAvatarProps} from "../../avatar";
import {SLayout} from "../../layout/index";


export const AboutMePage = () => {

    const portfoliosData = [{
        title: "Scootie",
        description: "In two years Ooup will be the most preferred and convenient transportation method in Europe",
        headerImageSrc: '/images/portfolios/scootie-mobile-app',
        badgesProps: {
            data: ["mobile"]
        }
    },
        {
            title: "Playtime",
            description: "Help working parents work collaboratively to keep their children busy and happy with playgroup sessions during school holidays",
            headerImageSrc: '/images/portfolios/playtime-mobile-app',
            badgesProps: {
                data: ["mobile"]
            }
        },
        {
            title: "Linkedin Student",
            description: "The new graduates are pretty overwhelmed and frustrated with being inexperienced in job seeking.",
            headerImageSrc: '/images/portfolios/linkedin-student-app',
            badgesProps: {
                data: ["mobile"]
            }
        }]

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