// определить, находятся ли числа в массиве в порядке возрастания

function increase (arr) {
    let result = 0;
    for (i=1; i<arr.length; i++) {
        if (arr[i] - arr[i-1] !== 1) {
            result++
        }
    }
    if (result === 0) {
    console.log("Да, числа в порядке возрастания");
    } else {console.log("Нет, числа в случайном порядке")}
}


Array1 = [8,9,10];
increase(Array1);

// с какого-то чёрта   for (i=0; i<=arr.length; i++) выдавало два лишних несоответствия, и если первое я могу понять (когда i=0 то сравнить с предыдущим нереально), то почему его конец не устроил я хз
