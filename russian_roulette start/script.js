/*
 1. При нажатии на кнопку "Начать"
 	1.1 Сделать кнопку неактивной
 	1.2 Вставить патрон в барабан
	1.3 Начать крутить барабан
	1.4 Скрыть пулю
	1.5 Записать случайное число от 1..6. Это число отвечает за место пули в барабане
	1.6 Отобразить револьвер
	1.7 Изменить текст кнопки на "Сделать выстрел"
	1.8 Сделать кнопку активной
 2. При нажатии на кнопку "Сделать выстрел"
 	2.1 Проверяет число выстрела
 	2.2 Если пуля совпадает числу пули в барабане, то персонаж убит
 	2.3 Иначе револьвер переворачивается и повторяется пунк 2.
 	2.4 При успешном выстреле залить соответсвующую иконку красной жидкостью
 	2.5 Прокрутить барабан
 3. При завершении игры
 	3.1 Изменить текст кнопки на "Рестарт"
 	3.2 При нажатии на эту кнопку перезагрузить страницу.
*/

/*
// Задание к миниуроку 3
// Создаем переменную countShot для подсчета выстрелов

var countShot = 0;

alert(countShot);
*/

// Задание к миниуроку 4
// Создаем переменную countShot
var countShot = 0;

// Переменная позиции пули
var bulletPosition = random(1, 6);

// Создаем переменную для нашей игровой кнопки
var btnShot = document.querySelector("#shot") ;

var currentPlayer = 1;

var baraban = document.querySelector("#baraban");

btnShot.onclick = start;




/* function() 
//	countShot = countShot + 1;
	
	
/*	if (countShot == bulletPosition) {
		endGame();
	} else {
		alert(countShot);
	} */

// Первый клик по кнопке "начать" 
function start() {
	btnShot.className = "off";
	var bullet = document.querySelector("#bullet");
	bullet.style.display = "block";

// Делаем выдержки и таймеры при которых наш барабан будет прокручиваться определенное кол.круг.
	btnShot.onclick = shot;
	var revolver = document.querySelector("#revolver");
		revolver.style.display = "block";

		btnShot.onclick = "0";

		var rotate = 0;
		var timer = setInterval(function() {
			rotate = rotate + 10;
			baraban.style.transform = "rotate(" + rotate + "deg)";
			if (rotate > 300) {
				bullet.style.display = "none";
			}
			if (rotate == 720) {
				clearInterval(timer);
				btnShot.innerText = "Сделать выстрел";
				btnShot.onclick = shot;
				btnShot.className = "";
			}
		}, 50)
	}




// Задаем мин и макс значения ы барабане
function random(min, max) {
	return Math.floor( Math.random() * (max - min) + min);
}

var rotateBaraban = 0;
// Задаем функцию револьвер
function shot() {
	countShot = countShot + 1;

//Прописываем условия при которых жидкость будет попадать на игроков

	if (bulletPosition == countShot) {
		var blood = document.createElement("div");
			blood.id = "blood";
			var player = document.querySelector("#player" + currentPlayer);
			player.appendChild(blood);
		endGame();
	} else {

		if (currentPlayer == 1) {
			rotationRight();
			currentPlayer = 2;
		}
		else {
			rotationLeft();
			currentPlayer = 1;
		}
			var rotate = rotateBaraban;
			
			var timer = setInterval(function() {
				rotate = rotate + 10;
				baraban.style.transform = "rotate(" + rotate +  "deg)";

				if (rotate == rotateBaraban + 60) {
					clearInterval(timer);
					rotateBaraban = rotate;
				}
			}, 10)
			
	}
	//alert(countShot);

}

// Создаем переменную revolver
var revolver = document.querySelector("#revolver");

// Задаем функцию поворота револьвера вправо
function rotationRight () {
	revolver.style.background = 'url("images/revolver-right.png") no-repeat'
	}
rotationRight();

// Задаем функцию поворота револьвера влево
function rotationLeft () {
	revolver.style.background = 'url("images/revolver-left.png") no-repeat'
	}
rotationLeft();

// Создаем функцию "Конец игры"
function endGame() {
	alert("Game over!");
	btnShot.innerText = "Рестарт";
	btnShot.onclick= restart;
	
}

function restart () {
	location.reload();
}