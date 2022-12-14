function addZero(number) {
	if (number < 10) {
		return '0' + number;
	} else {
		return number;
	}
}


function date() {
	let today = new Date();
	// Hour
	const hour = document.querySelector(".time__hour");

	let currentTime = addZero(today.getHours()) + ':' + addZero(today.getMinutes());
	hour.innerHTML = currentTime;

	// Day
	const date = document.querySelector(".time__date");
	const month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

	let currentDate = addZero(today.getDate()) + ' de ' + month[today.getMonth()] + ' de ' + today.getFullYear();

	date.innerHTML = currentDate;
}

setInterval(date, 1000);

