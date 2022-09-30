const mondayButton = document.querySelector(".week__days--item-segunda");
const tuesdayButton = document.querySelector(".week__days--item-terca");
const wednesdayButton = document.querySelector(".week__days--item-quarta");
const thursdayButton = document.querySelector(".week__days--item-quinta");
const fridayButton = document.querySelector(".week__days--item-sexta");
const saturdayButton = document.querySelector(".week__days--item-sabado");
const sundayButton = document.querySelector(".week__days--item-domingo");
const removeBtn = document.querySelector(".add-information__button--remove");

const monday_item = document.querySelector(".monday__item");
const tuesday_item = document.querySelector(".tuesday__item");
const wednesday_item = document.querySelector(".wednesday__item");
const thursday_item = document.querySelector(".thursday__item");
const friday_item = document.querySelector(".friday__item");
const saturday_item = document.querySelector(".saturday__item");
const sunday_item = document.querySelector(".sunday__item");

const monday = document.querySelector(".monday");
const tuesday = document.querySelector(".tuesday");
const wednesday = document.querySelector(".wednesday");
const thursday = document.querySelector(".thursday");
const friday = document.querySelector(".friday");
const saturday = document.querySelector(".saturday");
const sunday = document.querySelector(".sunday");

// Monday
mondayButton.addEventListener('click', () => {
	mondayButton.setAttribute('style', 'transform: scale(1.2);');
	tuesdayButton.setAttribute('style', 'transform: scale(1);');
	wednesdayButton.setAttribute('style', 'transform: scale(1);');
	thursdayButton.setAttribute('style', 'transform: scale(1);');
	fridayButton.setAttribute('style', 'transform: scale(1);');
	saturdayButton.setAttribute('style', 'transform: scale(1);');
	sundayButton.setAttribute('style', 'transform: scale(1);');

	monday.classList.remove('hidden');
	tuesday.classList.add('hidden');
	wednesday.classList.add('hidden');
	thursday.classList.add('hidden');
	friday.classList.add('hidden');
	saturday.classList.add('hidden');
	sunday.classList.add('hidden');

	removeBtn.addEventListener('click', () => {
		deleteTask();
	})

	function deleteTask() {
		monday_item.remove();
	}
});

// Tuesday
tuesdayButton.addEventListener('click', () => {
	mondayButton.setAttribute('style', 'transform: scale(1);');
	tuesdayButton.setAttribute('style', 'transform: scale(1.2);');
	wednesdayButton.setAttribute('style', 'transform: scale(1);');
	thursdayButton.setAttribute('style', 'transform: scale(1);');
	fridayButton.setAttribute('style', 'transform: scale(1);');
	saturdayButton.setAttribute('style', 'transform: scale(1);');
	sundayButton.setAttribute('style', 'transform: scale(1);');

	monday.classList.add('hidden');
	tuesday.classList.remove('hidden');
	wednesday.classList.add('hidden');
	thursday.classList.add('hidden');
	friday.classList.add('hidden');
	saturday.classList.add('hidden');
	sunday.classList.add('hidden');

	removeBtn.addEventListener('click', () => {
		deleteTask();
	})

	function deleteTask() {
		tuesday_item.remove();
	}
});

// Wednesday
wednesdayButton.addEventListener('click', () => {
	mondayButton.setAttribute('style', 'transform: scale(1);');
	tuesdayButton.setAttribute('style', 'transform: scale(1);');
	wednesdayButton.setAttribute('style', 'transform: scale(1.2);');
	thursdayButton.setAttribute('style', 'transform: scale(1);');
	fridayButton.setAttribute('style', 'transform: scale(1);');
	saturdayButton.setAttribute('style', 'transform: scale(1);');
	sundayButton.setAttribute('style', 'transform: scale(1);');

	monday.classList.add('hidden');
	tuesday.classList.add('hidden');
	wednesday.classList.remove('hidden');
	thursday.classList.add('hidden');
	friday.classList.add('hidden');
	saturday.classList.add('hidden');
	sunday.classList.add('hidden');

	removeBtn.addEventListener('click', () => {
		deleteTask();
	})

	function deleteTask() {
		wednesday_item.remove();
	}
});

// Thursday
thursdayButton.addEventListener('click', () => {
	mondayButton.setAttribute('style', 'transform: scale(1);');
	tuesdayButton.setAttribute('style', 'transform: scale(1);');
	wednesdayButton.setAttribute('style', 'transform: scale(1);');
	thursdayButton.setAttribute('style', 'transform: scale(1.2);');
	fridayButton.setAttribute('style', 'transform: scale(1);');
	saturdayButton.setAttribute('style', 'transform: scale(1);');
	sundayButton.setAttribute('style', 'transform: scale(1);');

	monday.classList.add('hidden');
	tuesday.classList.add('hidden');
	wednesday.classList.add('hidden');
	thursday.classList.remove('hidden');
	friday.classList.add('hidden');
	saturday.classList.add('hidden');
	sunday.classList.add('hidden');

	removeBtn.addEventListener('click', () => {
		deleteTask();
	})

	function deleteTask() {
		thursday_item.remove();
	}
});

// Friday
fridayButton.addEventListener('click', () => {
	mondayButton.setAttribute('style', 'transform: scale(1);');
	tuesdayButton.setAttribute('style', 'transform: scale(1);');
	wednesdayButton.setAttribute('style', 'transform: scale(1);');
	thursdayButton.setAttribute('style', 'transform: scale(1);');
	fridayButton.setAttribute('style', 'transform: scale(1.2);');
	saturdayButton.setAttribute('style', 'transform: scale(1);');
	sundayButton.setAttribute('style', 'transform: scale(1);');

	monday.classList.add('hidden');
	tuesday.classList.add('hidden');
	wednesday.classList.add('hidden');
	thursday.classList.add('hidden');
	friday.classList.remove('hidden');
	saturday.classList.add('hidden');
	sunday.classList.add('hidden');

	removeBtn.addEventListener('click', () => {
		deleteTask();
	})

	function deleteTask() {
		friday_item.remove();
	}
});

// Saturday
saturdayButton.addEventListener('click', () => {
	mondayButton.setAttribute('style', 'transform: scale(1);');
	tuesdayButton.setAttribute('style', 'transform: scale(1);');
	wednesdayButton.setAttribute('style', 'transform: scale(1);');
	thursdayButton.setAttribute('style', 'transform: scale(1);');
	fridayButton.setAttribute('style', 'transform: scale(1);');
	saturdayButton.setAttribute('style', 'transform: scale(1.2);');
	sundayButton.setAttribute('style', 'transform: scale(1);');

	monday.classList.add('hidden');
	tuesday.classList.add('hidden');
	wednesday.classList.add('hidden');
	thursday.classList.add('hidden');
	friday.classList.add('hidden');
	saturday.classList.remove('hidden');
	sunday.classList.add('hidden');

	removeBtn.addEventListener('click', () => {
		deleteTask();
	})

	function deleteTask() {
		saturday_item.remove();
	}
});

// Sunday
sundayButton.addEventListener('click', () => {
	mondayButton.setAttribute('style', 'transform: scale(1);');
	tuesdayButton.setAttribute('style', 'transform: scale(1);');
	wednesdayButton.setAttribute('style', 'transform: scale(1);');
	thursdayButton.setAttribute('style', 'transform: scale(1);');
	fridayButton.setAttribute('style', 'transform: scale(1);');
	saturdayButton.setAttribute('style', 'transform: scale(1);');
	sundayButton.setAttribute('style', 'transform: scale(1.2);');

	monday.classList.add('hidden');
	tuesday.classList.add('hidden');
	wednesday.classList.add('hidden');
	thursday.classList.add('hidden');
	friday.classList.add('hidden');
	saturday.classList.add('hidden');
	sunday.classList.remove('hidden');

	removeBtn.addEventListener('click', () => {
		deleteTask();
	})

	function deleteTask() {
		sunday_item.remove();
	}
});