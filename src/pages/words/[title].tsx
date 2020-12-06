import { Box } from "@chakra-ui/react";
import { Container, Nav, Heading } from "src/components";
import { GetServerSideProps } from "next";
import { WordItem } from "src/interfaces";

import db from "prisma";
const prisma = db.getInstance().prisma;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let word = undefined;
  console.log(context.params);

  try {
    word = await prisma.word.findFirst({
      where: { published: true, title: context.params?.title as string },
    });
  } catch (error) {
    throw new Error(error);
  }

  return {
    props: { wordJSON: JSON.stringify(word) },
  };
};

const WordPage: React.FunctionComponent<{ wordJSON: string }> = ({
  wordJSON,
}) => {
  const word: WordItem = JSON.parse(wordJSON);

  console.log(word);

  return (
    <Container>
      <Nav />

      <Box
        px={["6", "6", "4", "4"]}
        width="100vw"
        maxW="min(65ch, 100%)"
        m="auto"
      >
        <Heading title="Word" />

        <Box justifyItems="left" width="100%">
          {word.title}
        </Box>
        <Box justifyItems="left" width="100%">
          {word.definition}
        </Box>
      </Box>
    </Container>
  );
};

export default WordPage;
