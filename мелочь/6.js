// создать функцию, которая принимает число n и возвращает n-нную позицию из последовательности фибоначи

// function fibonachy (n) {
//     // for (let i = 0; i<=n; i++) { 
//         let arr = [0,1];
//         let j = arr.length - 1;
//         let c = arr[j] + arr[j-1];
//         arr.push(c);
//     // }
//     console.log(arr);
// }

// fibonachy(4);


function fibonachy (n) {
    let arr = [0,1];
    while (arr.length < n) {
        let j = arr.length - 1;
        let c = arr[j] + arr[j-1];
        arr.push(c);          
    }  
    console.log(arr);
}

fibonachy(4);

// вот тут лагала с тем, как цикл включить, но дошло быстро. чучуть напортачила с суммой, забыла, что .length возвращает длниу, а она не равна последнему индексу, так как отсчёт с 0
// сперва я думала что эта штука будет супер лёгкой, потом, что супер сложной, а на деле не сложно

