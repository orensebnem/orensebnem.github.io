import { Box, Text, VStack, Link } from "@chakra-ui/react";

interface WorkExperienceItem {
  description: string;
}

interface WorkExperienceProps {
  experience: {
    role?: string;
    company?: string;
    period?: string;
    website?: string;
    items?: WorkExperienceItem[];
  };
}

const WorkExperience = ({ experience }: WorkExperienceProps) => {
  return (
    <Box width="100%">
      <Text 
        fontSize="1.5vw"
        fontWeight="bold"
        mb={2}
      >
        {experience?.role}
      </Text>

      {experience?.website ? (
        <Link 
          href={experience?.website}
          isExternal
          fontSize="1.3vw"
          fontWeight="medium"
          display="block"
          mb={1}
          color="blue.500"
        >
          {experience?.company}
        </Link>
      ) : (
        <Text
          fontSize="1.3vw"
          fontWeight="medium"
          mb={1}
        >
          {experience?.company}
        </Text>
      )}

      <Text 
        fontSize="1.1vw"
        color="gray.600"
        mb={3}
      >
        {experience?.period}
      </Text>

      <VStack spacing={2} align="start">
        {experience?.items?.map((item, index) => (
          <Text 
            key={index}
            fontSize="1.1vw"
            lineHeight="1.6"
          >
            • {item.description}
          </Text>
        ))}
      </VStack>
    </Box>
  );
};

export default WorkExperience;