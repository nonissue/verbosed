import { Container, Hero, Nav } from "../components";
import { GetServerSideProps } from "next";
import { WordItem } from "src/interfaces";

import db from "prisma";
const prisma = db.getInstance().prisma;

export const getServerSideProps: GetServerSideProps = async () => {
  let word = undefined;

  try {
    word = await prisma.word.findMany({
      where: { published: true },
      orderBy: { publishedDate: "desc" },
    });
  } catch (error) {
    throw new Error(error);
  }

  return {
    props: { wordJSON: JSON.stringify(word[0]) },
  };
};

// fetch latest word
const Index: React.FunctionComponent<{ wordJSON: string }> = ({ wordJSON }) => {
  const word: WordItem = JSON.parse(wordJSON);

  if (!word) {
    return (
      <Container height="98vh">
        <Nav />
        <div>Loading...</div>
      </Container>
    );
  }

  return (
    <Container height="98vh">
      <Nav />
      <Hero word={word} />
    </Container>
  );
};

export default Index;
