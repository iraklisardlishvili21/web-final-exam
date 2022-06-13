function set_date() {
    var item = document.getElementById("registration-date")
    var date = new Date()
    var display_text = "Registration date: "+date.getFullYear()+"."+(date.getMonth()+1)+"."+date.getDate()

    item.innerText = display_text
    console.log(display_text)
}

function check_email() {
    var email = document.getElementById("email").value
    var item = document.getElementById("email")
    const format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+[a-zA-Z0-9-]+)*$/

    if (format.test(email) == true) {
        console.log("email is valid")
        item.style.backgroundColor = "#cdd8ee"
        return true
    }else{
        console.log("email is invalid")
        item.style.backgroundColor = "#ef9191"
        // window.alert("email is invalid")
        return false
    }
}

function check_password() {
    var p1 = document.querySelector("#pass1").value
    var p2 = document.querySelector("#pass2").value
    var item1 = document.getElementById("pass1")
    var item2 = document.getElementById("pass2")

    if (p1 != "" && p2 != "" && p1 == p2) {
        console.log("passwords match")
        item1.style.backgroundColor = "#cdd8ee"
        item2.style.backgroundColor = "#cdd8ee"
        return true
    }else{
        console.log("passwords do not match")
        item1.style.backgroundColor = "#ef9191"
        item2.style.backgroundColor = "#ef9191"
        // window.alert("passwords do not match")
        return false
    }
}
function check_password_strength() {
    var pass = document.querySelector("#pass1").value
    var item = document.getElementById("password-strength")
    const weak = /[a-z]+/
    const medium = /[0-9]+/
    const strong = /[A-Z]+/
    const verystrong = /[.,!#$%&'*+/=?^_`{|}~-]+/

    if (pass == "") {
        item.innerText = "Strength: "
    }else if (pass.match(verystrong) && pass.match(strong) && pass.match(medium) && pass.match(weak)) {
        item.innerText = "Strength: very strong"
    }else if (pass.match(strong) && pass.match(medium) && pass.match(weak)) {
        item.innerText = "Strength: strong"
    }else if (pass.match(medium) && pass.match(weak)) {
        item.innerText = "Strength: medium"
    }else if (pass.match(weak)) {
        item.innerText = "Strength: weak"
    }
}
function register() {
    var text = document.getElementById("password-strength").value
    console.log(text)

    var email = check_email()
    var pass = check_password()

    check_email()
    check_password()
    if (email) {
        if (pass) {
            document.getElementById("register-button").onclick = function () {
                location.href = "main.html"
            }
        }else{
                window.alert("passwords do not match")
        }
    }else{
            window.alert("email is invalid")
    }
}