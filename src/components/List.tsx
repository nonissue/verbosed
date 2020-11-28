import { Stack, Box, Text } from "@chakra-ui/react";
import { ArchiveWordList } from "src/interfaces";

export const List: React.FunctionComponent<{ list: ArchiveWordList }> = ({
  list,
}) => {
  return (
    <Stack justifyContent="center" flexDirection="column">
      {list.map((word) => {
        return (
          <Box key={word.id}>
            <Text fontWeight="600">{word.title}</Text>
            <Text fontFamily="serif">{word.definition}</Text>
          </Box>
        );
      })}
    </Stack>
  );
};
