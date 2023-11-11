import React from "react";
import {
  Box,
  Container,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { Login, SignUp } from "../components/Authentication";

const Home = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={"6"}
        bg={"white"}
        w={"100%"}
        margin={"20px"}
        borderRadius={"lg"}
      >
        <Text align={"center"} fontSize="3xl">
          Let's Connect
        </Text>
      </Box>
      <Box w={"100%"} bg={"white"} borderRadius={"lg"} p={"6"} color={"black"}>
        <Tabs variant="soft-rounded" colorScheme={"red"}>
          <TabList mb={"1em"}>
            <Tab w={"50%"}>Login</Tab>
            <Tab w={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Home;
