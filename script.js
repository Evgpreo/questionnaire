let producer;
let points = 0;

do {
producer = prompt('Кто режессер фильма Престиж? \n1 - Квентин Тарантино \n 2 - Ридли Скотт \n 3 - Кристофер Нолан');

let producerN = Number(producer);



if (producerN === 3) {
	let pointsShow = 1;
	points = points + pointsShow;
	alert(`Поздравляю! Вы заработали ${pointsShow} балл`);
	}

} while (producer == 0 || producer > 3 || producer === '' );


let premium;

do {
premium = prompt('Самая знаменитая кинопремия? \n 1 - Оскар \n 2 - Кинотавр \n 3 - МузТв');

let premiumN = Number(premium);

if (premiumN === 1) {
	let pointsShow = 1;
	points = points + pointsShow;
	alert(`Поздравляю! Вы заработали ${pointsShow} балл`);
	}
} while ( premium == 0 || premium > 3 || premium === '' );

let marvel;

do {
marvel = prompt('Какая существует киновселенная? \n 1 - Фейсбук \n 2 - Марвел \n 3 - Твиттер');

let marvelN = Number(marvel);

if (marvelN === 2) {
	let pointsShow = 2;
	points = points + pointsShow;
	alert(`Поздравляю! Вы заработали ${pointsShow} балл`);
	}
} while ( marvel == 0 || marvel > 3 || marvel === '' );


let timeMachine;

do {
timeMachine = prompt('Как называется машина времени в фильме "Назад в будущее"? \n 1 - DeLorean \n 2 - Ford Mustang \n 3 - Ford Focus')

let timeMachineN = Number(timeMachine);

if (timeMachineN === 1) {
	let pointsShow = 2;
	points = points + pointsShow;
	alert(`Поздравляю! Вы заработали ${pointsShow} балл`);
	}
} while ( timeMachine === 0 || timeMachine > 3 || timeMachine === '' );

let nameMovie;

do {
nameMovie = prompt('Продолжите название фильма:  "Зеленая ..." \n 1 - бочка \n 2 - вишня \n 3 - миля');

let nameMovieN = Number(nameMovie);

if (nameMovieN === 3) {
	let pointsShow = 3;
	points = points + pointsShow;
	alert(`Поздравляю! Вы заработали ${pointsShow } балл`);
}else{
	alert('Уверен? Это был последний вопрос!');
	}
} while ( nameMovie === 0 || nameMovie > 3 || nameMovie === '' );


alert(`Итого у вас ${points} балла`);












