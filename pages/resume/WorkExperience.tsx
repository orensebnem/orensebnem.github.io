import React from 'react';
import { Box, Heading, Text, Link, UnorderedList, ListItem, HStack, VStack } from '@chakra-ui/react';
import { WorkExperience as WorkExperienceType } from '../../interfaces/resume/WorkExperience';

interface Props {
    experience: WorkExperienceType;
}

export const WorkExperience: React.FC<Props> = ({ experience }) => {
    const { role, company, period, website, items } = experience;

    return (
        <Box mb={8}>
            <Heading as="h3" size="md" mb={2}>
                {role}
            </Heading>
            <HStack spacing={2} color="gray.600" mb={4}>
                <Text>{company}</Text>
                <Text>·</Text>
                <Text>{period}</Text>
                {website && (
                    <>
                        <Text>·</Text>
                        <Link
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            color="blue.500"
                            _hover={{ color: 'blue.600', textDecoration: 'none' }}
                        >
                            {website.replace('https://', '')}
                        </Link>
                    </>
                )}
            </HStack>
            <UnorderedList spacing={2} pl={4}>
                {items.map((item, index) => (
                    <ListItem key={index} color="gray.700">
                        {item.description}
                    </ListItem>
                ))}
            </UnorderedList>
        </Box>
    );
}; 