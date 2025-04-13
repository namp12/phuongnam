// Input:
const users = [
  { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
  { fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
  { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
  { fullname: "Nguyen Van D", age: 22, address: "HaNoi" },
  { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
];

function groupBy(arr, key) {
  const result = {};
  arr.forEach((item) => {
    const groupkey = item[key];
    if(!result[groupkey]){
      result[groupkey] = [];
    }
    result[groupkey].push(item);
  });
  return result;
}

// Output:
const result1 = groupBy(users, "age"); // nhóm theo tuổi

console.log(result1);
const result2 = groupBy(users, "address"); // nhóm theo địa chỉ

console.log(result2);