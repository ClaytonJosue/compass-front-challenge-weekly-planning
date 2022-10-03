const saveLocalStorage = document.querySelector(".button__save");
const deleteLocalStorage = document.querySelector(".button__delete");
const saveCalendar = document.querySelector(".calendar");
const mondayTest = document.querySelector(".monday");

saveLocalStorage.addEventListener('click', () => {
	localStorage.setItem("calendar", JSON.stringify(list));
});

deleteLocalStorage.addEventListener('click', () => {
	localStorage.removeItem("calendar");
	list.splice(0);
	addTask();
})