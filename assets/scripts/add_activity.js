const addInput = document.querySelector(".add-informations__activity");
const weekDay = document.querySelector(".add-information__week");
const hour = document.querySelector(".add-information__hour");
const calendarHour = document.querySelector(".calendar__hour");
const calendar = document.querySelector(".calendar");
const addBtn = document.querySelector(".add-information__button--add");
const deleteBtn = document.querySelector(".add-information__button--remove");

const mondayCalendar = document.querySelector(".monday");
const tuesdayCalendar = document.querySelector(".tuesday");
const wednesdayCalendar = document.querySelector(".wednesday");
const thursdayCalendar = document.querySelector(".thursday");
const fridayCalendar = document.querySelector(".friday");
const saturdayCalendar = document.querySelector(".saturday");
const sundayCalendar = document.querySelector(".sunday");

const task = document.querySelector(".calendar__task");
const calendarContent = document.querySelector(".calendar-content");

addBtn.addEventListener('click', () => {
	if (addInput.value && hour.value) {
		addTask();

		addInput.value = '';
		addInput.focus();
	}
});

function addTask() {
	let activity = addInput.value;
	let week = weekDay.value;
	let timeHour = hour.value;

	if (week == 'Segunda') {

		let mondayItem = document.createElement("div");
		mondayItem.classList.add("monday__item");
		mondayCalendar.appendChild(mondayItem);

		if (deleteBtn.addEventListener('click', () => {
			mondayItem.remove();
		}));

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
		time.innerText = timeHour;

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
		text.innerText = activity;

		let buttonRemove = document.createElement("button");
		buttonRemove.classList.add("calendar__task--button");
		divTask.appendChild(buttonRemove);
		buttonRemove.innerText = "Apagar";

	} else if (week == "Terça") {
		let tuesdayItem = document.createElement("div");
		tuesdayItem.classList.add("tuesday__item");
		tuesdayCalendar.appendChild(tuesdayItem);

		if (deleteBtn.addEventListener('click', () => {
			tuesdayItem.remove();
		}));

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
		time.innerText = timeHour;

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
		text.innerText = activity;

		let buttonRemove = document.createElement("button");
		buttonRemove.classList.add("calendar__task--button");
		divTask.appendChild(buttonRemove);
		buttonRemove.innerText = "Apagar";

	} else if (week == "Quarta") {

		let wednesdayItem = document.createElement("div");
		wednesdayItem.classList.add("wednesday__item");
		wednesdayCalendar.appendChild(wednesdayItem);

		if (deleteBtn.addEventListener('click', () => {
			wednesdayItem.remove();
		}));

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
		time.innerText = timeHour;

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
		text.innerText = activity;

		let buttonRemove = document.createElement("button");
		buttonRemove.classList.add("calendar__task--button");
		divTask.appendChild(buttonRemove);
		buttonRemove.innerText = "Apagar";

	} else if (week == "Quinta") {

		let thursdayItem = document.createElement("div");
		thursdayItem.classList.add("thursday__item");
		thursdayCalendar.appendChild(thursdayItem);

		if (deleteBtn.addEventListener('click', () => {
			thursdayItem.remove();
		}));

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
		time.innerText = timeHour;

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
		text.innerText = activity;

		let buttonRemove = document.createElement("button");
		buttonRemove.classList.add("calendar__task--button");
		divTask.appendChild(buttonRemove);
		buttonRemove.innerText = "Apagar";

	} else if (week == "Sexta") {

		let fridayItem = document.createElement("div");
		fridayItem.classList.add("friday__item");
		fridayCalendar.appendChild(fridayItem);

		if (deleteBtn.addEventListener('click', () => {
			fridayItem.remove();
		}));

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
		time.innerText = timeHour;

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
		text.innerText = activity;

		let buttonRemove = document.createElement("button");
		buttonRemove.classList.add("calendar__task--button");
		divTask.appendChild(buttonRemove);
		buttonRemove.innerText = "Apagar";

	} else if (week == "Sabado") {

		let saturdayItem = document.createElement("div");
		saturdayItem.classList.add("saturday__item");
		saturdayCalendar.appendChild(saturdayItem);

		if (deleteBtn.addEventListener('click', () => {
			saturdayItem.remove();
		}));

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
		time.innerText = timeHour;

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
		text.innerText = activity;

		let buttonRemove = document.createElement("button");
		buttonRemove.classList.add("calendar__task--button");
		divTask.appendChild(buttonRemove);
		buttonRemove.innerText = "Apagar";

	} else if (week == "Domingo") {

		let sundayItem = document.createElement("div");
		sundayItem.classList.add("sunday__item");
		sundayCalendar.appendChild(sundayItem);

		if (deleteBtn.addEventListener('click', () => {
			sundayItem.remove();
		}));

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
		time.innerText = timeHour;

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
		text.innerText = activity;

		let buttonRemove = document.createElement("button");
		buttonRemove.classList.add("calendar__task--button");
		divTask.appendChild(buttonRemove);
		buttonRemove.innerText = "Apagar";
	}
}

