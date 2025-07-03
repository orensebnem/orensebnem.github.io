import {Center, Heading} from "@chakra-ui/react";


const Section = ({title}:{title:string}) => {
    return(
        <Center
            height={[100,100,140,180]}>
            <Heading as="h1"
                     id={title}
                     fontSize={["xl","2xl","3xl","4xl"]}>
                {title}
            </Heading>
        </Center>
    )
}

export default Section