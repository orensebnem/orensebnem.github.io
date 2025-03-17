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

export const Skills = ({ sections }: SkillsProps) => {
  return (
    <VStack spacing="clamp(12px, 1.5vw, 24px)" align="stretch">
      {sections.map((section, sectionIndex) => (
        <Box key={sectionIndex}>
          <Text 
            fontSize="clamp(16px, 2vw, 24px)"
            fontWeight="bold" 
            mb="clamp(8px, 1vw, 16px)"
          >
            {section.title}
          </Text>
          <VStack align="start" spacing="clamp(8px, 1vw, 16px)">
            {section.items.map((item, itemIndex) => (
              <Box key={itemIndex}>
                <Text 
                  fontSize="clamp(14px, 1.8vw, 20px)"
                  fontWeight="medium"
                >
                  {item.title}
                </Text>
                <VStack 
                  align="start" 
                  spacing="clamp(4px, 0.8vw, 12px)"
                  mt="clamp(4px, 0.8vw, 12px)"
                >
                  {item.subItems.map((subItem, subItemIndex) => (
                    <Text 
                      key={subItemIndex} 
                      pl={4}
                      fontSize="clamp(12px, 1.6vw, 18px)"
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