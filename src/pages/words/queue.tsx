import { Box } from "@chakra-ui/react";
import { Container, Nav, List, Heading } from "src/components";
import { GetServerSideProps } from "next";
import { ArchiveWordList } from "src/interfaces";

import db from "prisma";
const prisma = db.getInstance().prisma;

export const getServerSideProps: GetServerSideProps = async () => {
  let queuedWordsList = undefined;

  try {
    queuedWordsList = await prisma.word.findMany({
      where: { published: false },
      orderBy: { publishedDate: "desc" },
    });
  } catch (error) {
    throw new Error(error);
  }

  return {
    props: { queuedWordsListJSON: JSON.stringify(queuedWordsList) },
  };
};

const Archive: React.FunctionComponent<{ queuedWordsListJSON: string }> = ({
  queuedWordsListJSON,
}) => {
  const queuedWordsList: ArchiveWordList = JSON.parse(queuedWordsListJSON);

  console.log(queuedWordsList);

  return (
    <Container>
      <Nav />

      <Box
        px={["6", "6", "4", "4"]}
        width="100vw"
        maxW="min(65ch, 100%)"
        m="auto"
      >
        <Heading title="Queue" />

        <Box justifyItems="left" width="100%">
          {queuedWordsList && <List list={queuedWordsList} />}
        </Box>
      </Box>
    </Container>
  );
};

export default Archive;
