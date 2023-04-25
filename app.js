
/* var url = document.getElementById("myInput")

let submit = document.getElementById("button")

submit.addEventListener("click", () => {
     console.log(1)
}, true)
*/

async function showData() {
     const response = await fetch("https://www.scribd.com/document_downloads/direct//137661156/?extension=pdf")

     const data = await response.json()
}

showData()