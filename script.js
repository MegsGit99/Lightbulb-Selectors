const bulb1 = document.querySelector("#lightbulb1");
const bulb2 = document.querySelector("#lightbulb2");
const bulb3 = document.querySelector("#lightbulb3");
const subtitle = document.querySelector(".subtitle");
let count = 0;

function clickHandler() {
    count++;
    subtitle.innerHTML = `You've switched the lights ${count} times`;
    this.classList.toggle("activate");

}

bulb1.addEventListener("click", clickHandler);
bulb2.addEventListener("click", clickHandler);
bulb3.addEventListener("click", clickHandler);

console.log(bulb1, bulb2, bulb3);
