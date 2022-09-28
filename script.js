let points = 0;
let doCycle;

//первый вопрос

do {
doCycle = true;
let = answerNative = prompt('Кто режессер фильма Престиж? \n 1 - Квентин Тарантино \n 2 - Ридли Скотт \n 3 - Кристофер Нолан \n 4 - Мартин Скорсезе' );

let producerN = Number(answerNative);

if (producerN === 1 || producerN === 2 || producerN === 3 || producerN === 4 || answerNative === null) {
	doCycle = false
}

if (producerN === 3) {
	let pointsShow = 1;
	points = points + pointsShow;
	alert(`Поздравляю! Вы заработали ${pointsShow} балл`);
	}

} while (doCycle);

//второй вопрос

do {
doCycle = true;
let = answerNative = prompt('Самая знаменитая кинопремия? \n 1 - Оскар \n 2 - Кинотавр \n 3 - МузТв \n 4 - Синяя малина');

let premiumN = Number(answerNative);

if (premiumN === 1 || premiumN === 2 || premiumN === 3 || premiumN === 4 || answerNative === null) {
	doCycle = false
}

if (premiumN === 1) {
	let pointsShow = 1;
	points = points + pointsShow;
	alert(`Поздравляю! Вы заработали ${pointsShow} балл`);
	}

} while ( doCycle);


//третий вопрос

do {
doCycle = true;
let = answerNative = prompt('Какая существует киновселенная? \n 1 - Фейсбук \n 2 - Марвел \n 3 - Твиттер \n 4 - Стивена Хокинга');

let marvelN = Number(answerNative);

if (marvelN === 1 || marvelN === 2 || marvelN === 3 || marvelN === 4 || answerNative === null) {
	doCycle = false
}

if (marvelN === 2) {
	let pointsShow = 2;
	points = points + pointsShow;
	alert(`Поздравляю! Вы заработали ${pointsShow} балл`);
	}
} while ( doCycle);

//четвертый вопрос

do {
doCycle = true;
let = answerNative = prompt('Как называется машина времени в фильме "Назад в будущее"? \n 1 - DeLorean \n 2 - Ford Mustang \n 3 - Ford Focus \n 4 - Москвич 2140')

let timeMachineN = Number(answerNative);

if (timeMachineN === 1 || timeMachineN === 2 || timeMachineN === 3 || timeMachineN === 4 || answerNative === null){
	doCycle = false
}

if (timeMachineN === 1) {
	let pointsShow = 2;
	points = points + pointsShow;
	alert(`Поздравляю! Вы заработали ${pointsShow} балл`);
	}
} while ( doCycle);

//пятый вопрос
do {
doCycle = true;
let = answerNative = prompt('Продолжите название фильма:  "Зеленая ..." \n 1 - бочка \n 2 - вишня \n 3 - миля \n 4 - карта');

let nameMovieN = Number(answerNative);

if (nameMovieN === 1 || nameMovieN === 2 || nameMovieN === 3 || nameMovieN === 4 || answerNative === null) {
	doCycle = false
}

if (nameMovieN === 3) {
	let pointsShow = 3;
	points = points + pointsShow;
	alert(`Поздравляю! Вы заработали ${pointsShow } балл`)
}else{
	alert('Уверен? Это был последний вопрос!')
	}
} while (doCycle);


//склонение слова балл

let namePoints = Number;
namePoints = points;

if (namePoints === 1) {
	alert(`Итого у вас ${points} балл`)
}

else if (namePoints >= 2 && namePoints <= 4) {
	alert(`Итого у вас ${points} балла`)
}else {
	alert(`Итого у вас ${points} баллов`)
}


// alert(`Итого у вас ${points} балла`);












