// код, который преобразует строку в новую строку, в которой каждый элемент равен "(" если он повторяется лишь один раз в исходной строке, и равен ")" если повторяется более одного раза.

const stroka = "strIngs";

// тут можно любую строку передать

let stroka2 = [];
let str = stroka.toLowerCase();
// я хз, мб это в функцию засунуть?

function Skobki (letter) {

   let array = [];
   let index = str.indexOf(letter); /* а это не надо впихнуь в while?* у меня случался бесконечный цикл если я делала так: */
   // while (true) {
   //    let index = str.indexOf(letter);
   //   array.push(index);
   //   index = str.indexOf(letter, index+1);
   //   if (index == -1) {break};

     while ( index !== -1) {
     array.push(index);
     index = str.indexOf(letter, index+1);
        
 
   }
   let line = array.length;
      console.log(line)
      if (line > 1) {stroka2.push(")")} 
      else {stroka2.push("(")};
}

     for (let i = 0; i<str.length; i++) {
      Skobki(str[i]);
  
    };

    console.log(stroka2);



// пришлось воспользоваться помощью решения из прошлой задачки про римские числа. пробовала сделать с нуля, ниже останки этих попыток
// пробовала сделать опираясь на римское, но не сложилось, в итоге просто взяла кусок с римского и чучут поправила
// хз насколько это нормально, просто я понимаю как это работает, на если не знаю примера решения то додуплить самой не всегда выходит((
   // прост тут я пыталась и перебрать элементы строки, и понять какие из них повторяются, в одной функции. а по факту сработало отдельно функция, отдельно перебор.


    // let array = [];
// function Skobki (str1) {
//    let str = str1.toLowerCase();
//     console.log(str);
//     for (i=0; i<str.length; i++) {
//         let letter = str[i];
//         let pos = 0;           
//         while (true) {
//          let index = str.indexOf(letter);        
//            array.push(index);
//            pos = index + 1;
//            console.log(array);  
//            if (index == -1); {break};       
             
//         }
        
//     }
    
// }

// Skobki (stroka);