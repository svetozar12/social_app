import { constants } from "../constant";

const redirect = (param: string) => {
  return (window.location.href = `${constants.CLIENT_URL}${param}`);
};

export default redirect;
