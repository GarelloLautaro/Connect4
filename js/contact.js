function validateName() {
    if (userName.value.length < 3 && userName.value.length > 0) {
        userName.innerHTML = 'Nombre demasiado corto.'
        console.log('Nombre demasiado corto')
        completeUsername = false
    } else if (userName.value.length === 0) {
        userNameError.innerHTML = 'Campo Incompleto.'
        console.log('Nombre demasiado corto')
        completeUsername = false
    } else {
        userNameError.innerHTML = ''
        completeUsername = true
    }
}

function validateSurname() {
    if (surname.value.length < 3 && surname.value.length > 0) {
        surname.innerHTML = 'Apellido demasiado corto.'
        console.log('Apellido demasiado corto')
        completesurname = false
    } else if (surname.value.length === 0) {
        surnameError.innerHTML = 'Campo Incompleto'
        console.log('Apellido demasiado corto')
        completesurname = false
    } else {
        surnameError.innerHTML = ''
        completesurname = true
    }
}

function validateEmail() {
    var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
    if (pattern.test(email.value)) {
        emailError.innerHTML = ''
        completeEmail = true
    } else {
        emailError.innerHTML = 'Formato de email incorrecto'
        console.log('Formato de email incorrecto')
        completeEmail = false
    }
}

function validateComment() {
    if (comment.value.length < 15) {
        commentsError.innerHTML = 'El comentario debe tener al menos 15 caracteres'
        console.log('El comentario debe tener al menos 15 caracteres')
        completeComments = false
    } else {
        commentsError.innerHTML = ''
        completeComments = true
    }
}

var showAlert = function () {
    alert("Formulario enviado exitosamente")
}

function cleanInputs() {
    if (completeUsername && completesurname && completeEmail && completeComments) {
        userName.value = ''
        surname.value = ''
        email.value = ''
        comment.value = ''
        showAlert()
    } else {
        console.log('Para poder ver los datos, debes ingresar todos los campos obligatorios')
    }
}

var sendForm = function () {
    console.clear()
    validateName()
    validateSurname()
    validateEmail()
    validateComment()
    cleanInputs()
    return false
}

window.onload = function () {
    userName = document.getElementById('name')
    surname = document.getElementById('surname')
    age = document.getElementById('age')
    email = document.getElementById('email')
    commentsError = document.getElementById('commentsError')
    back = document.getElementById('back')
    submit = document.getElementById('submit')
    submit.onclick = sendForm
}