const fruits = [
    "apple",
    "banana",
    "kiwi",
    "kiwi",
    "banana",
    "orange",
    "apple",
    "kiwi",
  ];
  
  function removeDuplicate(arr) {
    const find = arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    });
    return find;
  }
  const result = removeDuplicate(fruits);
  
  console.log(result); 