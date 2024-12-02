// Bài 4: Đếm số lần xuất hiện của một phần tử 
// Viết một hàm đếm số lần xuất hiện của một phần tử cụ thể trong mảng. Gợi ý: Sử dụng vòng lặp hoặc phương thức reduce().


const countName = (names, name) => {
    for (let i = 0; i < names.length; i++) {
        if (names[i] === name) {
            return `Count ${name} = ${names.reduce((count, currentName) => currentName === name ? count + 1 : count, 0)}`
        }
    }
}

const names = ['andy', 'bob', 'andy', 'doly', 'erik', 'andy', 'andy', 'tom']
console.log(countName(names, 'tom'))