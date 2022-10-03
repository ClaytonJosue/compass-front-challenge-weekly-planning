const addInput = document.querySelector(".add-informations__activity");
const weekDay = document.querySelector(".add-information__week");
const hour = document.querySelector(".add-information__hour");
const calendarHour = document.querySelector(".calendar__hour");
const calendar = document.querySelector(".calendar");
const addBtn = document.querySelector(".add-information__button--add");
const deleteBtn = document.querySelector(".add-information__button--remove");
const removeOneBtnMonday = document.querySelector(".button--monday");
const removeOneBtnTuesday = document.querySelector(".button--tuesday");
const removeOneBtnWednesday = document.querySelector(".button--wednesday");
const removeOneBtnThursday = document.querySelector(".button--thursday");
const removeOneBtnFriday = document.querySelector(".button--friday");
const removeOneBtnSaturday = document.querySelector(".button--saturday");
const removeOneBtnSunday = document.querySelector(".button--sunday");
const messageError = document.querySelector('.add-informations__error');

const monday__item = document.querySelector(".monday__item");
const tuesday__item = document.querySelector(".tuesday__item");
const wednesday__item = document.querySelector(".wednesday__item");
const thursday__item = document.querySelector(".thursday__item");
const friday__item = document.querySelector(".friday__item");
const saturday__item = document.querySelector(".saturday__item");
const sunday__item = document.querySelector(".sunday__item");

const mondayCalendar = document.querySelector(".monday");
const tuesdayCalendar = document.querySelector(".tuesday");
const wednesdayCalendar = document.querySelector(".wednesday");
const thursdayCalendar = document.querySelector(".thursday");
const fridayCalendar = document.querySelector(".friday");
const saturdayCalendar = document.querySelector(".saturday");
const sundayCalendar = document.querySelector(".sunday");

const task = document.querySelector(".calendar__task");
const calendarContent = document.querySelector(".calendar-content");

const list = JSON.parse(localStorage.getItem("calendar")) ?? [];

addBtn.addEventListener('click', () => {
	if (addInput.value && hour.value) {
		addInput.classList.remove('add-informations__activity--error');
		messageError.style.display = 'none';

		showTask();

		addInput.value = '';
		addInput.focus();
	} else {
		addInput.classList.add('add-informations__activity--error');
		messageError.style.display = 'block';
	}
});

function addTask() {
	emptyMonth();

	list.sort(order);
	list.forEach((listItem) => {
		if (listItem.week == 'Segunda') {

			let mondayItem = document.createElement("div");
			mondayItem.classList.add("monday__item");
			mondayCalendar.appendChild(mondayItem);

			let divContent = document.createElement("div");
			divContent.classList.add("calendar-content");
			mondayItem.appendChild(divContent);

			let divTime = document.createElement("div")
			divTime.classList.add("calendar__time");
			divTime.classList.add("calendar__time-monday");
			divContent.appendChild(divTime);

			let time = document.createElement("h3");
			time.classList.add("calendar__hour");
			divTime.appendChild(time);
			time.innerText = listItem.timeHour;

			let divTask = document.createElement("div");
			divTask.classList.add("calendar__task");
			divContent.appendChild(divTask);

			let divPerfect = document.createElement("div");
			divPerfect.classList.add("calendar__task--perfect");
			divPerfect.classList.add("calendar__task--monday");
			divTask.appendChild(divPerfect);

			let text = document.createElement("p");
			text.classList.add("calendar__task--text");
			divTask.appendChild(text);
			text.innerText = listItem.activity;

			let buttonRemove = document.createElement("button");
			buttonRemove.classList.add("calendar__task--button");
			divTask.appendChild(buttonRemove);
			buttonRemove.innerText = "Apagar";

			buttonRemove.addEventListener('click', () => {
				mondayItem.remove();
			});

		} else if (listItem.week == "Terça") {
			let tuesdayItem = document.createElement("div");
			tuesdayItem.classList.add("tuesday__item");
			tuesdayCalendar.appendChild(tuesdayItem);

			let divContent = document.createElement("div");
			divContent.classList.add("calendar-content");
			tuesdayItem.appendChild(divContent);

			let divTime = document.createElement("div")
			divTime.classList.add("calendar__time");
			divTime.classList.add("calendar__time-tuesday");
			divContent.appendChild(divTime);

			let time = document.createElement("h3");
			time.classList.add("calendar__hour");
			divTime.appendChild(time);
			time.innerText = listItem.timeHour;

			let divTask = document.createElement("div");
			divTask.classList.add("calendar__task");
			divContent.appendChild(divTask);

			let divPerfect = document.createElement("div");
			divPerfect.classList.add("calendar__task--perfect");
			divPerfect.classList.add("calendar__task--tuesday");
			divTask.appendChild(divPerfect);

			let text = document.createElement("p");
			text.classList.add("calendar__task--text");
			divTask.appendChild(text);
			text.innerText = listItem.activity;

			let buttonRemove = document.createElement("button");
			buttonRemove.classList.add("calendar__task--button");
			divTask.appendChild(buttonRemove);
			buttonRemove.innerText = "Apagar";

			buttonRemove.addEventListener('click', () => {
				tuesdayItem.remove();
			});

		} else if (listItem.week == "Quarta") {

			let wednesdayItem = document.createElement("div");
			wednesdayItem.classList.add("wednesday__item");
			wednesdayCalendar.appendChild(wednesdayItem);

			let divContent = document.createElement("div");
			divContent.classList.add("calendar-content");
			wednesdayItem.appendChild(divContent);

			let divTime = document.createElement("div")
			divTime.classList.add("calendar__time");
			divTime.classList.add("calendar__time--wednesday");
			divContent.appendChild(divTime);

			let time = document.createElement("h3");
			time.classList.add("calendar__hour");
			divTime.appendChild(time);
			time.innerText = listItem.timeHour;;

			let divTask = document.createElement("div");
			divTask.classList.add("calendar__task");
			divContent.appendChild(divTask);

			let divPerfect = document.createElement("div");
			divPerfect.classList.add("calendar__task--perfect");
			divPerfect.classList.add("calendar__task--wednesday");
			divTask.appendChild(divPerfect);

			let text = document.createElement("p");
			text.classList.add("calendar__task--text");
			divTask.appendChild(text);
			text.innerText = listItem.activity;

			let buttonRemove = document.createElement("button");
			buttonRemove.classList.add("calendar__task--button");
			divTask.appendChild(buttonRemove);
			buttonRemove.innerText = "Apagar";

			buttonRemove.addEventListener('click', () => {
				wednesdayItem.remove();
			});

		} else if (listItem.week == "Quinta") {

			let thursdayItem = document.createElement("div");
			thursdayItem.classList.add("thursday__item");
			thursdayCalendar.appendChild(thursdayItem);

			let divContent = document.createElement("div");
			divContent.classList.add("calendar-content");
			thursdayItem.appendChild(divContent);

			let divTime = document.createElement("div")
			divTime.classList.add("calendar__time");
			divTime.classList.add("calendar__time--thursday");
			divContent.appendChild(divTime);

			let time = document.createElement("h3");
			time.classList.add("calendar__hour");
			divTime.appendChild(time);
			time.innerText = listItem.timeHour;;

			let divTask = document.createElement("div");
			divTask.classList.add("calendar__task");
			divContent.appendChild(divTask);

			let divPerfect = document.createElement("div");
			divPerfect.classList.add("calendar__task--perfect");
			divPerfect.classList.add("calendar__task--thursday");
			divTask.appendChild(divPerfect);

			let text = document.createElement("p");
			text.classList.add("calendar__task--text");
			divTask.appendChild(text);
			text.innerText = listItem.activity;

			let buttonRemove = document.createElement("button");
			buttonRemove.classList.add("calendar__task--button");
			divTask.appendChild(buttonRemove);
			buttonRemove.innerText = "Apagar";

			buttonRemove.addEventListener('click', () => {
				thursdayItem.remove();
			});

		} else if (listItem.week == "Sexta") {

			let fridayItem = document.createElement("div");
			fridayItem.classList.add("friday__item");
			fridayCalendar.appendChild(fridayItem);

			let divContent = document.createElement("div");
			divContent.classList.add("calendar-content");
			fridayItem.appendChild(divContent);

			let divTime = document.createElement("div")
			divTime.classList.add("calendar__time");
			divTime.classList.add("calendar__time--friday");
			divContent.appendChild(divTime);

			let time = document.createElement("h3");
			time.classList.add("calendar__hour");
			divTime.appendChild(time);
			time.innerText = listItem.timeHour;;

			let divTask = document.createElement("div");
			divTask.classList.add("calendar__task");
			divContent.appendChild(divTask);

			let divPerfect = document.createElement("div");
			divPerfect.classList.add("calendar__task--perfect");
			divPerfect.classList.add("calendar__task--friday");
			divTask.appendChild(divPerfect);

			let text = document.createElement("p");
			text.classList.add("calendar__task--text");
			divTask.appendChild(text);
			text.innerText = listItem.activity;

			let buttonRemove = document.createElement("button");
			buttonRemove.classList.add("calendar__task--button");
			divTask.appendChild(buttonRemove);
			buttonRemove.innerText = "Apagar";

			buttonRemove.addEventListener('click', () => {
				fridayItem.remove();
			});

		} else if (listItem.week == "Sabado") {

			let saturdayItem = document.createElement("div");
			saturdayItem.classList.add("saturday__item");
			saturdayCalendar.appendChild(saturdayItem);

			let divContent = document.createElement("div");
			divContent.classList.add("calendar-content");
			saturdayItem.appendChild(divContent);

			let divTime = document.createElement("div")
			divTime.classList.add("calendar__time");
			divTime.classList.add("calendar__time--saturday");
			divContent.appendChild(divTime);

			let time = document.createElement("h3");
			time.classList.add("calendar__hour");
			divTime.appendChild(time);
			time.innerText = listItem.timeHour;;

			let divTask = document.createElement("div");
			divTask.classList.add("calendar__task");
			divContent.appendChild(divTask);

			let divPerfect = document.createElement("div");
			divPerfect.classList.add("calendar__task--perfect");
			divPerfect.classList.add("calendar__task--saturday");
			divTask.appendChild(divPerfect);

			let text = document.createElement("p");
			text.classList.add("calendar__task--text");
			divTask.appendChild(text);
			text.innerText = listItem.activity;

			let buttonRemove = document.createElement("button");
			buttonRemove.classList.add("calendar__task--button");
			divTask.appendChild(buttonRemove);
			buttonRemove.innerText = "Apagar";

			buttonRemove.addEventListener('click', () => {
				saturdayItem.remove();
			});

		} else if (listItem.week == "Domingo") {

			let sundayItem = document.createElement("div");
			sundayItem.classList.add("sunday__item");
			sundayCalendar.appendChild(sundayItem);

			let divContent = document.createElement("div");
			divContent.classList.add("calendar-content");
			sundayItem.appendChild(divContent);

			let divTime = document.createElement("div")
			divTime.classList.add("calendar__time");
			divTime.classList.add("calendar__time--sunday");
			divContent.appendChild(divTime);

			let time = document.createElement("h3");
			time.classList.add("calendar__hour");
			divTime.appendChild(time);
			time.innerText = listItem.timeHour;;

			let divTask = document.createElement("div");
			divTask.classList.add("calendar__task");
			divContent.appendChild(divTask);

			let divPerfect = document.createElement("div");
			divPerfect.classList.add("calendar__task--perfect");
			divPerfect.classList.add("calendar__task--sunday");
			divTask.appendChild(divPerfect);

			let text = document.createElement("p");
			text.classList.add("calendar__task--text");
			divTask.appendChild(text);
			text.innerText = listItem.activity;

			let buttonRemove = document.createElement("button");
			buttonRemove.classList.add("calendar__task--button");
			divTask.appendChild(buttonRemove);
			buttonRemove.innerText = "Apagar";

			buttonRemove.addEventListener('click', () => {
				sundayItem.remove();
			});
		}
	})
}

function showTask() {
	const listItem = {
		activity: addInput.value,
		week: weekDay.value,
		timeHour: hour.value,
	};
	list.push(listItem)
	addTask();
}

function order(a, b) {
	if (a.timeHour > b.timeHour) return 1;
	if (a.timeHour < b.timeHour) return -1;
	return 0;
}

function emptyMonth() {
	mondayCalendar.innerHTML = '';
	tuesdayCalendar.innerHTML = '';
	wednesdayCalendar.innerHTML = '';
	thursdayCalendar.innerHTML = '';
	fridayCalendar.innerHTML = '';
	saturdayCalendar.innerHTML = '';
	sundayCalendar.innerHTML = '';
}

addTask();

deleteBtn.addEventListener('click', () => {
	if (mondayCalendar.classList == 'monday') {
		while (mondayCalendar.firstChild) {
			mondayCalendar.removeChild(mondayCalendar.firstChild);
			list.splice(mondayCalendar.firstChild);
		}
	} else if (tuesdayCalendar.classList == 'tuesday') {
		while (tuesdayCalendar.firstChild) {
			tuesdayCalendar.removeChild(tuesdayCalendar.firstChild);
			list.splice(tuesdayCalendar.firstChild);
		}
	} else if (wednesdayCalendar.classList == 'wednesday') {
		while (wednesdayCalendar.firstChild) {
			wednesdayCalendar.removeChild(wednesdayCalendar.firstChild);
			list.splice(wednesdayCalendar.firstChild);
		}
	} else if (thursdayCalendar.classList == 'thursday') {
		while (thursdayCalendar.firstChild) {
			thursdayCalendar.removeChild(thursdayCalendar.firstChild);
			list.splice(thursdayCalendar.firstChild);
		}
	} else if (fridayCalendar.classList == 'friday') {
		while (fridayCalendar.firstChild) {
			fridayCalendar.removeChild(fridayCalendar.firstChild);
			list.splice(fridayCalendar.firstChild);
		}
	} else if (saturdayCalendar.classList == 'saturday') {
		while (saturdayCalendar.firstChild) {
			saturdayCalendar.removeChild(saturdayCalendar.firstChild);
			list.splice(saturdayCalendar.firstChild);
		}
	} else if (sundayCalendar.classList == 'sunday') {
		while (sundayCalendar.firstChild) {
			sundayCalendar.removeChild(sundayCalendar.firstChild);
			list.splice(sundayCalendar.firstChild);
		}
	}

});