function cleanSet(set, startString) {
  let result = '';
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      const trimmedValue = value.substring(startString.length);
      result += `${trimmedValue}-`;
    }
  });

  if (result.length > 0) {
    result = result.slice(0, -1);
  }
  return result;
}

export default cleanSet;
