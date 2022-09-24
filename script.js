let producer;
let points = 0;


producer = prompt('Кто режессер фильма Престиж? 1 - Квентин Тарантино 2 - Ридли Скотт 3 - Кристофер Нолан');

let producerN = Number(producer);


if (producerN === 3) {
	let pointsShow = 1;
	points = points + pointsShow;
	alert(`Поздравляю! Вы заработали ${pointsShow} балл`);
}else{

}


let premium;
premium = prompt('Самая знаменитая кинопремия? 1 - Оскар 2 - Кинотавр 3 - МузТв');

let premiumN = Number(premium);

if (premiumN === 1) {
	let pointsShow = 1;
	points = points + pointsShow;
	alert(`Поздравляю! Вы заработали ${pointsShow} балл`);
}else{

}

let marvel;
marvel = prompt('Какая существует киновселенная? 1 - Фейсбук 2 - Марвел 3 - Твиттер');

let marvelN = Number(marvel);

if (marvelN === 2) {
	let pointsShow = 2;
	points = points + pointsShow;
	alert(`Поздравляю! Вы заработали ${pointsShow} балл`);
}else{

}

let timeMachine;

timeMachine = prompt('Как называется машина времени в фильме "Назад в будущее"? 1 - DeLorean 2 - Ford Mustang 3 - Ford Focus')

let timeMachineN = Number(timeMachine);

if (timeMachineN === 1) {
	let pointsShow = 2;
	points = points + pointsShow;
	alert(`Поздравляю! Вы заработали ${pointsShow} балл`);
}else{
	alert('Уверен?');
}

let nameMovie;

nameMovie = prompt('Продолжите название фильма: Зеленая... 1 - бочка 2 - вишня 3 - миля');

let nameMovieN = Number(nameMovie);

if (nameMovieN === 3) {
	let pointsShow = 3;
	points = points + pointsShow;
	alert(`Поздравляю! Вы заработали ${pointsShow } балл`);
}else{
	alert('Уверен?');
}


alert(`Итого у вас ${points} балла`);












