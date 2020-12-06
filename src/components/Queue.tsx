import {
  Stack,
  Box,
  Icon,
  Button,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { ArchiveWordList } from "src/interfaces";
import { BiParagraph } from "react-icons/bi";
import { ExternalLink } from ".";

export const Queue: React.FunctionComponent<{ list: ArchiveWordList }> = ({
  list,
}) => {
  let index = 0;
  const dateColor = useColorModeValue("gray.400", "gray.500");

  return (
    <Stack justifyContent="center" flexDirection="column">
      {list.map((word) => {
        index = ++index;
        const alignment = index % 2 == 0 ? "left" : "left";

        return (
          <Box key={word.id} mb="4">
            <Box
              flex="1"
              display="flex"
              justifyContent="space-between"
              textAlign={alignment}
              alignItems="center"
              mb="4"
            >
              <Box fontSize="2xl" fontFamily="serif">
                {word.title}{" "}
                <ExternalLink
                  href={`https://en.wiktionary.org/wiki/${word.title}`}
                />
              </Box>
              <Button
                size="xs"
                borderRadius="2px"
                variant="outline"
                colorScheme="gray"
                shadow="sm"
              >
                Publish
              </Button>
            </Box>
            <Box
              display="flex"
              flexDirection={["column", "row"]}
              mb="4"
              lineHeight="3.5"
            >
              <Box
                fontWeight="300"
                fontFamily="body"
                color={dateColor}
                fontSize="sm"
                mb="2"
                width={["100%", "35%"]}
                mr={["0", "4"]}
              >
                <Box display="flex" justifyContent="space-between">
                  <Box>Published:</Box>
                  <Box fontFamily="body">
                    {word.publishedDate.split("T")[0]}
                  </Box>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Box>Created</Box>
                  <Box fontFamily="body">{word.createdAt.split("T")[0]}</Box>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Box>Updated:</Box>
                  <Box fontFamily="body">{word.updatedAt.split("T")[0]}</Box>
                </Box>
              </Box>
              <Box
                width={["100%", "65%"]}
                fontFamily="body"
                fontSize="sm"
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
            </Box>

            <Divider />
          </Box>
        );
      })}
    </Stack>
  );
};
