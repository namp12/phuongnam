const arrayNumber = [1, 2, 3, 4, 3, 2, 1];
function checkSymmetricalArr(arr) {
  if(!Array.isArray(arr)){
    console.log("dữ liệu không hợp lệ");
    return "dữ liệu không hợp lệ";
  }
  if(arr.length === 1){
    console.log("mảng có 1 phần tử, không kiểm tra được. ");
    return "mảng có 1 phần tử, không kiểm tra được. "
  }
  const len = arr.length;
  for (let i = 0; i < len / 2; i++) {
    if (arr[i] !== arr[len - 1 - i]) {
      return false; 
    }
  }
  return true; 
}
const result = checkSymmetricalArr(arrayNumber);
console.log(result); 