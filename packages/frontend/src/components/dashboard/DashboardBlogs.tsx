import React, { useState } from "react";
import { Box, Table, Thead, Tr, Th, Tbody, Td, Button } from "@chakra-ui/react";
import DashboardBlogsItems from "./DashboardBlogsItems/DashboardBlogsItems";
import { constants } from "../../constant";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import api from "../../utils/axiosInstance";
export interface IPosts {
  _id: string;
  title: string;
  date: string;
  status: "public" | "private";
}

const DashboardBlogs = () => {
  const [cookies, setCookie] = useCookies(["token", "user_id", "username"]);

  const [posts, setPosts] = useState<IPosts[]>([]);
  const getBlogs = async () => {
    try {
      const res = await api.get(`/blog?me=${cookies.user_id}`);
      const data = res.data.results;
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);
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
            return (
              <DashboardBlogsItems
                key={index}
                setPosts={setPosts}
                {...element}
              />
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

export default DashboardBlogs;
