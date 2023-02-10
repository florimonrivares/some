// это для имени. только мы не можем получить его на сервер, поэтому эта часть кода не работает, выдаёт null

document.getElementById('formforname')//.addEventListener("submit", check);

//function check(event) {
//event.preventDefault();

var name = document.getElementById('name');
document.getElementById('nameuser').innerHTML = name;
//}
