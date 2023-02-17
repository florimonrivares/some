// функция, которая возвращает количество позиций, по которым строки не совпадают

function matching (str1, str2) {
    let result = 0;
        let length = 0;
        let length1 = str1.length;
        let length2 = str2.length;
        let difference = length1 - length2;
            if (difference > 0) {length = length1}
            else {length = length2};    
            for (let i = 0; i<=length; i++) {
                let symbol1 = str1[i];
                let symbol2 = str2[i];
                    if (symbol1 !== symbol2) {
                    result ++
                    }

        }
        console.log(result)

    }

    let string1 = "Florimon";
    let string2 = ["f","l","o"];

    // эта штука не сработала для объектов, но оно и понятно. Зато сработала для массивов.


    matching(string1, string2)