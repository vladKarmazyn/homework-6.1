const eyeClose = document.querySelector('.eye_close');
const eyeOpen = document.querySelector('.eye_open');
const passwordType = document.querySelector('.password')

eyeClose.onclick = () =>{
    eyeClose.classList.toggle('hide');
    eyeOpen.classList.toggle('hide');
    passwordType.type='text'
}

eyeOpen.onclick = () =>{
    eyeClose.classList.toggle('hide');
    eyeOpen.classList.toggle('hide');
    passwordType.type='password'
}
