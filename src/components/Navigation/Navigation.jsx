import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";

import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { selectAuthIsSignedIn } from "../../redus/authSelectors";


const Navigation = () => {
  const isSignedIn = useSelector(selectAuthIsSignedIn);
  const { pathname } = useLocation();

  return (
    <Box
      as="header"
      bg="grey"
      color="white"
      minH="50px"
      p="10px"
      pl="2rem"
      pr="2rem"
    >
      <Flex justifyContent={"space-between"} alignItems="center">
        <ChakraLink
          to="/"
          as={Link}
          _hover={{
            textDecoration: "none",
            bg: "orange",
            color: "black",
            rounded: "4px",
          }}
          fontWeight="bold"
          color={pathname === "/" ? "orange" : "white"}
        >
          Home
        </ChakraLink>

        {isSignedIn ? (
          <>
            <ChakraLink
              to="/gallery"
              as={Link}
              _active={{ color: "red" }}
              _hover={{
                textDecoration: "none",
                bg: "orange",
                color: "black",
                rounded: "4px",
              }}
              fontWeight="bold"
              color={pathname === "/gallery" ? "orange" : "white"}
            >
              Gallery
            </ChakraLink>
            
          </>
        ) : (
          <>
            {/* <ChakraLink
              to="/register"
              as={Link}
              _hover={{
                textDecoration: "none",
                bg: "orange",
                color: "black",
                rounded: "4px",
              }}
              fontWeight="bold"
              color={pathname === "/register" ? "orange" : "white"}
            >
              Register
            </ChakraLink> */}
            <ChakraLink
              to="/login"
              as={Link}
              _hover={{
                textDecoration: "none",
                bg: "orange",
                color: "black",
                rounded: "4px",
              }}
              fontWeight="bold"
              color={pathname === "/login" ? "orange" : "white"}
            >
              Login
            </ChakraLink>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Navigation;
