// Bài 3: Lọc số chẵn Viết một hàm để trả về một mảng mới chỉ chứa các số chẵn từ mảng đầu vào. 
// Gợi ý: Sử dụng phương thức filter().

const filterEvenNumbers = (numbers) => {
  return numbers.filter((number) => number % 2 == 0);
};

const numbers = [13, 25, 37, 44, 56, 78]
console.log(filterEvenNumbers(numbers));