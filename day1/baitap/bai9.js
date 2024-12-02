// Bài 9: Gộp hai mảng và loại bỏ trùng lặp 
// Viết một hàm để gộp hai mảng thành một mảng mới và loại bỏ các phần tử trùng lặp. Gợi ý: Sử dụng Set hoặc vòng lặp.


const mergeAndRemoveDuplicates = (arr1, arr2) => {
    const mergedArray = [...arr1, ...arr2];
    const uniqueArray = [];
    // const uniqueArray = [...new Set(mergedArray)];
    for (let i = 0; i < mergedArray.length; i++) { 
        if (!uniqueArray.includes(mergedArray[i])) { 
            uniqueArray.push(mergedArray[i]); 
        }
    }
    return uniqueArray;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 4, 6];
console.log(mergeAndRemoveDuplicates(array1, array2));



