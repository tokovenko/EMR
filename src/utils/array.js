export function getIndexByParam(arr, value, attr = 'id') {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][attr] === value) {
      return i;
    }
  }
  return -1;
}

export function removeFromArray(list = [], value, property = 'id') {
  const index = getIndexByParam(list, value, property);
  if (index > -1) {
    list.splice(index, 1);
  }
}

export function insertInArray(list, model, insertAfterValue, property = 'id') {
  const index = getIndexByParam(list, insertAfterValue, property);
  list.splice(index + 1, 0, model);
}

