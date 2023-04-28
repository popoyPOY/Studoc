let email = document.getElementById("email")
let username = document.getElementById("username")
let password = document.getElementById("password")

let login = document.getElementById("login")
let signup = document.getElementById("signup")

let info = document.getElementById("info")



signup.addEventListener("click", () => {
     if (email.value == '') {
          info.style = "color: red;"
          info.innerHTML = "Information Required"
     }
     else {
          localStorage.setItem("email", email.value)
          localStorage.setItem("username", username.value)
          localStorage.setItem("password", password.value)
          info.style = "color: green;"
          info.innerHTML = "Register Success"
          window.location.href = '/login.html'
     }
})


window.addEventListener("keypress", (event) => {
     if (event.key == "Enter") {
          if (email.value == '') {
               info.style = "color: red;"
               info.innerHTML = "Information Required"
          }
          else {
               localStorage.setItem("email", email.value)
               localStorage.setItem("username", username.value)
               localStorage.setItem("password", password.value)
               info.style = "color: green;"
               info.innerHTML = "Register Success"
               window.location.href = '/login.html'
          }
     }

})

