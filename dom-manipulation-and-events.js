const container = document.querySelector("#container");

const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey, I'm red!";
container.appendChild(para);

const heading = document.createElement("h3");
heading.setAttribute("style", "color: blue");
heading.textContent = "I'm a blue h3!";
container.appendChild(heading);

const div = document.createElement("div");
div.setAttribute("style", "border: 2px solid black; background-color: pink");
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);
const para2 = document.createElement("p");
para2.textContent = "ME TOO!";
div.appendChild(para2);
container.appendChild(div);

const btn = document.querySelector("#btn");
btn.onclick = () => console.log("Hello again! :D");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function (e) {
    console.log(e);
});

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => console.log(button.id));
});
