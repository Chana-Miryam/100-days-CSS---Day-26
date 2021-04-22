// Date: April 16, 2021
const dateObj = new Date();
const options = { year: "numeric", day: "numeric", month: "long" };
const date = dateObj.toLocaleDateString("en-US", options);
document.getElementById("current_date").innerHTML = date;

//Day with its full name
const optionsDay = { weekday: "long" };
const dayLong = dateObj.toLocaleDateString("en-US", optionsDay);
document.getElementById("day").innerHTML = dayLong;

// For Each Solution When a task is ticked off
let element1 = document.getElementById("element1");
let element2 = document.getElementById("element2");
let element3 = document.getElementById("element3");
let element4 = document.getElementById("element4");

document.querySelectorAll(".dot").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("check");
    event.currentTarget.classList.toggle("dot");

    if (event.currentTarget.id == "dot1Checked") {
      element1.classList.toggle("checkedListItem");
    } else if (event.currentTarget.id == "dot2Checked") {
      element2.classList.toggle("checkedListItem");
    } else if (event.currentTarget.id == "dot3Checked") {
      element3.classList.toggle("checkedListItem");
    } else {
      element4.classList.toggle("checkedListItem");
    }
  });
});

/*
// Simple solution

let dot1 = document.getElementById("dot1Checked");
let dot2 = document.getElementById("dot2Checked");
let dot3 = document.getElementById("dot3Checked");
let dot4 = document.getElementById("dot4Checked");

let element1 = document.getElementById("element1");
let element2 = document.getElementById("element2");
let element3 = document.getElementById("element3");
let element4 = document.getElementById("element4");

dot1.addEventListener("click", function () {
	dot1.classList.toggle("check");
	dot1.classList.toggle("dot");
	element1.classList.toggle("checkedListItem");
});

dot2.addEventListener("click", function () {
	dot2.classList.toggle("check");
	dot2.classList.toggle("dot");
	element2.classList.toggle("checkedListItem");
});

dot3.addEventListener("click", function () {
	dot3.classList.toggle("check");
	dot3.classList.toggle("dot");
	element3.classList.toggle("checkedListItem");
});

dot4.addEventListener("click", function () {
	dot4.classList.toggle("check");
	dot4.classList.toggle("dot");
	element4.classList.toggle("checkedListItem");
});

*/
