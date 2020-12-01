import { Box } from "@chakra-ui/react";
import { Container, Nav, List, Heading } from "src/components";
import { GetServerSideProps } from "next";
import { ArchiveWordList } from "src/interfaces";

import db from "prisma";
const prisma = db.getInstance().prisma;

export const getServerSideProps: GetServerSideProps = async () => {
  let wordsList = undefined;

  try {
    wordsList = await prisma.word.findMany({
      where: { published: true },
      orderBy: { publishedDate: "desc" },
    });
  } catch (error) {
    throw new Error(error);
  }

  return {
    props: { wordsListJSON: JSON.stringify(wordsList) },
  };
};

const Archive: React.FunctionComponent<{ wordsListJSON: string }> = ({
  wordsListJSON,
}) => {
  const wordsList: ArchiveWordList = JSON.parse(wordsListJSON);

  console.log(wordsList);

  return (
    <Container>
      <Nav />

      <Box
        px={["6", "6", "4", "4"]}
        width="100vw"
        maxW="min(65ch, 100%)"
        m="auto"
      >
        <Heading title="Archive" />

        <Box justifyItems="left" width="100%">
          {wordsList && <List list={wordsList} />}
        </Box>
      </Box>
    </Container>
  );
};

export default Archive;
