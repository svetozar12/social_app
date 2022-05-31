const isObjEmpty = (obj: any): boolean => {
  const isEmpty = Object.keys(obj).length === 0;
  if (isEmpty) return true;
  return false;
};

export default isObjEmpty;
