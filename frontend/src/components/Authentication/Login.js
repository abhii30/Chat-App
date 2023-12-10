import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  VStack,
} from "@chakra-ui/react";
import OpenEye from "../../assets/open-eye.png";
import CloseEye from "../../assets/closed-eye.png";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handlePassword = () => setShow(!show);
  const handleSubmit = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please fill all the fields",
        description: "Please fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }

    //login the user
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      console.log(data);
      setLoading(false);
      navigate("/chats");
    } catch (error) {
      toast({
        title: "User not found",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setLoading(false);
    }
  };

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
        isLoading={loading}
      >
        Login
      </Button>
      <Button
        colorScheme="green"
        width="full"
        mt={4}
        onClick={() => {
          setEmail("akumar@gmail.com");
          setPassword("123456");
          console.log(email, password);
        }}
      >
        Get Credentials
      </Button>
    </VStack>
  );
};

export default Login;
