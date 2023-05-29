let username = document.getElementById("username")
let password = document.getElementById("password")


async function Register(data = {}) {
     const response = await fetch("https://localhost:8000/api/users", {
          method: "POST",
          mode: "cors",
          body: JSON.stringify(data)
     })

     return alert(response.json())

}


signup.addEventListener("click", () => {
     if (email.value == '') {
          info.style = "color: red;"
          info.innerHTML = "Information Required"
     }
     else {
          /*localStorage.setItem("email", email.value)
          localStorage.setItem("username", username.value)
          localStorage.setItem("password", password.value)*/
          let data = {
               "username": username.value,
               "password": password.value
          }
          let register = Register(data)

          if (register) {
          info.style = "color: green;"
          info.innerHTML = "Register Success"
          window.location.assign("/login.html")
          }else {
               alert("not working")
          }

     }
})