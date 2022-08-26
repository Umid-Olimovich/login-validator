const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit', (event)=>{
    
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
       
     }else {
         event.preventDefault();
        
     }
    
});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    
        
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });

}

function validateForm() {
    
    if(usernameInput.value.trim()==''){
        setError(usernameInput, 'ismni kiriting');
    }else if(usernameInput.value.trim().length <5 || usernameInput.value.trim().length > 15){
        setError(usernameInput, 'ism  5ta harfdan kam va 15 ta harfdan kop bolmasin ');
    }else {
        setSuccess(usernameInput);
    }

    if(emailInput.value.trim()==''){
        setError(emailInput, 'address kiriting');
    }else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);
        
    }else{
        setError(emailInput, 'Addresni to`gri kiriting');
    }

    if(passwordInput.value.trim()==''){
        setError(passwordInput, 'parolni kiriting');
    }else if(passwordInput.value.trim().length <6 || passwordInput.value.trim().length >20){
        setError(passwordInput, 'parol 6tadan kam 20ta belgidan kop bolmasin');
    }else {
        setSuccess(passwordInput);
    }
    
    if(confirmPasswordInput.value.trim()==''){
        setError(confirmPasswordInput, 'parolni kiriting');
    }else if(confirmPasswordInput.value !== passwordInput.value){
        setError(confirmPasswordInput, 'Parolni togri kiriting');
    }else {
        setSuccess(confirmPasswordInput);
    }
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');

    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
       
    }
    parent.classList.add('success');
}

function isEmailValid(email){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    modalOpen();
    return reg.test(email);

       
    


}
var modalEl = document.querySelector(".mymodal");

modalEl.addEventListener('click', (event) => {
    if (event.target.classList.contains("mymodal"))
        modalClose()
})
function modalOpen() {
    modalEl.classList.add("mymodal--open");
}

function modalClose() {
    modalEl.classList.remove("mymodal--open");
}
