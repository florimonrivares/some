// функция, принимающая число (наш бюджет) и массив (цены). возврашает строку доступных нам цен

function Price (a, arr) {
    let result = [];
    for (let i = 0; i<=arr.length; i++) {
        if (arr[i] <= a) {
            result.push(arr[i])
        }
    }
    let end = result.join();
    console.log(end);
}


Price(7, [4,8,1,12]);

// я думала это будет сильно сложнее... а в итоге минуты полторы на это ушло