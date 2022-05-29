// components
import { IPosts } from "../DashboardBlogs";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Tr, Td, Box, Button } from "@chakra-ui/react";
// utils
import FormatData from "../../../utils/timeFormat";
import axios from "axios";
import redirect from "../../../utils/redirect";
// styles
import s from "../../../styles/DashboardBlogsItems.module.css";
import { constants } from "../../../constant";
import { useCookies } from "react-cookie";

interface IDashboardBlogsItems extends IPosts {
  setPosts?: React.Dispatch<React.SetStateAction<IPosts[]>>;
}

const DashboardBlogsItems = ({
  _id,
  title,
  date,
  status,
  setPosts,
}: IDashboardBlogsItems) => {
  const [cookies, setCookie] = useCookies(["token", "user_id", "username"]);

  const HandleDelete = async () => {
    try {
      const res = await axios.delete(`${constants.URL}/blog`, {
        data: {
          // @ts-ignore
          owner_id: cookies.user_id,
          blog_id: _id,
        },
      });
      console.log(_id);

      setPosts &&
        setPosts((prev) => prev.filter((element) => element._id !== _id));
      console.log(res);

      return true;
    } catch (error) {
      return false;
    }
  };
  return (
    <Tr>
      <Td w="25%">{title}</Td>
      <Td w="40%">{FormatData(date)}</Td>
      <Td w="10%">{status}</Td>
      <Td w="20%">
        <Box w="100%" display="flex" flex-wrap="wrap">
          <Button
            onClick={() => redirect(`/edit/${_id}`)}
            _hover={{ background: "rgba(0, 116, 88, .6)" }}
            color="white"
            bg="rgba(0, 116, 88, 1)"
          >
            <AiFillEdit className={s.icon} />
          </Button>
          <Button
            onClick={HandleDelete}
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
