import {
  Stack,
  Box,
  Accordion,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArchiveWordList } from "src/interfaces";
import { BiParagraph } from "react-icons/bi";
import { ExternalLink } from ".";

export const List: React.FunctionComponent<{ list: ArchiveWordList }> = ({
  list,
}) => {
  let index = 0;
  const dateColor = useColorModeValue("gray.400", "gray.500");

  return (
    <Stack justifyContent="center" flexDirection="column">
      <Accordion allowMultiple colorScheme="pink">
        {list.map((word) => {
          index = ++index;
          const alignment = index % 2 == 0 ? "left" : "left";

          return (
            <Box key={word.id} mb="4">
              <Box flex="1" textAlign={alignment} fontWeight="600">
                {word.title}{" "}
                <ExternalLink
                  href={`https://en.wiktionary.org/wiki/${word.title}`}
                />
              </Box>
              <Box
                fontFamily="body"
                fontSize="sm"
                lineHeight="1.7"
                pb="1"
                textAlign={["justify", "left"]}
                // textJustify={["inter-character", "unset"]}
              >
                <Icon
                  as={BiParagraph}
                  mr="1"
                  ml="1"
                  color="gray.400"
                  display="inline"
                />
                {word.definition}
              </Box>
              <Box
                fontSize="0.8em"
                fontWeight="300"
                fontFamily="body"
                color={dateColor}
                letterSpacing="0.2em"
                lineHeight="1.4"
              >
                {word.publishedDate.split("T")[0]}
              </Box>
            </Box>
          );
        })}
      </Accordion>
    </Stack>
  );
};
