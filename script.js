const submit = document.querySelector(".btn-submit");
const dayInput = document.querySelector(".day-input");
const monthInput = document.querySelector(".month-input");
const yearInput = document.querySelector(".year-input");

const yearResult = document.querySelector(".result-year .span");
const monthResult = document.querySelector(".result-month .span");
const dayResult = document.querySelector(".result-day .span");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);
  const currentDate = new Date();

  // Basic validation
  if (
    !day ||
    !month ||
    !year ||
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12 ||
    year > currentDate.getFullYear()
  ) {
    alert("Please enter a valid date.");
    return;
  }

  calculateAge(day, month, year);
});

function calculateAge(bDay, bMonth, bYear) {
  const today = new Date();
  let years = today.getFullYear() - bYear;
  let months = today.getMonth() + 1 - bMonth;
  let days = today.getDate() - bDay;

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  if (days < 0) {
    months--;
    const prevMonthDays = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += prevMonthDays;
  }

  yearResult.innerText = years;
  monthResult.innerText = months;
  dayResult.innerText = days;
}
