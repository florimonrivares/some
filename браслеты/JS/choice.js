// это для выборов, здесь надо чтоб человек выбрал хотя бы один вариант, иначе выведет сообщение из fail

// var nameuser = document.getElementById('name')

document.getElementById('nameuser').innerHTML = name;






document.getElementById('formforchoice').addEventListener("submit", check);

function check(event) {
event.preventDefault();

var elchoice = document.getElementById('formforchoice');

var a1  =  elchoice.Талиесин.checked;
var a2 =  elchoice.КатШи.checked;
var a3  =  elchoice.Бьера.checked;
var a4  =  elchoice.Самилданах.checked;
var a5  =  elchoice.ТуатаДеДаннан.checked;
var a6  =  elchoice.ТуатаДеДаннанчокер.checked;
var a7  =  elchoice.Самайн.checked;
var a8  =  elchoice.Самайнчокер.checked;
var a9  =  elchoice.Мерлин.checked;
var a10  =  elchoice.Мерлинчокер.checked;
var a11  =  elchoice.Фаль.checked;
var a12  =  elchoice.Пендрагон.checked;
var a13  =  elchoice.Нимуэ.checked;
var a14  =  elchoice.Морриган.checked;
var a15  =  elchoice.Моргана.checked;
var a16  =  elchoice.Льосальвар.checked;
var a17  =  elchoice.КорольАртур.checked;
var a18  =  elchoice.КальяхВаре.checked;
var a19  =  elchoice.Бран.checked;
var a20  =  elchoice.Вервольф.checked;
var a21  =  elchoice.Агассу.checked;
var a22  =  elchoice.Кватхламба.checked;
var a23  =  elchoice.Эрборе.checked;
var a24  =  elchoice.Ападемак.checked;
var a25  =  elchoice.Нгвеньяма.checked;
var a26  =  elchoice.Дябдар.checked;
var a27  =  elchoice.ОдоленьТрава.checked;
var a28  =  elchoice.Змиулан.checked;
var a29  =  elchoice.ПеруновЦвет.checked;
var a30  =  elchoice.Алконост.checked;
var a31  =  elchoice.Василиск.checked;
var a32  =  elchoice.Велес.checked;
var a33  =  elchoice.Гамаюн.checked;
var a34  =  elchoice.ОдоленьТравачокер.checked;
var a35  =  elchoice.Ольхон.checked;
var a36  =  elchoice.СерыйВолк.checked;
var a37  =  elchoice.Тайга.checked;
var a38  =  elchoice.ЧёрныйВорон.checked;
var a39  =  elchoice.СерыйВолкчокер.checked;
var a40  =  elchoice.Шиутекутли.checked;
var a41  =  elchoice.Фо.checked;
var a42  =  elchoice.Уктена.checked;
var a43  =  elchoice.Тортуга.checked;
var a44  =  elchoice.Кецалькоатль.checked;
var a45  =  elchoice.Кавиль.checked;
var a46  =  elchoice.Амазония.checked;
var a47  =  elchoice.ОгненнаяЗемля.checked;
var a48  =  elchoice.ОгненнаяЗемлячокер.checked;
var a49  =  elchoice.Томагавк.checked;
var a50  =  elchoice.Вахиро.checked;
var a51  =  elchoice.Атар.checked;
var a52  =  elchoice.Серафим.checked;
var a53  =  elchoice.Бастет.checked;
var a54  =  elchoice.Тамерлан.checked;
var a55  =  elchoice.Одиссей.checked;
var a56  =  elchoice.Чингисхан.checked;
var a57  =  elchoice.Чингисханчокер.checked;
var a58  =  elchoice.Ифрит.checked;
var a59  =  elchoice.Ифритчокер.checked;
var a60  =  elchoice.Яломиште.checked;
var a61  =  elchoice.Тутанхамон.checked;
var a62  =  elchoice.Туран.checked;
var a63  =  elchoice.Маахес.checked;
var a64  =  elchoice.Тариэль.checked;
var a65  =  elchoice.Арктос.checked;
var a66  =  elchoice.Ассирия.checked;
var a67  =  elchoice.Анубис.checked;
var a68  =  elchoice.Бодхисатва.checked;
var a69  =  elchoice.Хануман.checked;
var a70  =  elchoice.Сидхи.checked;
var a71  =  elchoice.Свадхистана.checked;
var a72  =  elchoice.Сахасрара.checked;
var a73  =  elchoice.Самурай.checked;
var a74  =  elchoice.Анахата.checked;
var a75  =  elchoice.Джомолунгма.checked;
var a76  =  elchoice.Кайлас.checked;
var a77  =  elchoice.Кицунэ.checked;
var a78  =  elchoice.Каштрий.checked;
var a79  =  elchoice.НефритовыйДракон.checked;
var a80  =  elchoice.НефритовыйДракончокер.checked;
var a81  =  elchoice.Цинлун.checked;
var a82  =  elchoice.Фрея.checked;
var a83  =  elchoice.Нифльхейм.checked;
var a84  =  elchoice.Сейд.checked;
var a85  =  elchoice.Локи.checked;
var a86  =  elchoice.Берсерк.checked;
var a87  =  elchoice.Валькирия.checked;
var a88  =  elchoice.Гиперборея.checked;
var a89  =  elchoice.Драккар.checked;
var a90  =  elchoice.Конунг.checked;
var a91  =  elchoice.Рагнарёк.checked;
var a92  =  elchoice.Сигвальд.checked;
var a93  =  elchoice.Страндваскаре.checked;
var a94  =  elchoice.Ульвар.checked;
var a95  =  elchoice.Хель.checked;
var a96  =  elchoice.Хугин.checked;
var a97  =  elchoice.Ярл.checked;
var a98  =  elchoice.Конунгчокер.checked;
var a99  =  elchoice.Рюдзин.checked;
var a100  =  elchoice.Амфитрита.checked;
var a101  =  elchoice.Альбатрос.checked;
var a102  =  elchoice.Альбатросчокер.checked;
var a103  =  elchoice.Аквилон.checked;
var a104  =  elchoice.КонТики.checked;
var a105  =  elchoice.Пассат.checked;
var a106  =  elchoice.Антарктида.checked;
var a107  =  elchoice.Амундсен.checked;
var a108  =  elchoice.Атлантида.checked;
var a109  =  elchoice.Гибралтар.checked;
var a110  =  elchoice.ГлубокийГоризонт.checked;
var a111  =  elchoice.Корсар.checked;
var a112  =  elchoice.Кракен.checked;
var a113  =  elchoice.ЛетучийГолландец.checked;
var a114  =  elchoice.МысДобройНадежды.checked;
var a115  =  elchoice.Нерей.checked;
var a116  =  elchoice.СеверныйЛедовитый.checked;
var a117  =  elchoice.ТечениеЗападныхВетров.checked;
var a118  =  elchoice.Флибустьер.checked;
var a119  =  elchoice.Штиль.checked;
var a120  =  elchoice.Якорь.checked;
var a121  =  elchoice.Гибралтарчокер.checked;
var a122  =  elchoice.Антарктидачокер.checked;
var a123  =  elchoice.СеверныйЛедовитыйчокер.checked
var a124  =  elchoice.Уроборос.checked;
var a125  =  elchoice.Асгард.checked;
var a126  =  elchoice.Ульфберт.checked;
var a127  =  elchoice.Йормунганд.checked;
var a128  =  elchoice.Фенрир.checked;
var a129  =  elchoice.Снежура.checked;
var a130  =  elchoice.Санторини.checked;
var a131  =  elchoice.Непал.checked;
var a131  =  elchoice.Тантра.checked;
var a133  =  elchoice.Раджпут.checked;
var a134  =  elchoice.ХуЧжао.checked
var a135  =  elchoice.ХозяйкаМеднойГоры.checked;
var a136  =  elchoice.ХозяинТайги.checked;
var a137  =  elchoice.КалиновМост.checked;
var a138  =  elchoice.Полоз.checked;
var a139  =  elchoice.Ягуар.checked;
var a140  =  elchoice.МачуПикчу.checked
var a141  =  elchoice.Теночтитлан.checked;
var a142  =  elchoice.Согдиана.checked;



var fail = "Неужели у тебя нет ни одного браслета? Тогда выбери те, которые ты бы хотел иметь. Рекомендую выбрать от 6 до 12 штук)";
if(a1 == "" && a2 == "" && a3 == "" && a4 == "" &&
  a5 == "" && a6 == "" && a7 == "" && a8 == "" &&
  a9 == "" && a10 == "" && a11 == "" && a12 == "" &&
 a13 == "" && a14 == "" && a15 == "" && a16 == "" &&
 a17 == "" && a18 == "" && a19 == "" && a20 == "" &&
 a21 == "" && a22 == "" && a23 == "" && a24 == "" &&
 a25 == "" && a26 == "" && a27 == "" && a28 == "" &&
 a29 == "" && a30 == "" && a31 == "" && a32 == "" &&
 a33 == "" && a34 == "" && a35 == "" && a36 == "" &&
 a37 == "" && a38 == "" && a39 == "" && a40 == "" &&
 a41 == "" && a42 == "" && a43 == "" && a44 == "" &&
 a45 == "" && a46 == "" && a47 == "" && a48 == "" &&
 a49 == "" && a50 == "" && a51 == "" && a52 == "" &&
 a53 == "" && a54 == "" && a55 == "" && a56 == "" &&
 a57 == "" && a58 == "" && a59 == "" && a60 == "" &&
 a61 == "" && a62 == "" && a63 == "" && a64 == "" &&
 a65 == "" && a66 == "" && a67 == "" && a68 == "" &&
 a69 == "" && a70 == "" && a71 == "" && a72 == "" &&
 a73 == "" && a74 == "" && a75 == "" && a76 == "" &&
 a77 == "" && a78 == "" && a79 == "" && a80 == "" &&
 a81 == "" && a82 == "" && a83 == "" && a84 == "" &&
 a85 == "" && a86 == "" && a87 == "" && a88 == "" &&
 a89 == "" && a90 == "" && a91 == "" && a92 == "" &&
 a93 == "" && a94 == "" && a95 == "" && a96 == "" &&
 a97 == "" && a98 == "" && a99 == "" && a100 == "" &&
 a101 == "" && a102 == "" && a103 == "" && a104 == "" &&
 a105 == "" && a106 == "" && a107 == "" && a108 == "" &&
 a109 == "" && a110 == "" && a111 == "" && a112 == "" &&
 a113 == "" && a114 == "" && a115 == "" && a116 == "" &&
 a117 == "" && a118 == "" && a119 == "" && a120 == "" &&
 a121 == "" && a122 == "" && a123 == "" && a124 == "" &&
 a125 == "" && a126 == "" && a127 == "" && a128 == "" &&
 a129 == "" && a130 == "" && a131 == "" && a131 == "" &&
 a133 == "" && a134 == "" && a135 == "" && a136 == "" &&
 a137 == "" && a138 == "" && a139 == "" && a140 == "" &&
 a141 == "" && a142 == "")
{
document.getElementById('no').innerHTML = fail;

} else {
window.location = "итог.html";

}}
