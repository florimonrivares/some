// функция принимает массив строк и изменяет каждую строку, добавляя перед ней номер, двоеточие и пробел (типо как ["a", "b"] станет ["1: a", "2: b"])

function Numbering (arr) {
    let array = [];
    for (let i = 0; i<arr.length; i++) {
        let help = arr[i].split();
        let j = i+1;
        help.splice(0,0,j, ": ");
        let result = help.join("");
        array.push(result);      
    }
    console.log(array);
}

let Array1 = ["f", "l", "o"];
Numbering(Array1);


// я сделала это, но залагала со splice снова. не присваивала его отдельной переменной, вернее присваивала не там, поэтому split не сохранялся как массив, а splice не работал
// чучуть подсказал gpt
// думала эта штука будет сложнее, ваще не представляла как её делать пока не начала
// чуть позже заметила ошибку, пришлось добавлять j

