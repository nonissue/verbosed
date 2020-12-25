import { GetServerSideProps } from "next";
import { atom, useRecoilState } from "recoil";
import { useColorMode } from "@chakra-ui/react";
import { Container, Hero, Nav } from "src/components";
import { WordItem } from "src/interfaces";

import db from "prisma/index";
import { useEffect } from "react";
const prisma = db.getInstance().prisma;

type initialState = {
  viewport: string;
  uiMode: string;
};

const initState = (): initialState => ({
  viewport: "mobile",
  uiMode: "dark",
});

const uiStateAtom = atom({
  key: "uiModeState",
  default: initState(),
});

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
  const [uiState, setUiState] = useRecoilState(uiStateAtom);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (uiState.uiMode === colorMode) {
      toggleColorMode();
      console.log("changing colormode");
    } else {
      console.log("colormode set");
    }
  }, [uiState.uiMode]);

  return (
    <Container height="98vh" overflowY="hidden">
      <Nav />
      <button
        style={{
          position: "absolute",
          top: "10rem",
          left: "5rem",
          zIndex: 1000,
        }}
        onClick={() =>
          setUiState((ui) => ({
            ...ui,
            uiMode: ui.uiMode === "dark" ? "light" : "dark",
          }))
        }
      >
        Toggle
      </button>
      <Hero word={word} />
    </Container>
  );
};

export default Index;
