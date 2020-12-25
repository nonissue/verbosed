import { Flex, Heading, useColorModeValue, Box } from "@chakra-ui/react";
import { ExternalLink } from "src/components";
import { WordItem } from "src/interfaces";
// import { Word } from "@prisma/client";

export const Hero: React.FunctionComponent<{ word: WordItem }> = ({ word }) => {
  const definitionColor = useColorModeValue("gray.600", "gray.300");
  const dateColor = useColorModeValue("gray.400", "gray.600");
  const svgOpacity = useColorModeValue(4, 0.5);

  return (
    <Box
      backgroundImage={`url("data:image/svg+xml,%3Csvg preserveAspectRatio='none' viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg' width='100%25' id='blobSvg'%3E%3Cdefs%3E%3ClinearGradient id='gradient' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color: rgba(45, 55, 72, ${
        0.3 / svgOpacity
      });'%3E%3C/stop%3E%3Cstop offset='100%25' style='stop-color: rgba(74, 85, 104, ${
        0.2 / svgOpacity
      });'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath id='blob' d='M393,298.5Q327,347,276.5,351.5Q226,356,133.5,353Q41,350,97,276.5Q153,203,184.5,151.5Q216,100,271.5,127Q327,154,393,202Q459,250,393,298.5Z' fill='none' stroke-width='2px' stroke='url(%23gradient)'%3E%3C/path%3E%3C/svg%3E"), url("data:image/svg+xml,%0A%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg' width='100%25' id='blobSvg'%3E%3Cdefs%3E%3ClinearGradient id='gradient' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color: rgba(45, 55, 72, ${
        0.3 / svgOpacity
      });'%3E%3C/stop%3E%3Cstop offset='100%25' style='stop-color: rgba(74, 85, 104,${
        0.05 / svgOpacity
      });'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath id='blob' d='M387,282.5Q302,315,266,326.5Q230,338,182,322Q134,306,106.5,237Q79,168,155.5,170Q232,172,265,181Q298,190,385,220Q472,250,387,282.5Z' fill='none' stroke-width='0.5px' stroke='url(%23gradient)'%3E%3C/path%3E%3C/svg%3E"), url("data:image/svg+xml,%3Csvg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' width='100%25' id='blobSvg'%3E%3Cdefs%3E%3ClinearGradient id='gradient' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color: rgba(45, 55, 72, ${
        0.1 / svgOpacity
      });'%3E%3C/stop%3E%3Cstop offset='100%25' style='stop-color: rgba(74, 85, 104, ${
        0.3 / svgOpacity
      });'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath id='blob' d='M350.5,296Q323,342,266,386Q209,430,168,369.5Q127,309,143.5,258Q160,207,195.5,186Q231,165,317,111.5Q403,58,390.5,154Q378,250,350.5,296Z' fill='none' stroke-width='1.5px' stroke='url(%23gradient)'%3E%3C/path%3E%3C/svg%3E")`}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      position="absolute"
      top="10px"
      overflowX="hidden"
      backgroundSize={["250% 125%", "contain"]}
      width="100%"
      height="100%"
    >
      <Flex
        justifyContent="center"
        flexDirection="column"
        maxW="min(65ch, 100%)"
        width={["75%", "50%"]}
        position="absolute"
        transform="translate(-50%,-50%)"
        top="50%"
        left="50%"
        textAlign="center"
      >
        <Heading size="xl" mb="4" fontWeight="400" fontFamily="serif">
          {word.title}{" "}
          <ExternalLink
            href={`https://dictionary.cambridge.org/dictionary/english/${word.title}`}
          />
        </Heading>

        <Heading
          size="md"
          fontWeight="350"
          letterSpacing="-0.02em"
          color={definitionColor}
          fontStyle="italic"
          lineHeight="1.4"
        >
          {word.definition}
        </Heading>

        <Heading
          size="xs"
          fontWeight="400"
          fontFamily="body"
          color={dateColor}
          letterSpacing="0.2em"
          mt="4"
          lineHeight="1.4"
        >
          {word.publishedDate.split("T")[0]}
        </Heading>
      </Flex>
    </Box>
  );
};
