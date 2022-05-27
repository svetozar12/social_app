import { Box, UnorderedList, ListItem } from "@chakra-ui/react";
import { constants } from "../constant";
import { useCookies } from "react-cookie";
const Sidebar = ({
  setIsActive,
}: {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "token",
    "user_id",
    "username",
  ]);

  const logout = () => {
    removeCookie("token");
    removeCookie("user_id");
    removeCookie("username");
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  const redirect = (href: string) => {
    setIsActive(false);
    window.location.href = href;
  };

  const ListItemsConfig = [
    {
      link_name: "Public Blogs",
      func_param: `${constants.CLIENT_URL}/blogs`,
      func: redirect,
    },
    {
      link_name: "DashBoard",
      func_param: `${constants.CLIENT_URL}/`,
      func: redirect,
    },
    {
      link_name: "Logout",
      func: logout,
    },
  ];
  return (
    <Box
      pos="fixed"
      left="0"
      zIndex="2"
      bg="white"
      width="25%"
      height="100vh"
      boxShadow="4px 0px 19px -4px rgba(0,0,0,0.75)"
    >
      <UnorderedList
        listStyleType="none"
        display="flex"
        alignItems="flex-start"
        flexDir="column"
        h="80%"
        m="0"
      >
        {ListItemsConfig.map((element, index) => {
          return (
            <ListItem
              _hover={{ background: "rgba(0, 0, 0, 0.1);" }}
              w="100%"
              cursor="pointer"
              pl="1.5rem"
              py="1rem"
              transition=".3s"
              onClick={() => element.func(element.func_param as string)}
              key={index}
            >
              {element.link_name}
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
};

export default Sidebar;
