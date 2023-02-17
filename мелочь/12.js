// строка, в которой слова разделены только дефисами или только нижними тире; собрать в цельную строку верблюжий регистр (первый элемент в верхнем регистре только если изначально был таким)

function up (str) {
    let str1 = str[0].toUpperCase();
    let help = str.split("");
    help.splice(0,1,str1);
    str = help.join("");
    return str;
    }
    
    


function camel (string) {
    let str1 = string.split("-");
    let str2 = string.split("_");
    let str = [];
        if (str1.length !== 1) {
            str = str1
        } else {
            str = str2
        }
    let result = [str[0]];
    for (let i = 1; i<str.length; i++) {
        let word = up(str[i]);
        result.push(word);
    }
    let end = result.join("");
    console.log(end);
    
}




let stringfirst = "строка,-в-которой-слова-разделены-дефисами-или-нижними-тире";
let stringsecond = "строка,_в_которой_слова_разделены_дефисами_или_нижними_тире";
camel(stringfirst);

// в целом не сложно