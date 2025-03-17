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
    <VStack spacing={6} align="stretch">
      {sections.map((section, sectionIndex) => (
        <Box key={sectionIndex}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            {section.title}
          </Text>
          <VStack align="start" spacing={3}>
            {section.items.map((item, itemIndex) => (
              <Box key={itemIndex}>
                <Text fontWeight="medium">{item.title}</Text>
                <VStack align="start" spacing={1} mt={1}>
                  {item.subItems.map((subItem, subItemIndex) => (
                    <Text key={subItemIndex} pl={4}>
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