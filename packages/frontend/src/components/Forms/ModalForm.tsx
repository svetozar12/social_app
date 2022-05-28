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
const ModalForm = ({ onClose }: { onClose: () => void }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [article, setArticle] = useState("");

  const handleSubmit = async (e: any) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const obj = { title, status, article };
      console.log("submit", obj);
    }
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
      <Textarea
        value={article}
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
          Create blog post
        </Button>
        <Button variant="ghost" onClick={onClose}>
          Discard
        </Button>
      </Box>
    </FormControl>
  );
};

export default ModalForm;
