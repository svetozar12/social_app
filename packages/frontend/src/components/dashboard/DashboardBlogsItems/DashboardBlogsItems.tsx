import React from "react";
import { Tr, Td, Box, Button } from "@chakra-ui/react";
import { IPosts } from "../DashboardBlogs";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import s from "../../../styles/DashboardBlogsItems.module.css";
interface IDashboardBlogsItems extends IPosts {}

const DashboardBlogsItems = ({ title, date, status }: IDashboardBlogsItems) => {
  return (
    <Tr>
      <Td w="25%">{title}</Td>
      <Td w="40%">{date}</Td>
      <Td w="10%">{status}</Td>
      <Td w="20%">
        <Box
          w="100%"
          display="flex"
          flex-wrap="wrap"

          // alignItems="center"
          // justifyContent="space-between"
        >
          <Button
            _hover={{ background: "rgba(0, 116, 88, .6)" }}
            color="white"
            bg="rgba(0, 116, 88, 1)"
          >
            <AiFillEdit className={s.icon} />
          </Button>
          <Button
            mx="1rem"
            _hover={{ background: "rgba(229, 62, 62, .6)" }}
            color="white"
            bg="red.500"
          >
            <AiFillDelete className={s.icon} />
          </Button>
        </Box>
      </Td>
    </Tr>
  );
};

export default DashboardBlogsItems;
