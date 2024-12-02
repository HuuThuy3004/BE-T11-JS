// Bài 10: Kiểm tra mảng đối xứng 
// Viết một hàm để kiểm tra xem mảng có phải là đối xứng hay không 
// (phần tử đầu bằng phần tử cuối, phần tử thứ hai bằng phần tử áp cuối,...). 
// Gợi ý: Sử dụng vòng lặp hoặc so sánh từng cặp phần tử.

const isSymmetricArray = (arr) => {
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

const array1 = [1, 2, 3, 2, 1];
const array2 = [1, 2, 3, 4, 5];

console.log(isSymmetricArray(array1));
console.log(isSymmetricArray(array2));
