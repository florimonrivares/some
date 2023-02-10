// document.getElementById('formforname').addEventListener("submit", check);
//
// function check(event) {
// event.preventDefault();

document.getElementById('formforname').addEventListener("submit", check);

function check(event) {
event.preventDefault();

var elementname = document.getElementById('formforname')

var name = elementname.nameuser.value;

var fail = "";

if(name == "")
fail = "Вы не ввели имя!";
else if(name.length > 50)
fail = "Имя слишком длинное";
else if(name.length <= 2)
fail = "Имя не может быть меньше 3 символов!";

if(fail != "") {
document.getElementById('errorname').innerHTML = fail;

} else {

window.location = "выбор.html";

}
}
