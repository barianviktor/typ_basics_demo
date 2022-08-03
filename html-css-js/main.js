let nameInput = document.form.username;
let emailInput = document.form.email;
let passwordInput = document.form.password;
let rePasswordInput = document.form.repassword;

let usernameIsValid = false;
let emailsValid = false;
let passwordIsValid = false;
let passwordsAreSame = false;
let users = []

let sections = document.querySelectorAll('div')[0]
console.log(sections)
const getData = async () => {

    const url = "http://localhost:3000/user"
    const response = await fetch(url,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    })
    return response.json()
}

function rederUserData(userList){
    const ul = document.querySelector('.user-list');
    ul.innerHTML = ''

    userList.forEach(user => {
        ul.innerHTML += 
        `
            <li>
            <h3>${user.username}</h3>
            <h3>${user.email}</h3>
            </li>
        `
    })

}

document.querySelector('#get-users').addEventListener('click', () => {
    getData()
        .then(users => rederUserData(users))
        .catch(err => console.log(err))
})

const fetchUsers = async () => {
    const url = "http://localhost:3000/user"
    const response = await fetch(url, {
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    })
    return response.json()
}
fetchUsers().then(users => console.log(users))
// (function logInputs(){
    //     console.log(nameInput);
//     console.log(emailInput);
//     console.log(passwordInput);
//     console.log(rePasswordInput);
// })()

function allInputsAreInvalid () {
    let allinvalid = true
    if(usernameIsValid && emailsValid && passwordIsValid && passwordsAreSame){
        allinvalid = false
    }

    return allinvalid
}


nameInput.onchange = () => {
    let nameValue = nameInput.value;
    usernameIsValid = nameValue.length > 5  ? true : false;
    document.querySelector('.error-username').style.display = usernameIsValid ? 'none' : 'block'
    document.querySelector('button').disabled = allInputsAreInvalid()

}
emailInput.onchange = () => {
    let emailValue = emailInput.value;
    emailsValid = emailValue.length  > 5 && emailValue.includes('@')  ? true : false;
    document.querySelector('.error-email').style.display = emailsValid ? 'none' : 'block'
    document.querySelector('button').disabled = allInputsAreInvalid()

}
passwordInput.onchange = () => {
    let passwordValue = passwordInput.value;
    passwordIsValid = passwordValue.length  > 5   ? true : false;
    document.querySelector('.error-password').style.display = passwordIsValid ? 'none' : 'block'
    document.querySelector('button').disabled = allInputsAreInvalid()

}

rePasswordInput.onchange = () => {
    let repasswordValue = rePasswordInput.value
    let originPasswordValue = passwordInput.value
    passwordsAreSame = repasswordValue === originPasswordValue ? true : false
    document.querySelector('.error-re-password').style.display = passwordsAreSame ? 'none' : 'block'
    document.querySelector('button').disabled = allInputsAreInvalid()


}

document.querySelector('.submit-btn').addEventListener('click', () => {

    const user = {
        username:nameInput.value,
        email:emailInput.value,
        password:passwordInput.value
    }
    console.log(user)
    postData(user).then(user => console.log(user)).catch(err => console.log(err))
})

async function postData(user){
    const url = "http://localhost:3000/user"
    const response = await fetch(url, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(user)
    })
    return response.json()
}