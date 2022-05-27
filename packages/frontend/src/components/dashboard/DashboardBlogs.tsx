import React, { useState } from "react";
import { Box, Table, Thead, Tr, Th, Tbody, Td, Button } from "@chakra-ui/react";
import DashboardBlogsItems from "./DashboardBlogsItems/DashboardBlogsItems";

export interface IPosts {
  title: string;
  date: string;
  status: "public" | "private";
}

const DashboardBlogs = () => {
  const [posts, setPosts] = useState<IPosts[]>([
    { title: "The man behind", date: "some date", status: "public" },
    { title: "The man behind", date: "some date", status: "public" },
    { title: "The man behind", date: "some date", status: "public" },
    { title: "The man behind", date: "some date", status: "private" },
    { title: "The man behind", date: "some date", status: "public" },
    { title: "The man behind", date: "some date", status: "public" },

    // TODO Implement pagination later on
  ]);
  return (
    <Box w="100%">
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Date</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody maxHeight="50%">
          {posts.map((element, index) => {
            return <DashboardBlogsItems key={index} {...element} />;
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

export default DashboardBlogs;
