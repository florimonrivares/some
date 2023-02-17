// // вернуть массив, содержаший те же самые строки, что и исходный, но упорядоченные от короткой до длинной. Все строки в исходном массиве разной длинны


// function LengthStrings (array) {
//     let arr = array;
//     for (i=1; i<arr.length; i++) {
//         let first = arr[i].length; 
//         let second =  arr[i-1].length;
//         if (first > second) {return 1}
//         else if (first <= second) {return 0};
             
//     }
    
// }


// тут было много неприятных попыток в разных ужасных вариациях 

// Array1 = ["Flo", "Rivares", "Florimon", "Valtor", "War"];
// let newArray = Array1.sort(LengthStrings);
// console.log(newArray);


function LengthStrings(a, b) {
    return a.length - b.length;
  }
  
  const Array1 = ["Flo", "Rivares", "Florimon", "Valtor", "Wamar"];
  const newArray = Array1.sort(LengthStrings);
  console.log(newArray);

//   вот эта штука была капец сложной, я чёт думала что тут будет легко легко, а на деле так сама и не въехала как это сделать и вот этот рабочий код В ДВЕ СТРОЧКИ сделал gpt(((
// я понимаю как работатет это код, но не понимаю как самой до него додуматься
// задача не решена