// Bài 8: Tìm phần tử xuất hiện nhiều nhất 
// Viết một hàm để tìm phần tử xuất hiện nhiều nhất trong mảng. Gợi ý: Sử dụng đối tượng (object) để lưu tần suất.

const findMostFrequent = (arr) => {
    // Tạo một đối tượng để lưu trữ tần suất xuất hiện của từng phần tử 
    const frequency = {}; 
    // Duyệt qua mảng và cập nhật tần suất xuất hiện 
    for (let i = 0; i < arr.length; i++) { 
        const element = arr[i]; 
        if (frequency[element]) {
             frequency[element]++; 
        } else { 
            frequency[element] = 1; 
        } 
    } 
    // Tìm phần tử xuất hiện nhiều nhất 
    let mostFrequent = arr[0]; 
    let maxCount = frequency[mostFrequent]; 
    for (const element in frequency) { 
        if (frequency[element] > maxCount) { 
            mostFrequent = element; 
            maxCount = frequency[element]; 
        } 
    } 
    return mostFrequent;
}

const array = [1, 2, 2, 4, 3, 4, 4]; 
console.log(findMostFrequent(array));