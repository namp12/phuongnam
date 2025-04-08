const arrNumber = [1, 2, 3, 4, 5, 5, null, undefined, 6];

function reverseArr(arr) {
  if (arr.length <= 1) return arr;
  const filtered = arr.filter(Boolean);
  const unique = filtered.filter((item, index, self) => {
    return self.lastIndexOf(item) === index;
  });
  for (let i = 0; i < unique.length - 1; i++) {
    for (let j = 0; j < unique.length - 1 - i; j++) {
      if (unique[j] < unique[j + 1]) {
        let temp = unique[j];
        unique[j] = unique[j + 1];
        unique[j + 1] = temp;
      }
    }
  }

  return unique;
}

const result = reverseArr(arrNumber);
console.log(result); 
