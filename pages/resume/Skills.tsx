import { Box, Text, VStack } from "@chakra-ui/react";

interface SubItem {
  description: string;
}

interface SkillItem {
  title: string;
  subItems: SubItem[];
}

interface SkillSection {
  title: string;
  items: SkillItem[];
}

interface SkillsProps {
  sections: SkillSection[];
}

const Skills = ({ sections }: SkillsProps) => {
  return (
    <VStack spacing={2} align="stretch">
      {sections?.map((section, sectionIndex) => (
        <Box key={sectionIndex}>
          <Text 
            fontSize="1.5vw"
            fontWeight="bold"
            mb={2}
          >
            {section.title}
          </Text>
          <VStack align="start" spacing={2}>
            {section.items?.map((item, itemIndex) => (
              <Box key={itemIndex}>
                <Text 
                  fontSize="1.3vw"
                  fontWeight="medium"
                  mb={1}
                >
                  {item.title}
                </Text>
                <VStack 
                  align="start" 
                  spacing={2}
                >
                  {item.subItems?.map((subItem, subItemIndex) => (
                    <Text 
                      key={subItemIndex} 
                      pl={4}
                      fontSize="1.1vw"
                      lineHeight="1.6"
                    >
                      {subItem.description}
                    </Text>
                  ))}
                </VStack>
              </Box>
            ))}
          </VStack>
        </Box>
      ))}
    </VStack>
  );
};

export default Skills;