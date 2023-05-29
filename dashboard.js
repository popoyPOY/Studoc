var div = document.querySelector('.avatar');


const button = document.querySelector('.login-btn');

let h1 = document.querySelector('.user');

let username = localStorage.getItem("username");

let username_input = document.getElementById("username");
let password_input = document.getElementById("password");
let email_input = document.getElementById("email");


async function pic() {
     var url = `https://api.dicebear.com/6.x/avataaars/svg?seed=${Math.random(100) * 20}`
     response = await fetch(url);

     let blob = await response.blob();
     div.src = URL.createObjectURL(blob);

     sessionStorage.setItem(username, url);

     return url;
}

window.addEventListener('DOMContentLoaded', () => {
     if (sessionStorage.getItem(username)) {
          div.src = sessionStorage.getItem(username)
     } else {
          pic()
     }
})

window.addEventListener('DOMContentLoaded', () => {
     h1.textContent = "Hello " + username;

     username_input.value = localStorage.getItem("username");
     email_input.value = localStorage.getItem("email");
     password_input.value = localStorage.getItem("password");

})

button.addEventListener("click", () => {
     pic()
})
