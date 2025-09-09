function sayHello() {
    console.log("Hello World");
}

const btnClickMe = document.getElementById("btn-click-me");
btnClickMe.onclick = sayHello();
