/* Contact us Variables*/
const form = document.getElementById('form')
const userVal = document.getElementById('username')
const emailVal = document.getElementById('email')
const subVal = document.getElementById('subject')
const msgVal = document.getElementById('messgae')

function checkValidation() {
    const userVal = username.value.trim()
    const emailVal = email.value.trim()
    const subVal = subject.value.trim()
    const msgVal = message.value.trim()
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if (userVal === '') {
        setErrorMsg(username)
        alert('Please enter username Value')
    } else {
        setSuccessMsg(username)
    }

    if (emailVal === '') {
        setErrorMsg(email)
        alert('Please enter email value')
    } else if (emailVal.match(pattern)) {
        setSuccessMsg(email)
    } else {
        setErrorMsg(email)
        alert('invalid email')
    }

    if (subVal === '') {
        setErrorMsg(subject)
        alert('Subject Empty')
    } else if (subVal.length >= 10) {
        setErrorMsg(subject)
        alert('Subject is too long minimum character 10')
    } else {
        setSuccessMsg(subject)
    }

    if (msgVal === '') {
        setErrorMsg(message)
        alert('Message is Empty')
    } else if (msgVal.length >= 200) {
        setErrorMsg(message)
        alert('Your message length is too long minimum 200 characters')
    } else {
        setSuccessMsg(message)
        swal("Thank you for Contacting Me", "Successful", "success");

    }



}




function setSuccessMsg(input) {

    const formControl = input.parentElement
    formControl.className = 'form-wrapper success'


}


function setErrorMsg(input) {
    const formControl = input.parentElement
    formControl.className = "form-wrapper error"
}
