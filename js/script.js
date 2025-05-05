

let menu = document.querySelector('#menuicon');
let navigation = document.querySelector('.navigation');

menu.onclick = ()=> {
    menu.classList.toggle('bx-x');
    navigation.classList.toggle('open')
}