const isObjEmpty = (obj: any): boolean => {
  console.log(obj);

  const isEmpty = Object.keys(obj).length === 0;
  if (isEmpty) return true;
  return false;
};

export default isObjEmpty;
