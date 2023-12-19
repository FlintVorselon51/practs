'use strict';
let button = document.getElementById('button');
button.onclick = function () {
    if (button.style.backgroundColor === 'white') {
        button.style.backgroundColor = 'black';
        button.style.color = 'white'
    } else {
        button.style.backgroundColor = 'white';
        button.style.color = 'black'
    }
}

let askLoginButton = document.getElementById('button-ask-login');
askLoginButton.onclick = function () {
    let login = prompt('Введите логин');
    if (login === 'Админ') {
        let password = prompt('Введите пароль');
        if (password === 'Я главный') {
            alert('Здравствуйте!');
        } else if (password === '' || password === null) {
            alert('Отменено');
        } else {
            alert('Неверный пароль')
        }
    } else if (login === '' || login === null) {
        alert('Отменено');
    } else {
        alert('Я вас не знаю')
    }
}

let follow = false;
let specialButton = document.getElementById('button-special');
specialButton.onclick = function () {
    follow = !follow;
}



onmousemove = (event) => {
    if (follow) {
        let x = event.clientX;
        let y = event.clientY;

        let newElement = document.createElement('img');
        newElement.style.position = 'absolute';
        newElement.style.width = '30px';
        newElement.style.height = '30px';
        newElement.src = 'images/heart.png'

        newElement.style.left = x + 'px';
        newElement.style.top = (y + 30) + 'px';

        document.body.appendChild(newElement);
    }
}
