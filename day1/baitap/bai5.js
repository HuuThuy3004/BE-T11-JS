// Bài 5: Viết một hàm để đảo ngược thứ tự các phần tử trong mảng. Gợi ý: Sử dụng vòng lặp hoặc phương thức reverse().

const reverseStudent = (arr) => {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    return arr
}

const students = ['Trang', 'Quynh', 'Thao', 'Binh', 'An', 'Huy', 'Loc']
console.log(reverseStudent(students));


