//1

function inputNumber() {
    let numbers = [];
    
    while (true) {
        let input = prompt("Iltimos, raqam kiriting:");
        
        if (!isNaN(input)) {
            numbers.push(Number(input));
        } else {
            break;
        }
    }
    
    return numbers;
}

console.log(inputNumber());

// //2

// function inputNumber() {
//     let numbers = [];
//     let input;
    
//     do {
//         input = prompt("Iltimos, raqam kiriting:");
//         if (!isNaN(input)) {
//             numbers.push(Number(input));
//         }
//     } while (!isNaN(input));
    
//     return numbers;
// }

// console.log(inputNumber());

// //3

// function inputNumber() {
//     let numbers = [];
    
//     while (true) {
//         let input = prompt("Iltimos, raqam kiriting:");
        
//         if (!isNaN(input)) {
//             numbers.push(Number(input));
//         } else {
//             if (numbers.length === 0) {
//                 continue;
//             } else {
//                 break;
//             }
//         }
//     }
    
//     return numbers;
// }

// console.log(inputNumber());