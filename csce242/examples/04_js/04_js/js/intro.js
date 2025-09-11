/*const sayHello = () => {
    console.log("Hello World");
}

document.getElementById("btn-click-me").onclick = sayHello;
*/

document.getElementById("btn-click-me").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "Hello World";
    document.getElementById("btn-click-me").classList.add("clicked");
    event.currentTarget.classList.add("clicked"); //current target is the button that was clicked
};

document.getElementById("happy-click-me").onclick = (event) => {
    document.getElementById("p-yay").innerHTML = "Yay!";
    document.getElementById("happy-click-me").classList.add("happyclicked");
    event.currentTarget.classList.add("happyclicked"); //current target is the button that was clicked
};

document.getElementById("sad-click-me").onclick = (event) => {
    document.getElementById("p-nay").innerHTML = "Nay!";
    document.getElementById("sad-click-me").classList.add("sadclicked");
    event.currentTarget.classList.add("sadclicked"); //current target is the button that was clicked
};

document.getElementById("clear-click-me").onclick = (event) => {
    document.getElementById("p-clear").innerHTML = " ";
    document.getElementById("clear-click-me").classList.add("clearclicked");
    event.currentTarget.classList.add("clearclicked"); //current target is the button that was clicked
};

document.getElementById("btn-happy").onclick = (event) => {
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = "Yay";
    pFeeling.classList.add("happy");
};