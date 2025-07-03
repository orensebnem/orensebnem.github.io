import {SInformation, SInformationProps} from "../information";
import {SAvatarProps} from "../avatar";

interface SPersonnelProps {
    avatarProps: SAvatarProps;
    informationProps: SInformationProps;
}

export const SPersonnel = ({
                               avatarProps,
                               informationProps
                           }: SPersonnelProps) => {

    const {imageName} = avatarProps
    const {
        title,
        subtitle,
        description
    } = informationProps

    return (

        <SInformation
            title={title}
            subtitle={subtitle}
            description={description}/>

    )
}