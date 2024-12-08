const array = [21, 32, 43, 54, 65, 76, 87, 98];
// Map
function convertArray(array) {
    return array.map((num) => num * 2)
}

// console.log(convertArray(array));

// Reduce()
let i = 0
function callBackFn(valueTtemporary, element, index, array) {
    i++
    console.log('Stt:', i);
    console.log('valueTtemporary:', valueTtemporary);
    console.log('element:', element);
    console.log('index:', index);
    console.log('array:', array);
    console.log('-----------------------');
}

function sumArray(array) {
    return array.reduce((valueTtemporary, element) => {
        i++
        console.log('Stt:', i);
        console.log('valueTtemporary:', valueTtemporary);
        console.log('element:', element);
        // console.log('index:', index);
        // console.log('array:', array);
        console.log('-----------------------');
    }, 1000)
}
// console.log(sumArray(array));

const students =[
    {name: 'Pony', age: 22},
    {name: 'Kevin', age: 23},
    {name: 'Linda', age: 24},
]

const studentFn = students.reduce((max, student) => {
    // console.log(111, max);
    console.log(222, student);
})

console.log(studentFn);