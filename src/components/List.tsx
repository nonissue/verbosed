import {
  Stack,
  Box,
  Accordion,
  Icon,
  Flex,
  Text,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
} from "@chakra-ui/react";
import { NextChakraLink } from "src/components";
import { ArchiveWordList } from "src/interfaces";
import { BiParagraph } from "react-icons/bi";
import { RiParagraph } from "react-icons/ri";

export const List: React.FunctionComponent<{ list: ArchiveWordList }> = ({
  list,
}) => {
  let index = 0;

  return (
    <Stack justifyContent="center" flexDirection="column">
      <Accordion allowMultiple colorScheme="pink">
        {list.map((word) => {
          index = ++index;
          const alignment = index % 2 == 0 ? "left" : "left";

          return (
            <Box key={word.id} mb="4">
              <Box flex="1" textAlign={alignment} fontWeight="600">
                {word.title}
              </Box>
              <Box
                textAlign={alignment}
                fontFamily="serif"
                fontSize="md"
                pb="1"
              >
                {/* <Text> */}
                <Icon
                  as={BiParagraph}
                  mr="1"
                  ml="1"
                  color="gray.400"
                  display="inline"
                />
                {word.definition}
                {/* </Text> */}
              </Box>
              {/* <Box
                fontSize="xs"
                letterSpacing="0.1em"
                textTransform="uppercase"
                fontWeight="300"
                textAlign="right"
                textColor="gray.400"
              >
                <NextChakraLink href="/">More</NextChakraLink>
              </Box> */}
            </Box>
            // <AccordionItem key={word.id} border="0px" borderBottom="1px">
            //   <AccordionButton py="1" px="0">
            //     <Box flex="1" textAlign={alignment} fontWeight="600  ">
            //       {word.title} {alignment} {index}
            //     </Box>
            //     <AccordionIcon />
            //   </AccordionButton>
            //   <AccordionPanel pt="1" px="0" pb="2" fontSize="sm">
            //     {word.definition}
            //   </AccordionPanel>
            // </AccordionItem>
          );
        })}
      </Accordion>
    </Stack>
  );
};
