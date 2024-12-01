// Bài 2: Tìm số lớn nhất trong mảng 
// Viết một hàm để tìm giá trị lớn nhất trong mảng số. Gợi ý: Sử dụng vòng lặp hoặc phương thức Math.max().


const findMax = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const numberArray = [11, 22, 100, 88, 77, 44, 55];
console.log(findMax(numberArray));
