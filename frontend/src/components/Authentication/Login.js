import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import OpenEye from "../../assets/open-eye.png";
import CloseEye from "../../assets/closed-eye.png";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handlePassword = () => setShow(!show);
  const handleSubmit = () => {};
  return (
    <VStack spacing={"5px"}>
      <FormControl id="loginEmail" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </FormControl>
      <FormControl id="loginPassword" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <InputRightElement>
            <Button
              onClick={handlePassword}
              bg={"transparent"}
              p={"12px"}
              _hover={{ bg: "transparent" }}
            >
              {show ? (
                <img src={CloseEye} alt="Close Eye" />
              ) : (
                <img src={OpenEye} alt="Open Eye" />
              )}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        type="submit"
        colorScheme="red"
        width="full"
        mt={4}
        onClick={handleSubmit}
      >
        Login
      </Button>
      <Button
        colorScheme="green"
        width="full"
        mt={4}
        onClick={() => {
          setEmail("akumar300599@gmail.com");
          setPassword("12345678");
          console.log(email, password);
        }}
      >
        Get Credentials
      </Button>
    </VStack>
  );
};

export default Login;
