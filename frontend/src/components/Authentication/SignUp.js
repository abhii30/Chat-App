import React, { useState } from "react";
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

const SignUp = () => {
  const [showP, setShowP] = useState(false);
  const [showCP, setShowCP] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();

  const handlePassword = () => setShowP(!showP);
  const handleConfirmPassword = () => setShowCP(!showCP);

  const postImage = (pic) => {};
  const handleSubmit = () => {};

  return (
    <VStack spacing={"5px"} color={"black"}>
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={showP ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement>
            <Button onClick={handlePassword} bg={"transparent"} p={"12px"}>
              {showP ? (
                <img src={CloseEye} alt="Close Eye" />
              ) : (
                <img src={OpenEye} alt="Open Eye" />
              )}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="confirm-password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={showCP ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement>
            <Button
              onClick={handleConfirmPassword}
              bg={"transparent"}
              p={"12px"}
            >
              {showCP ? (
                <img src={CloseEye} alt="Close Eye" />
              ) : (
                <img src={OpenEye} alt="Open Eye" />
              )}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="profile-pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1}
          accept="image/*"
          onChange={(e) => postImage(e.target.files[0])}
        />
      </FormControl>
      <Button
        type="submit"
        colorScheme="red"
        width="full"
        mt={4}
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default SignUp;
