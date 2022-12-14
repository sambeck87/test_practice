const characterCount = (string) => {
  const isBetween = string.length > 0 && string.length  < 11 ? string.length : 'the length is not between 1 and 10';
  return isBetween;
  };

  export default characterCount;
