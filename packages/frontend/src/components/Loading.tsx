import { Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Spinner
      w="17rem"
      h="17rem"
      thickness=".5rem"
      speed="1s"
      emptyColor="gray.200"
      color="blue.500"
      size="lg"
    />
  );
};

export default Loading;
