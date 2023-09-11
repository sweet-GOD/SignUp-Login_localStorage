const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmPass");
const regBtn = document.getElementById("regBtn");
const displayTop = document.getElementById("displayTop");
const loginBtn = document.getElementById('loginBtn')

// localStorage.clear()
const arr = []
const text = "Welcome to Sqi";
let counter = 0;

displayTop.innerHTML += text[counter]
let timer = setInterval(()=>{
    if(counter < text.length -1){
        counter++
        displayTop.innerHTML += text[counter]
    } else if (counter == text.length -1){
        clearInterval(timer)
    }
}, 100)



regBtn.addEventListener('click', ()=>{
    if (userName.value == "" || email.value == "" || password.value == "" || confirmPass.value == ""){
        alert("Input field cannot be empty")
    }else if(password.value !== confirmPass.value){
        alert('Password does not match')
    }else if(password.value.length < 8){
        alert("Password must be at least 8 characters")
    }else{
        const obj = {
            Username: userName.value,
            Email: email.value,
            Password: password.value,
            ConfirmPass: confirmPass.value
        }
        
        arr.push(obj)
        alert('Registration Successful!')
        userName.value = ""
        email.value = ""
        password.value = ""
        confirmPass.value = ""
        email.value = ""
    }
    
    console.log(arr)
    localStorage.setItem('Users', JSON.stringify(arr));
})

loginBtn.addEventListener('click', ()=>{
    const getUser = JSON.parse(localStorage.getItem('Users'))
    const loginUsername = document.getElementById('loginUsername');
    const logpassword = document.getElementById('logpassword');
    
    const foundUser = getUser.find(user => user.Username === loginUsername.value || user.Email === loginUsername.value);
    const matchPassword = getUser.find(user => user.Password === logpassword.value);
    if(foundUser && matchPassword){
        alert('Login successful')
    } else {
        alert('Login failed')
    }

});

function eye1(){
    logpassword.type === "password" ? logpassword.type = "text"
    : logpassword.type = "password"
}
function eye(){
    password.type === "password" ? password.type = "text"
    : password.type = "password"
}

function eye2(){
    confirmPass.type === "password" ? confirmPass.type = "text"
    : confirmPass.type = "password"
}
function eye4(){
    logconfirmPass.type === "password" ? logconfirmPass.type = "text"
    : logconfirmPass.type = "password"
}

const caroBtn = document.getElementById('caroBtn')
const mode = document.getElementById('mode')
const body = document.querySelector('body')
    
caroBtn.style.color = "lightyellow"
caroBtn.style.background = "darkslategray"
mode.style.color = "lightyellow"
mode.style.background = "darkslategray"
body.style.color = "darkslategray"
body.style.background = "lightyellow"

mode.addEventListener('click', () => {
    body.style.background == "lightyellow" ? body.style.background = "darkslategray"
    : body.style.background = "lightyellow"
    body.style.color == "darkslategray" ? body.style.color= "lightyellow" 
    : body.style.color= "darkslategray" 

    mode.style.color == "lightyellow" ? mode.style.color = "darkslategray"
    : mode.style.color = "lightyellow"
    mode.style.background == "darkslategray" ? mode.style.background = "lightyellow"
    : mode.style.background = "darkslategray"

    caroBtn.style.color == "lightyellow" ? caroBtn.style.color = "darkslategray"
    : caroBtn.style.color = "lightyellow"
    caroBtn.style.background == "darkslategray" ? caroBtn.style.background = "lightyellow"
    : caroBtn.style.background = "darkslategray"
})

const registerForm = document.querySelector('.registerForm');
const loginForm = document.querySelector('.loginForm');
const loginHere = document.querySelector('#loginHere');
const registerHere = document.querySelector('#registerHere')

loginForm.style.display = "none"
loginHere.addEventListener('click', ()=>{
    loginForm.classList.add('active')
    // registerForm.classList.add('active')
    loginForm.style.display = "block"
    registerForm.style.display = "none"
})
registerHere.addEventListener('click', ()=>{
    loginForm.classList.remove('active')
    loginForm.style.display = "none"
    registerForm.style.display = "block"

})