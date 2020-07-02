let h1El = document.querySelector("h1");

let para = document.createElement("p");
let h3El = document.createElement("h3");
let divEl = document.createElement("div");
let h1Div = document.createElement("h1");
let paraDiv = document.createElement("p");

divEl.style.background = "pink";
divEl.style.borderColor = "black";
divEl.innerHTML = "Hey I'm a div";
divEl.appendChild(h1Div);
divEl.appendChild(paraDiv);

paraDiv.innerHTML = "Me too";
h1Div.innerHTML = "Hey I'm inside a div";
h3El.innerHTML = "Hey I'm a blue h3";
h3El.style.color = "blue";
para.innerHTML = "Hey I'm red";
para.style.color = "red";

h1El.style.color = "blue";

let bodyElement = document.querySelector("body");
bodyElement.appendChild(para);
bodyElement.appendChild(h3El);
bodyElement.appendChild(divEl);