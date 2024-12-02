// Bài 6: Loại bỏ phần tử trùng lặp 
// Viết một hàm để loại bỏ các phần tử trùng lặp trong mảng. Gợi ý: Sử dụng Set hoặc vòng lặp.

const removeDuplicate = (arr) => {
    let uniqueArray = []
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) { 
            uniqueArray.push(arr[i]); 
        }
    }
    return uniqueArray
}

const array = [1, 2, 3, 3, 4, 5, 5, 6]
console.log(removeDuplicate(array))