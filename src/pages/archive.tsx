import { Box, Heading } from "@chakra-ui/react";
import { Container, Nav, List } from "src/components";
import { GetServerSideProps } from "next";
import { ArchiveWordList } from "src/interfaces";

import db from "prisma";
const prisma = db.getInstance().prisma;

export const getServerSideProps: GetServerSideProps = async () => {
  let data = undefined;

  try {
    data = await prisma.word.findMany({
      where: { published: true },
      orderBy: { publishedDate: "desc" },
    });
  } catch (error) {
    throw new Error(error);
  }

  return {
    props: { data: JSON.stringify(data) },
  };
};

const Archive: React.FunctionComponent<{ data: string }> = ({ data }) => {
  const wordList: ArchiveWordList = JSON.parse(data);

  console.log(wordList);

  return (
    <Container>
      <Nav />

      <Box
        px={["6", "6", "4", "4"]}
        width="100vw"
        maxW="min(65ch, 100%)"
        m="auto"
      >
        <Heading
          size="lg"
          mb="4"
          mt="8"
          justifyItems="left"
          width="100%"
          fontFamily="serif"
          fontWeight="500"
          // letterSpacing="0.05em"
          // textTransform="uppercase"
        >
          Archive
        </Heading>

        <Box justifyItems="left" width="100%">
          {wordList && <List list={wordList} />}
        </Box>
      </Box>
    </Container>
  );
};

export default Archive;