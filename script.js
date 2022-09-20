let producer;

producer = prompt('Кто режессер фильма Престиж? 1 - Квентин Тарантино 2 - Ридли Скотт 3 - Кристофер Нолан');

let producerN = Number(producer);

let x = 0;

if (producerN === 3) {
	x++;
	alert('Ты, фанат Кристофера Нолана!');
	alert(`Поздравляю! Вы заработали ${x} балл`);
}else{
	alert('Уверен? Открой кинопоиск!');
	alert(`Увы, вы заработали ${x} балл`);
}

let points;
let premium;
premium = prompt('Самая знаменитая кинопремия? 1 - Оскар 2 - Кинотавр 3 - МузТв');

let premiumN = Number(premium);

let y = 1;

if (premiumN === 1) {
	y++;
	alert('Увидимся в Лос-Анджелесе!');
	alert(`Поздравляю! Вы заработали ${y} балл`);
}else{
	alert('Уверен?');
	alert(`Увы, вы заработали ${y} балл`);
}

let marvel;
marvel = prompt('Какая существует киновселенная? 1 - Фейсбук 2 - Марвел 3 - Твиттер');

let marvelN = Number(marvel);

let z = 2;

if (marvelN === 2) {
	z++;
	alert('Тебе привет от Тони Кларка!');
	alert(`Поздравляю! Вы заработали ${z} балл`);
}else{
	alert('Уверен? Отправляйся в DC');
	alert(`Увы, вы заработали ${z} балл`);
}


alert(`Итого у вас ${x+y+z} балла`);












