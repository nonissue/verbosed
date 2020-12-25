import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuDivider,
  MenuItemOption,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Container, Nav, Queue, Heading } from "src/components";
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
  // useReducer for options state?

  return (
    <Container>
      <Nav />

      <Box
        px={["6", "6", "4", "4"]}
        width="100vw"
        maxW="min(65ch, 100%)"
        m="auto"
      >
        <Box display="flex" alignItems="center">
          <Heading title="Queue" />

          <Menu
            closeOnSelect={false}
            preventOverflow={true}
            placement="bottom-end"
          >
            <MenuButton
              as={Button}
              size="xs"
              px="3"
              fontWeight="bold"
              // variant="outline"
              colorScheme="blue"
              borderRadius="4px"
              shadow="md"
            >
              Options
            </MenuButton>
            <MenuList
              borderRadius="0em"
              // py="2"
              minWidth={["60vw", "200px"]}
              fontSize="sm"
              // borderRadius="2px"
              shadow="xl"
              background={useColorModeValue("white", "gray.800")}
              // background={useColorModeValue(
              //   "hsla(0, 0%, 99%, 0.1)",
              //   "hsla(0, 0%, 10%, 0.1)"
              // )}
              // background="hsla(0, 0%, 90%, 0.5)"
              style={{
                backdropFilter: "blur(15px)",
                WebkitBackdropFilter: "blur(15px)",
              }}
            >
              <MenuOptionGroup
                title="Status"
                mt="2px"
                type="checkbox"
                // my="0"
                onChange={(value) => console.log(value)}
                defaultValue={["pending", "queued"]}
              >
                <MenuItemOption value="pending">Pending</MenuItemOption>
                <MenuItemOption value="queued" type="checkbox">
                  Queued
                </MenuItemOption>
              </MenuOptionGroup>
              <MenuDivider />
              <MenuOptionGroup defaultValue="asc" title="Sort On" type="radio">
                <MenuItemOption value="asc">Date Added</MenuItemOption>
                <MenuItemOption value="desc">Title</MenuItemOption>
              </MenuOptionGroup>
              <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
                <MenuItemOption value="asc">Ascending</MenuItemOption>
                <MenuItemOption value="desc">Descending</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </Box>
        <Box justifyItems="left" width="100%">
          {queuedWordsList && <Queue list={queuedWordsList} />}
        </Box>
      </Box>
    </Container>
  );
};

export default Archive;
