// Input:

const listUser = [
    { name: "Nguyễn Văn A", age: 18 },
    { name: "Trần Thị B", age: 22 },
    { name: "Lê Văn C", age: 30 },
    { name: "Phạm Thị D", age: 25 },
    { name: "Hoàng Văn E", age: 20 },
    { name: "Đỗ Thị F", age: 27 },
    { name: "Bùi Văn G", age: 35 },
    { name: "Vũ Thị H", age: 24 },
    { name: "Ngô Văn I", age: 29 },
    { name: "Dương Thị K", age: 32 },
  ];
  
  function sortUsersByAgeDesc(arr) {
    const result = [];
    arr.forEach((item) => {
        result.push(item);
    });
    for(let i = 0; i < result.length - 1; i++){
      for(let j = 0; j < result.length -1 - i; j++){
        if(result[j].age < result[j + 1].age){
          let doicho = result[j];
          result[j] = result[j + 1];
          result[j+1] = doicho;
        }
      }
    }
    console.log(result);
  }
  sortUsersByAgeDesc(listUser);
