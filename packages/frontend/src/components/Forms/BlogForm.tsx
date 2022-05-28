import {
  FormControl,
  FormLabel,
  Select,
  Textarea,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import redirect from "../../utils/redirect";

const BlogForm = ({ type }: { type: "edit" | "new" }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [article, setArticle] = useState("");

  const handleSubmitEdit = async (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const obj = { title, status, article };
      console.log("submit", type, obj);
    }
  };

  const handleSubmitNew = async (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const obj = { title, status, article };
      console.log("submit", type, obj);
    }
  };

  const handleSubmit = async (e: any) => {
    if (type === "edit") return handleSubmitEdit(e);
    handleSubmitNew(e);
  };

  const Discard = () => {
    setTitle("");
    setStatus("");
    setArticle("");
    redirect("/");
  };

  return (
    <FormControl
      onKeyDown={handleSubmit}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <FormLabel htmlFor="title">Title</FormLabel>
      <Input
        w="80%"
        mb="1rem"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />
      <FormLabel htmlFor="password">Status</FormLabel>
      <Select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        w="80%"
        mb="1rem"
        placeholder="Select status"
      >
        <option value="public">Public</option>
        <option value="private">Private</option>
      </Select>
      <FormLabel fontSize="3xl" htmlFor="password">
        Tell us your story
      </FormLabel>
      <Textarea
        id="story"
        value={article}
        h="10rem"
        onChange={(e) => setArticle(e.target.value)}
        placeholder="Your post text..."
      />
      <Box
        w="100%"
        mt="2rem"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Button
          type="submit"
          colorScheme="blue"
          mr={3}
          onSubmit={(e) => handleSubmit(e)}
        >
          {type === "new" ? "Create blog post" : "Edit blog post"}
        </Button>
        <Button variant="ghost" onClick={Discard}>
          Discard
        </Button>
      </Box>
    </FormControl>
  );
};

export default BlogForm;
