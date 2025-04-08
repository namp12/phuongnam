// //* Viết hàm nhận vào một mảng và làm sạch các falsy values có trong mảng
// function cleanFalsyValues(arr) {
//     const checkfolsy = arr.filter(Boolean);
//     console.log(checkfolsy)

// }
// cleanFalsyValues([1, 0, "", null, "hello", undefined, NaN, 2, 3]);

// //* Viết hàm lọc lấy các số chẵn của một mảng
// function filterEvenNumbers(arr) {
//    const checkeven = arr.filter((item)=>item % 2 == 0) 
//    console.log(checkeven)
//   }
//   filterEvenNumbers([1, 2, 3, 4, 5, 6]); // Output: [2, 4, 6]
//   filterEvenNumbers([1, 3, 5, 7]); // Output: []
//   filterEvenNumbers([]); // Output: []
//   filterEvenNumbers([-2, -1, 0, 1, 2]); // Output: [-2, 0, 2]


// //* Viết hàm lọc lấy các chuỗi có độ dài lớn hơn 5 của mảng các chuỗi
// function filterLongStrings(arr) {
//     const checklong = arr.filter((item) => item.length > 5)
//     console.log(checklong);
//   }

//   filterLongStrings(["hello", "world", "javascript", "nodejs"]); // Output: ["javascript", "nodejs"]
//   filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"]); // Output: ["hello world", "goodbye!!"]
//   filterLongStrings(["hi", "bye", "yes"]); // Output: []

//* Cho trước mảng chứa các số nguyên, viết hàm tìm
function findMinMaxAverage(arr) {
    // Xử lý và in ra kết quả
  }
  
  // Test
  findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6]); // Output: {max: 9, maxIndex: 5, min: 1, minIndex: 1, primeAverage: 3.33 }
  findMinMaxAverage([5, 5, 2, 2, 1]); // Output: {max: 5, maxIndex: 0, min: 1, minIndex: 4, primeAverage: 3.5 }
  findMinMaxAverage([-3, 7, -8, 11, 0]);