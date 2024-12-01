// Bài 7: Sắp xếp mảng tăng dần 
// Viết một hàm để sắp xếp mảng số theo thứ tự tăng dần. Gợi ý: Sử dụng phương thức sort().

const sortArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}

let array = [5, 3, 8, 1, 2, 3]
console.log(sortArray(array))