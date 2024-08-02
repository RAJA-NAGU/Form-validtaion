const form = document.querySelector(".signup-form")
const username = document.querySelector(".user-name")
const email = document.querySelector(".email")
const password = document.querySelector(".password")
const cpassword = document.querySelector(".c-password")

form.addEventListener("submit", (el)=>{
    el.preventDefault();
    formvalidate();
})

function seterror(element,message){
    let formcontrol = element.parentElement
    formcontrol.className = "form-control error"
    formcontrol.querySelector(".message").textContent = message
}

function setsuccess(element){
    let formcontrol = element.parentElement
    formcontrol.className = "form-control success"
    formcontrol.querySelector(".message").textContent = "none"
}

function validemail(email) {
    const valid = /^[a-zA-Z0-9!%^&*_-{}|]+@[a-zA-Z0-9]+\.[a-zA-z]+$/;
    return valid.test(email);
}


function formvalidate(){

    let namevalue = username.value.trim()
    let emailvalue = email.value.trim()
    let passwordvalue = password.value.trim()
    let cpasswordvalue = cpassword.value.trim()

    // username check
    if(namevalue === ""){
        seterror(username,"user name cannot be empty")
    }
    else if(namevalue.length <5){
        seterror(username,"Name must have atleast six Charectors")
    }
    else {
        setsuccess(username)
    }

    // email id check
    if(emailvalue === ""){
        seterror(email , "Email cannot empty")
    }
    else if(!validemail(emailvalue)){
        seterror(email , "Enter valid email address")
    }
    else{
        setsuccess(email)
    }
    

    // password check

    if(passwordvalue === ""){
        seterror(password, "Password cannot be empty")
    }
    else if(passwordvalue.length <5){
        seterror(password,"Password must have atleast five charecters")
    }
    else{
        setsuccess(password)
    }


    // confirm password check

    if(cpasswordvalue === ""){
        seterror(cpassword, "password cannot be empty")
    }
    else if(cpasswordvalue != passwordvalue){
        seterror(cpassword , "Password does not match")
    }
    else{
        setsuccess(cpassword)
    }





}



