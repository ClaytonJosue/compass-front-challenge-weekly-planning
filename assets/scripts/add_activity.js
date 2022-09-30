const addInput = document.querySelector(".add-informations__activity");
const weekDay = document.querySelector(".add-information__week");
const hour = document.querySelector(".add-information__hour");
const calendarHour = document.querySelector(".calendar__hour");
const addBtn = document.querySelector(".add-information__button--add");

const mondayCalendar = document.querySelector(".monday");
const tuesdayCalendar = document.querySelector(".tuesday");
const wednesdayCalendar = document.querySelector(".wednesday");
const thursdayCalendar = document.querySelector(".thursday");
const fridayCalendar = document.querySelector(".friday");
const saturdayCalendar = document.querySelector(".saturday");
const sundayCalendar = document.querySelector(".sunday");

const task = document.querySelector(".calendar__task");
const calendarContent = document.querySelector(".calendar-content");

console.log(calendarHour.innerHTML);

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
		let divContent = document.createElement("div");
		divContent.classList.add("calendar-content");
		mondayCalendar.appendChild(divContent);

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
		let divContent = document.createElement("div");
		divContent.classList.add("calendar-content");
		tuesdayCalendar.appendChild(divContent);

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
		let divContent = document.createElement("div");
		divContent.classList.add("calendar-content");
		wednesdayCalendar.appendChild(divContent);

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
		let divContent = document.createElement("div");
		divContent.classList.add("calendar-content");
		thursdayCalendar.appendChild(divContent);

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
		let divContent = document.createElement("div");
		divContent.classList.add("calendar-content");
		fridayCalendar.appendChild(divContent);

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
		let divContent = document.createElement("div");
		divContent.classList.add("calendar-content");
		saturdayCalendar.appendChild(divContent);

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
		let divContent = document.createElement("div");
		divContent.classList.add("calendar-content");
		sundayCalendar.appendChild(divContent);

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
