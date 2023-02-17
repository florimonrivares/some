// получаем число, возвращаем строку числа в развёрнутом виде

function string (a) {
    let str = String(a);
    let result = [];
    let length = str.length;
    for (let i = 0; i<length; i++) {
        let el = str[i] * Math.pow(10,length-i-1);
        result.push(el);
    }
    let end = result.join("+");
    console.log(end);

}


string(534);


// всё вроде просто, только возведение в степень пришлось рогуглить