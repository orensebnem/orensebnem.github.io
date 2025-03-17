import { Box, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaGlobe, FaLinkedin } from "react-icons/fa";

const MeCard = () => {
  return (
    <Box 
      width="100%" 
      py={4}
      borderBottom="1px"
      borderColor="gray.200"
      mb={6}
    >
      <HStack spacing={6} align="center">
        <Box 
          width="8vw"  // Resim container'ı için responsive genişlik
          height="8vw"  // Kare görünüm için aynı değer
          minWidth="80px"  // Minimum boyut
          minHeight="80px"
        >
          <Image
            src="/images/sebnem.jpeg"
            alt="Sebnem Oren"
            borderRadius="full"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Box>
        
        <VStack align="start" spacing={3}>
          <Text
            fontSize="1.8vw"
            fontWeight="bold"
            color="teal.600"
          >
            SEBNEM OREN
          </Text>

          <VStack align="start" spacing={2}>
            <HStack spacing={2}>
              <Box fontSize="1.1vw">
                <FaGlobe />
              </Box>
              <Link 
                href="https://www.sebnemoren.com" 
                isExternal
                fontSize="1.1vw"
                color="gray.600"
              >
                www.sebnemoren.com
              </Link>
            </HStack>

            <HStack spacing={2}>
              <Box fontSize="1.1vw">
                <FaMapMarkerAlt />
              </Box>
              <Text 
                fontSize="1.1vw"
                color="gray.600"
              >
                Istanbul, Turkiye
              </Text>
            </HStack>

            <HStack spacing={2}>
              <Box fontSize="1.1vw">
                <FaLinkedin />
              </Box>
              <Link 
                href="https://www.linkedin.com/in/sebnemoren" 
                isExternal
                fontSize="1.1vw"
                color="gray.600"
              >
                www.linkedin.com/in/sebnemoren
              </Link>
            </HStack>
          </VStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default MeCard;